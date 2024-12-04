import { NextResponse } from "next/server";

export function middleware(req: any) {
    const token = req.cookies.get('token');

    if(!token) {
        return NextResponse.redirect(new URL('/login', req.url));
    }

    try{
        //verificar se o token e valido
    } catch (error) {
        return NextResponse.redirect(new URL('/login', req.url));
    }
}