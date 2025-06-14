import Link from "next/link";

export default function Professores() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Lista de Professores</h1>
      <Link href="/professores/novo" className="bg-blue-500 text-white px-4 py-2 rounded">Novo Professor</Link>
      {/* Aqui você vai listar os professores futuramente */}
    </div>
  );
}
