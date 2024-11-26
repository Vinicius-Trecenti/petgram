import { z } from "zod";

const validate = z.object({
    email: z.string().email("Por favor, insira um email válido."),
    fullname: z.string().min(3, "O nome deve ter pelo menos 3 caracteres."),
    username: z.string().min(3, "O username deve ter pelo menos 3 caracteres."),
    password: z.string().min(8, "A senha deve ter pelo menos 8 caracteres."),
})


export default async function register(email: string, fullname: string, username: string, password: string) {
    try {
        validate.parse({ email, fullname, username, password });

        const response = await fetch("http://localhost:4000/mainRoutes/user", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, fullname, username, password }),
        });

        if (!response.ok) {
            console.log("Erro ao criar usuário:", response.status);
            const errorData = await response.json();
            return errorData.errors || []; // Retorna um array de erros ou vazio
        }

        const responseData = await response.json();
        console.log("Usuário criado com sucesso:", responseData);
        return responseData;
    } catch (error) {
        console.error("Erro inesperado:", error);

        // Retorna um erro genérico em caso de problemas com a requisição
        return [{ path: ["unknown"], message: "Erro ao conectar ao servidor. Tente novamente mais tarde." }];
    }
}
