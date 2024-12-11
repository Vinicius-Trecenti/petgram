import { z } from "zod";
import Cookies from "js-cookie";
const validate = z.object({
    email: z.string().email("Por favor, insira um email válido."),
    password: z.string().min(8, "A senha deve ter pelo menos 8 caracteres."),
})

export default async function login(email: string, password: string) {
    try {

        console.log(email, password)
        const parsedData = validate.parse({ email, password });

        const response = await fetch("http://localhost:4000/mainRoutes/auth/loginEmail", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(parsedData),
        });

        console.log(response)
        if (!response.ok) {

            if(response.status === 401) {
                return {
                    alert: true,
                    error: "Credenciais inválidas. Por favor, verifique seu email e senha." };
            }
            if(response.status === 404) {
                return {
                    alert: true,
                    error: "Credenciais inválidas. Por favor, verifique seu email e senha." };
            }
            if(response.status === 500) {
                return {
                    alert: true,
                    error: "Erro interno no servidor. Por favor, tente novamente mais tarde." };
            }

            const errorData = await response.json();

            if (errorData.fieldErrors) {
                const fieldErrors = Object.entries(errorData.fieldErrors).map(([field, messages]) => {
                    return { path: [field], message: messages[0] };
                });

                return { success: false, errors: fieldErrors };
            }

            return { success: false, error: errorData.error || "Erro desconhecido no servidor." };
        }

        const responseData = await response.json();

        Cookies.set("token", responseData.token,
            {
                expires: 7,
                secure: true,
                sameSite: "strict",
            }
        );

        Cookies.set("refreshToken", responseData.refreshToken,
            {
                expires: Math.floor(responseData.refreshToken.expiresIn / (60 * 60 * 24)),
                secure: true,
                sameSite: "strict",
            }
        );

        Cookies.set("userId", responseData.refreshToken.userId, {
            expires: 7, // Ou o tempo desejado
            secure: true,
            sameSite: "strict",
        });

        console.log(responseData)
        return { success: true, data: responseData };

    }
    catch (error) {
        if (error instanceof z.ZodError) {
            return {
                success: false,
                errors: error.errors.map((err) => ({
                    path: err.path,
                    message: err.message,
                })),
            };
        }

        console.error("Erro inesperado:", error);
        return {
            success: false,
            error: "Erro ao conectar ao servidor. Tente novamente mais tarde.",
        };
    }

}