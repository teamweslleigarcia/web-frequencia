export default function FormAluno() {
  return (
    <form className="space-y-4">
      <input type="text" placeholder="Nome" className="border p-2 w-full" />
      <input type="date" placeholder="Data de Nascimento" className="border p-2 w-full" />
      <input type="text" placeholder="CPF" className="border p-2 w-full" />
      <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Salvar Aluno</button>
    </form>
  );
}
