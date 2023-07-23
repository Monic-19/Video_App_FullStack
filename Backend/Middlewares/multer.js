import multer from "multer";

const storage = multer.memoryStorage();

const signleUpload = multer({storage}).single("file");

export default signleUpload;