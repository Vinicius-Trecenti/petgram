import { z } from "zod";

const validate = z.object({
    email: z.string().email("Por favor, insira um email válido."),
    password: z.string().min(8, "A senha deve ter pelo menos 8 caracteres."),
})

export default function login(email: string, password: string) {
    try {

        validate.parse({ email, password });
        console.log("Login realizado com sucesso!");
        return null;

    }
    catch (error) {

        if (error instanceof z.ZodError) {
            console.log(error.issues);
            return error.errors;
        }
    }

    console.log(email, password);
}