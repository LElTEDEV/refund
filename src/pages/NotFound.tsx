export function NotFound() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="flex flex-col">
        <h1 className="text-gray-100 font-semibold text-2xl mb-10">
          Opa, onde pensa que vai? 🤔
        </h1>
        <a
          href="/"
          className="font-semibold text-center text-green-100 hover:text-green-200 transition ease-linear"
        >
          Voltar para o início
        </a>
      </div>
    </div>
  );
}
