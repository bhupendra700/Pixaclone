// to push on github command is following
// PS C:\Users\bhupe\OneDrive\Desktop\New folder\Project>  path
// git add pixabay_backend
// git commit -m "adding"
// git push origin main  


const express = require("express");
const dotenv = require("dotenv");
dotenv.config()
const multer = require("multer")
const cloudinary = require("cloudinary").v2;
const cors = require("cors");
const app = express();
const port = process.env.PORT || 8000;
const fs = require("fs")

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//multer diskStorage setup
const upload = multer({ dest: "uploads" })

//cloudinary setup
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_secret: process.env.API_SECRET,
    api_key: process.env.API_KEY,
})

app.get('/', (req, res) => {
    return res.send("hello world")
})

app.post('/upload', upload.single("sendfile"), async (req, res) => {
    try {
        const filePath = req.file.path;

        const { photoURL } = req.body;

        const publicId = JSON.parse(photoURL)?.public_id || "";

        const options = {}

        if (publicId) {
            options.public_id = publicId;
            options.overwrite = true;
        } else {
            options.folder = "UserImage";
        }

        const cloudinaryResponse = await cloudinary.uploader.upload(filePath, options)

        fs.unlinkSync(filePath);

        return res.status(200).json({ public_id: cloudinaryResponse.public_id, url: cloudinaryResponse.url });

    } catch (error) {
        return res.status(404).send(error.message);
    }
})

//this is deleting
app.put('/delete', async (req, res) => {
    try {
        const { publicId }= req.body
        await cloudinary.uploader.destroy(publicId)
        res.status(200).send("Ok")
    } catch (error) {
        return res.status(404).send(error.message);
    }
})

app.listen(port, () => {
    console.log("Server is started listening");
})
