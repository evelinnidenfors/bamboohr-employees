import express from 'express';
import { getEmployees } from "./bambooApi.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();

const port = process.env.PORT || 3000;
app.use(express.json());


app.get("/", async (req, res) => {
  const employees = await getEmployees();
  res.json(employees);
});

app.listen(port, () => {
  console.log(`🐼🎋 on ${port}`);
});
