import { connection, db } from "@/lib/db/ds"
import { migrate } from "drizzle-orm/postgres-js/migrator"

(async () => {
    try { 
        await migrate(db, { migrationsFolder: './drizzle', }); 
        await connection.end();
        console.log("Migration completed successfully."); 
    } catch (error) { 
        console.error("Migration failed:", error); 
    }
})();