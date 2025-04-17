import { useState } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
  }

  return (
    <form onSubmit={onSubmit} className="w-full flex flex-col gap-4">
      <Input
        required
        legend="Nome"
        type="text"
        placeholder="Igor Matioli"
        value={name}
        onChange={({ target }) => setName(target.value)}
      />

      <Input
        required
        legend="E-mail"
        type="email"
        placeholder="seu@email.com"
        value={email}
        onChange={({ target }) => setEmail(target.value)}
      />

      <Input
        required
        legend="Senha"
        type="password"
        placeholder="******"
        value={password}
        onChange={({ target }) => setPassword(target.value)}
      />

      <Input
        required
        legend="Confirmação da senha"
        type="password"
        placeholder="******"
        value={passwordConfirm}
        onChange={({ target }) => setPasswordConfirm(target.value)}
      />

      <Button type="submit" isLoading={isLoading}>
        Cadastrar
      </Button>

      <a
        href="/"
        className="text-sm font-semibold text-gray-100 mt-10 mb-4 text-center hover:text-green-800 transition ease-linear"
      >
        Já tenho uma conta
      </a>
    </form>
  );
}
