import express from "express";
import cors from "cors";
import multer from "multer";
//import multerConfig from "./config/multer";
import { ObjectId } from "mongodb";
import dotenv from "dotenv";

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));  //7:40
app.use(cors());

const upload = multer({ dest: './temp/uploads/' })

app.post("/", upload.single('file'), (req,res) => {
    res.send(req.body.nome);
})

const port = process.env.PORT || 5000;
app.listen(port);