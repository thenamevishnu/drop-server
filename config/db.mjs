import { connect } from "mongoose";
import { env } from "./loadEnv.mjs";

export const db = {
    connect: async () => {
        try { 
            const { connection: { db: { databaseName } } } = await connect(env.MONGO_URI, {
                dbName: env.MONGO_DB_NAME
            })
            console.log(`Connected to database ${databaseName}`);
        } catch (error) {
            return process.exit(1); 
        }
    }
}