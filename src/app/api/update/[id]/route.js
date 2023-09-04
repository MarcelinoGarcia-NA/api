import { NextResponse } from "next/server";
import { pool } from '../../route';

export async function PUT(req) {
    const id = parseInt(req.url.split('update/')[1]);
    const { name, password, email } = await req.json();

    if (req.method === 'PUT') {
        try {
            const values = [name, password, email, new Date(), new Date, id];
            const sql = "UPDATE users SET name=$1, password=$2, email=$3, created_at=$4, updated_at=$5 WHERE id=$6";
            await pool.query(sql, values);
            return NextResponse.json("Usuário atualizado com sucesso");
        } catch (error) {
            return NextResponse.json("Erro ao atualizar!")
        }

    }

};