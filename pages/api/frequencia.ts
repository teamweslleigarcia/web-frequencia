import { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI as string;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db('frequenciaDB');
  const frequencias = db.collection('frequencia');

  if (req.method === 'GET') {
    const allFrequencias = await frequencias.find().toArray();
    res.status(200).json(allFrequencias);
  } else if (req.method === 'POST') {
    const novaFrequencia = req.body;
    await frequencias.insertOne(novaFrequencia);
    res.status(201).json({ message: 'Frequência salva com sucesso' });
  } else {
    res.status(405).end();
  }

  await client.close();
}
