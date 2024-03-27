import { v2 as cloudinary } from 'cloudinary';
import fs from "node:fs"

cloudinary.config({
    cloud_name: process.env.CLOUDNIARY_CLOUD_NAME,
    api_key: process.env.CLOUDNIARY_API_KEY,
    api_secret: process.env.CLOUDNIARY_API_SECRET
});

// cloudinary.config({ 
//     cloud_name: 'dr1ah4q5y', 
//     api_key: '916964336369752', 
//     api_secret: '***************************' 
//   });

const uploadOnCloudinary = async function (localFilePath) {
    try {
        if (!localFilePath) return null
        cloudinary.uploader.upload(localFilePath, {
            access_mode: auto,
        })
    } catch (error) {
        fs.unlink(localFilePath) // ye file ko delete kar dega
        return next
    }
}

export { uploadOnCloudinary }