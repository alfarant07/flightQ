import pool from "./db.js"

async function testDB(){
    const data = await(pool.query("SELECT NOW()"));
    console.log(data);
}
testDB();