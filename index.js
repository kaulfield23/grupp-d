import fs from "fs/promises";
import { engine } from "express-handlebars";
import express from "express";

const app = express();
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./templates");

app.get("/", async (req, res) => {
    res.render('index', {layout : 'main'});
});

app.get("/moviepage", async (req, res) => {
  res.render('moviePage', {layout : 'main'});

});
app.get("/tickets", async (req, res) => {
  res.render('tickets', {layout : 'main'});

});
app.get("/covid", async (req, res) => {
  res.render('covid', {layout : 'main'});

});
app.use(express.static("./"));

// app.get('/*', async (req, res) =>{
//     const fileName = req.path;
//     const fileBuf = await fs.readFile(`./${fileName}`);
//     const type = fileName.split('.')[1];
//     res.type(type);
//     res.send(fileBuf);
// })

app.listen(5080);
