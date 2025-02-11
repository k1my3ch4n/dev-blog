import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();
const { Pool } = pg;

// PostgreSQL 연결 설정
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT),
});

// 데이터베이스 초기화 (테이블 생성)
export async function initDB() {
  const client = await pool.connect();
  try {
    await client.query(`
      CREATE TABLE IF NOT EXISTS posts (
        postId VARCHAR(255) PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        tags TEXT[] NOT NULL
      )
    `);
    console.log('Database initialized');
  } finally {
    client.release();
  }
}

export default pool;
