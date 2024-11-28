import { z } from "zod";

const validate = z.object({
    email: z.string().email("Por favor, insira um email válido."),
    fullname: z.string().min(17, "O nome deve ter pelo menos 17 caracteres."),
    username: z.string().min(3, "O username deve ter pelo menos 3 caracteres."),
    password: z.string().min(8, "A senha deve ter pelo menos 8 caracteres."),
})


export default async function register(email: string, fullname: string, username: string, password: string) {
    try {
        const parseData = validate.parse({ email, fullname, username, password });

        const response = await fetch("http://localhost:4000/mainRoutes/user/userCreate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(parseData),
        });

        if (!response.ok) {
            console.log("Erro ao criar usuário:", response.status);
            const errorData = await response.json();
            return { success: false, error: errorData.errors || [] };
        }

        if (response.ok) {
            const responseData = await response.json();
            return { success: true, data: responseData };
        }

    } catch (error) {
        if (error instanceof z.ZodError) {
            // Retorna os erros de validação do Zod
            return { success: false, errors: error.errors.map(err => ({
                path: err.path,
                message: err.message,
            })) };
        }
    }
}
