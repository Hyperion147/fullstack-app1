import { v2 as cloudinary } from "cloudinary";
import fs from "fs"

const uploadOnCloudinary = (async function (localFilePath) {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });

  try {
    if (!localFilePath) return null;
    const uploadResult = await cloudinary.uploader
    .upload(localFilePath,
      {
        public_id: "shoes",
        resource_type: "auto"
      },
      console.log("Uploaded"),
      uploadResult.url
    );
    return uploadResult;
  } catch (error) {
    console.log(error);
    fs.unlinkSync(localFilePath)
    return null
  }
})

export default uploadOnCloudinary