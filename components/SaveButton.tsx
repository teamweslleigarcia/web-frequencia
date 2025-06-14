export default function SaveButton({ onClick }: { onClick: () => void }) {
  return (
    <button onClick={onClick} className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
      Salvar Frequência
    </button>
  );
}
