import { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI as string;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db('frequenciaDB');
  const professores = db.collection('professores');

  if (req.method === 'GET') {
    const allProfessores = await professores.find().toArray();
    res.status(200).json(allProfessores);
  } else if (req.method === 'POST') {
    const novoProfessor = req.body;
    await professores.insertOne(novoProfessor);
    res.status(201).json({ message: 'Professor criado com sucesso' });
  } else {
    res.status(405).end();
  }

  await client.close();
}
