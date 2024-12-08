import express, { RequestHandler } from 'express';
import { upload } from './multer.js';
import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs/promises';

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

export const uploadFiles: RequestHandler = async (req, res, next) => {
    console.log('entrou no upload');
      
    try{
        const files = req.files as Express.Multer.File[];
        if (!files || files.length === 0) {
            res.status(400).json({ message: "No files uploaded" });
            return;
        }
        console.log(files);

        const imageUrls: string[] = [];

        for (const image of files) {
            console.log('loop');
            const result = await cloudinary.uploader.upload(image.path, {
                folder: 'posts',
                resource_type: 'image',
                });

            imageUrls.push(result.secure_url);
            
            await fs.unlink(image.path);
            console.log('loop');

        }
        
        
        req.body.images = imageUrls;
        next(); 

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: `Error internal: upload  ${error}` });
        return; 
    }
}

