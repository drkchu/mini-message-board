#! /usr/bin/env node

require('dotenv').config(); // To set up environment variables
const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
    id SERIAL PRIMARY KEY,
    text TEXT NOT NULL,
    name TEXT NOT NULL,
    added TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO messages (text, name, added)
VALUES
('Hi there!', 'David', NOW()),
('Hello World!', 'Diana', NOW());
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: process.env.DATABASE_URL, // from .env
  });
  try {
    await client.connect();
    await client.query(SQL);
    console.log("done");
  } catch (err) {
    console.error('Error executing query', err.stack);
  } finally {
    await client.end();
  }
}

main();
