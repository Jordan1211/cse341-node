const {MongoClient} = require('mongodb');

const { config } = require('dotenv');
config();
const MONGODB_URI = process.env.MONGODB_URI;

async function main() {

    const uri = MONGODB_URI;

    const client = new MongoClient(uri);
    
    try {
        await client.connect();

        await listDatabases(client);
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);

async function listDatabases(client) {
    const databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");
    databasesList.databases.forEach(db => {
        console.log(`- ${db.name}`);
    })
}