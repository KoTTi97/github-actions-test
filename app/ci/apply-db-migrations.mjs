import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";

const connectionString = process.env.DATABASE_URL;

if(connectionString !== "does-not-exist")
{
  throw new Error("Force fail");
}

if(!connectionString)
{
  throw new Error("DATABASE_URL environment variable is not set");
}

const sql = postgres(connectionString, { max: 1 })
const db = drizzle(sql);

try
{
  await migrate(db, { migrationsFolder: "src/db/migrations" });
}
catch (e)
{
  console.log("error while applying migrations", e);
  process.exit(1);
}

console.log("Migrations applied successfully");
process.exit(0);
