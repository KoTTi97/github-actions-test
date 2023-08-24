import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

const connectionString = process.env.DATABASE_URL;

if(!connectionString)
{
  throw new Error("Environment variable 'DATABASE_URL' is missing. Please check your .env file.");
}

const client = postgres(connectionString);
export const db = drizzle(client);
