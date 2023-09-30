import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config({ path: "./.env" });
import userRoute from "./routes/userRoute.js";
import recipesRoute from "./routes/recipesRoute.js";

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());


app.use("/api/user", userRoute);
app.use("/api/recipes", recipesRoute);

app.listen(PORT, () => {
  console.log(`fro api http://127.0.0.1:${PORT}`);
});
