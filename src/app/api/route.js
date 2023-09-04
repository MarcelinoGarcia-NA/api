import { NextRequest, NextResponse } from "next/server";
import { Pool } from "pg";

export const pool = new Pool({
  connectionString: process.env.URL_ELEPHANT_SQL
});


export async function GET() {
  try {
    const data = await pool.query('SELECT * FROM users');
    return NextResponse.json(data.rows);
  } catch (error) {
    return NextResponse.error('Erro interno do servidor', { status: 500 });
  }
};

export async function POST(request) {
  const { name, password, email } = await request.json();
  try {
    const values = [name, password, email, new Date(), new Date];
    const sql = "INSERT INTO users(name, password, email, created_at, updated_at) VALUES ($1, $2, $3,$4, $5)";
    await pool.query(sql, values);
    return NextResponse.json("Cadastrado com sucesso");
  } catch (error) {
    return NextResponse.json("Erro ao cadastrar!", error);
  }
};





