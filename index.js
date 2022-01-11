import express, { response } from "express";
import fs from "fs/promises";

const app = express();

app.get("/", async (req, res) => {
  try {
    const fileBuf = await fs.readFile("./index.html", (err, data) => {
      console.info(data);
      console.info(err);
    });
    res.type("html");
    res.send(fileBuf);
} catch (err) {
    console.log(err);
    res.status(404);
    res.send("page not found");
}
});

app.get('/*', async (req, res) =>{
    const fileName = req.path;
    const fileBuf = await fs.readFile(`./${fileName}`);
    const type = fileName.split('.')[1];
    res.type(type);
    res.send(fileBuf);
})

app.listen(5080);
