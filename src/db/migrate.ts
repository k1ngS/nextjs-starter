import { migrate } from "drizzle-orm/postgres-js/migrator";

import config from "@/../drizzle.config";

import db, { client } from ".";
import { env } from "../env/server";

if (!env.DB_MIGRATING) {
  throw new Error("❌ DB_MIGRATING is not set to true");
}

await migrate(db, { migrationsFolder: config.out! });

await client.end();
