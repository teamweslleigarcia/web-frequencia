import { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI as string;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db('frequenciaDB');
  const alunos = db.collection('alunos');

  if (req.method === 'GET') {
    const allAlunos = await alunos.find().toArray();
    res.status(200).json(allAlunos);
  } else if (req.method === 'POST') {
    const novoAluno = req.body;
    await alunos.insertOne(novoAluno);
    res.status(201).json({ message: 'Aluno criado com sucesso' });
  } else {
    res.status(405).end();
  }

  await client.close();
}
