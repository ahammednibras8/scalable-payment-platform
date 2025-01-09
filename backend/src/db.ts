import { Pool } from "pg";

const pool = new Pool({
    user: "admin",
    host: "localhost",
    database: "payment_system",
    password: "password",
    port: 5434,
});

export default pool;