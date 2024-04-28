import express, { Application, Request, Response } from "express";
import cors from "cors";
import mysql from "mysql2";
import { error } from "console";

const app: Application = express();
const PORT = 3000;
app.use(cors({ origin: "http://localhost:3001" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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
      res.status(200).json({ products: result });
    }
  });
});

app.post("/add", (req: Request, res: Response) => {
  const sql = `INSERT INTO product VALUES ("${req.body.product_id}", "${req.body.product_name}","${req.body.price}","${req.body.description}","${req.body.stock}")`;
  connection.query(sql,(error,result)=>{
    if (error) {
      console.log(error);
      return res.status(500).json({ message: "Failed to add todo" });
    }
    return res.status(200).json({ product: result });
  })
});

app.delete("/delete", (req: Request, res: Response) => {
  const id=req.body.id;
  const sql = `DELETE FROM product WHERE product_id = "${id}"`;
  connection.query(sql, (error) => {
    if (error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(200).json({ message: "success" });
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
