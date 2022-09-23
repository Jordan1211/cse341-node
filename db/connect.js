const {MongoClient} = require('mongodb');

const { config } = require('dotenv');
config();
const MONGODB_URI = process.env.MONGODB_URI;

async function main() {

    const uri = MONGODB_URI;

    const client = new MongoClient(uri);
    
    try {
        await client.connect();

        await listContacts(client);
        // await listDatabases(client);
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

async function listContacts(client) {
    const cursor = await client.db("contacts").collection("contacts").find({});
    // console.log("Contacts:");
    // contactsList.forEach(contact => {
    //     console.log(`- ${contact.firstName}`);}

    const results = await cursor.toArray();

    console.log(results);
        // console.log(`Found contacts:`);
        // results.forEach((result, i) => {
            // console.log();
            // console.log(`${i + 1}. name: ${result.firstName}`);
            // console.log(`   _id: ${result.lastName}`);
        // })
}

results = listContacts.results;

module.exports = { results };