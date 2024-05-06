import express from "express";
import cors from "cors";
import pg from "pg";
import dotenv from "dotenv";

dotenv.config();


const app = express();

app.use(cors())
app.use(express.json());

const connectionString = process.env.DATABASE_URL;
const db = new pg.Pool({ connectionString: connectionString });

app.get("/", (request, response) => {
    response.json("this is my root");
});

app.get("/fans", async (request, response) => {
    const result = await db.query(`SELECT
    fans.id,
    fans.name,
    fans.age,
    ARRAY_AGG(movies.item) AS movies
  FROM fans
  JOIN movies_junction ON fans.id = movies_junction.fan_id
  JOIN movies ON movies_junction.movie_id = movies.id
  GROUP BY fans.id, fans.name, fans.age`);
    response.json(result.rows);
});

app.post("/fan", async (request, response) => {
    const name = request.body.name;
    const age = request.body.age;
    db.query(`INSERT INTO fans (name, age) VALUES ($1, $2)`, [name, age]);
    response.json({ success: true });

});



app.listen(8080, () => console.log("I am working"));