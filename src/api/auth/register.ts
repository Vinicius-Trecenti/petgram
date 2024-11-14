import { z } from "zod";

const validate = z.object({
    email: z.string().email("Por favor, insira um email válido."),
    name: z.string().min(3, "O nome deve ter pelo menos 3 caracteres."),
    username: z.string().min(3, "O username deve ter pelo menos 3 caracteres."),
    password: z.string().min(8, "A senha deve ter pelo menos 8 caracteres."),
})


export default function register(email: string, name: string, username: string, password: string) {
    try {

        validate.parse({ email, name, username, password });
        return null;

    }
    catch (error) {

        if (error instanceof z.ZodError) {
            return error.errors;
        }
    }

}