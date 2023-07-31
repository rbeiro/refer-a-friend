import { Button } from "@rbeiro-ui/react-components";
import { signOut } from "next-auth/react";

interface BaseProps {
  user?: {
    name: string;
  };
}

const Header = ({ user }: BaseProps) => {
  function handleSignOut() {
    signOut()
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
      
      return void
  }
  return (
    <>
      <div>Hello World</div>
      <h1>Olá, {user?.name ? user?.name : "nenhum usuário encontrado"}</h1>
      <Button onClick={async () => handleSignOut()}>Sair</Button>
    </>
  );
};

export { Header };
