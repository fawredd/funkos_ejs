import dotenv from 'dotenv';
dotenv.config();

import { Pool } from 'postgres-pool';

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
});

export const getConnection = async () => {
  try {
    const connection = await pool.connect();
    return connection;
  } catch (err) {
    throw err;
  }
};