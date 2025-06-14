interface FrequencyItemProps {
  nome: string;
  presente: boolean;
  onToggle: () => void;
}

export default function FrequencyList({ alunos }: { alunos: FrequencyItemProps[] }) {
  return (
    <ul>
      {alunos.map((aluno, index) => (
        <li key={index} className="flex items-center justify-between border-b p-2">
          <span>{aluno.nome}</span>
          <button
            onClick={aluno.onToggle}
            className={aluno.presente ? "bg-green-500 text-white px-2 py-1 rounded" : "bg-red-500 text-white px-2 py-1 rounded"}
          >
            {aluno.presente ? "Presente" : "Faltou"}
          </button>
        </li>
      ))}
    </ul>
  );
}
