import express, { Application, Request, Response } from "express";
import cors from "cors";
import mysql from "mysql2";

const app: Application = express();
const PORT = 3000;
app.use(cors({ origin: "http://localhost:3001" }));

const connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "Noko9092",
  database: "stock_db",
});

app.get("/", (req: Request, res: Response) => {
  const sql = "SELECT * FROM product";
  connection.query(sql, (error, result) => {
    if (error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(200).json({ todos: result });
    }
  });
});

try {
  app.listen(PORT, () => {
    console.log(`server running at://localhost:${PORT}`);
  });
} catch (e) {
  if (e instanceof Error) {
    console.error(e.message);
  }
}
