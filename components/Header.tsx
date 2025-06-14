import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4 mb-4">
      <nav className="flex space-x-4">
        <Link href="/">Início</Link>
        <Link href="/alunos">Alunos</Link>
        <Link href="/professores">Professores</Link>
        <Link href="/frequencia">Frequência</Link>
        <Link href="/dashboard">Dashboard</Link>
      </nav>
    </header>
  );
}
