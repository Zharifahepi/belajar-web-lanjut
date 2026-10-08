import { Elysia } from "elysia";

const app = new Elysia();
const mahasiswa = new Elysia();



app.get("/", () => "Server Elysia Running");

app.use(mahasiswa);

app.post("/mahasiswa", () => "Endpoint Mahasiswa via POST");

app.listen(3000, () => console.log("Server running on http://localhost:3000"));