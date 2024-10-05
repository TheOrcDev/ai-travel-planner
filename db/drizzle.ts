import { neon } from "@neondatabase/serverless";
import { config } from "dotenv";
import { drizzle } from "drizzle-orm/neon-http";
config({ path: ".env" }); // or .env.local
const sql = neon(process.env.DATABASE_URL!);
export const db = drizzle(sql);
