import { defineConfig } from 'drizzle-kit';

export default defineConfig({
    schema: './src/lib/server/db/schema.js',
    out: './drizzle',
    dialect: "sqlite",
    dbCredentials: {
        url: "./sqlite.db"
    },
    verbose: true,
    strict: true
});