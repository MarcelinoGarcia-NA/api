import { NextResponse } from "next/server";
import { pool } from '../../route';


export async function DELETE(req) {
    const id = parseInt(req.url.split('delete/')[1]);
    if (req.method === 'DELETE') {
        try {
            const sql = "DELETE FROM users WHERE id=$1";
            await pool.query(sql, [id]);
            return NextResponse.json("Usuário removido com sucesso");
        } catch (error) {
            return NextResponse.json("Erro ao deletar!")
        }

    }
};

