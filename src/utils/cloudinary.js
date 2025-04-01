import { v2 as Cloudinary } from "cloudinary";
import fs from "fs";

// Configuration
Cloudinary.config({
  cloud_name: "process.env.CLOUDINARY_CLOUD_NAME",
  api_key: "process.env.CLOUDINARY_API_KEY",
  api_secret: "process.env.CLOUDINARY_API_SECRET",
});

const uplodOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    //upload the file cloudinary
    const responce = await Cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    // file has uploaded succesfully
    console.log("Files is uploaded succesfull", responce.url);
    return responce;
  } catch (error) {
    fs.unlink(localFilePath); //remove the localy saved tempary file as the uplod operation got faild
    return null;
  }
};

export { uplodOnCloudinary };
