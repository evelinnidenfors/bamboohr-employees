import "dotenv/config";
import express from "express";
import { getEmployees } from "./bambooApi.js";

const app = express();
const port = 3000;
app.use(express.json());

app.get("/", async (req, res) => {
  const employees = await getEmployees();
  res.json(employees);
});

app.listen(port, () => {
  console.log("`🐼🎋 on ${port}`");
});
