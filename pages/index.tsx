export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-3xl font-bold mb-4">Sistema de Frequência de Alunos</h1>
      <ul className="space-y-2">
        <li><a href="/alunos" className="text-blue-500">Gerenciar Alunos</a></li>
        <li><a href="/professores" className="text-blue-500">Gerenciar Professores</a></li>
        <li><a href="/frequencia" className="text-blue-500">Frequência Diária</a></li>
        <li><a href="/dashboard" className="text-blue-500">Dashboard</a></li>
      </ul>
    </div>
  );
}
