const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.


const controller = require("./controller");

app.get("/api/compliment", controller.getCompliment);
app.get("/api/fortune", controller.getFortune);
app.post("/api/submit", controller.postSubmit);
app.get("/api/submit2", controller.getSubmit2);
app.get("/api/submit3", controller.getSubmit3);

app.listen(4000, () => console.log("Server running on 4000"));

