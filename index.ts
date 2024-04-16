import express, { Application, Request, Response } from "express";
import cors from "cors";
import { uid } from "uid";
import mysql from "mysql2";

const app: Application = express();
const PORT = 3000;

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Noko9092",
    database: "stock_db",
  });

  app.get("/", (req: Request, res: Response) => {
    console.log("getリクエストを受け付けました。");
    const sql = "SELECT * FROM product";
    connection.query(sql, (error, result) => {
      if (error) {
        res.status(500).json({ message: error.message });
      } else {
        res.status(200).json({ todos: result });
      }
    });
  });

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/add", (req: Request, res: Response) => {
    console.log("postリクエストを受け付けました。");
    console.log(req.body.data.todo);
    const { todo } = req.body.data;
    const uidValue = uid();
    return res.status(200).json({ id: uidValue, todo });
  });

app.delete("/delete", (req: Request, res: Response) => {
console.log("deleteリクエストを受け付けました。");
console.log(req.body.id);
return res.status(200).json({ message: "success" });
});

app.put("/update", (req: Request, res: Response) => {
console.log("putリクエストを受け付けました。");
console.log(req.body.data);
const { id, todo } = req.body.data;
return res.status(200).json({ id, todo });
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