import { RequestHandler } from "express";

const logger: RequestHandler = async (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
}

export default logger;