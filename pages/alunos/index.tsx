import Link from "next/link";

export default function Alunos() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Lista de Alunos</h1>
      <Link href="/alunos/novo" className="bg-blue-500 text-white px-4 py-2 rounded">Novo Aluno</Link>
      {/* Aqui você vai listar os alunos do banco futuramente */}
    </div>
  );
}
