import { Button } from "@rbeiro-ui/react-components";

const Header = () => {
  return (
    <>
      <div>Hello World</div>
      <h1>Olá, {user?.name ? user?.name : "nenhum usuário encontrado"}</h1>
      <Button onClick={() => handleSignOut()}>Sair</Button>
    </>
  );
};

export { Header };
