import multer from "multer";
import path from "path";
import crypto from "crypto";

module.exports = {
    des: path.resolve(__dirname, '..', '..', 'temp', 'uploads'),
    storage: multer.diskStorage({
        destination: (req, res, cb) => {
            cb (null, path.resolve(__dirname, '..', '..', 'temp', 'uploads'));
        }
    }),
    limits: {
        fileSize: 2 * 1024 * 1024
    },
    fileFilter: (req, file, cb) => {
        const allowedMimes = [
            'image/jpeg',
            'image/pjpeg'
        ]
        if(allowedMimes.includes(file.mimetype)){
            cb(null, true);
        } else {
            cb(new Error("invalid file type"));
        }
    }
};