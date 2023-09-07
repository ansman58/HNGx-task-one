import express from "express";
import dotenv from "dotenv";
import { getDetails } from "./controllers/getDetails";

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const port = process.env.PORT || 3003;

app.get("/", (req, res) => {
  res.send({
    message: "Welcome to HNGx Task One",
    info: "Visit /details?track={your-track}&slack_name={your-slack-name}",

  })
})

app.get("/details", getDetails);

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
