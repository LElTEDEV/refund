import { useState } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
  }

  return (
    <form onSubmit={onSubmit} className="w-full flex flex-col gap-4">
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

      <Button type="submit" isLoading={isLoading}>
        Entrar
      </Button>
    </form>
  );
}
