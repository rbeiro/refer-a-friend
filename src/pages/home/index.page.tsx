import { getServerAuthSession } from "@/server/auth";
import { api } from "@/utils/api";
import { Button } from "@rbeiro-ui/react-components";
import { type GetServerSideProps } from "next";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

interface BaseProps {
  expires: string | null;
  user: {
    name: string;
    email: string;
    image: string | null;
  } | null;
}

export default function Home({ user }: BaseProps) {
  const { data: session, status } = useSession();
  console.log(session);
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  function handleSignOut() {
    signOut().finally(() => "");
  }

  return (
    <>
      <h1>Hello, {user?.name}</h1>
      <p></p>
      {user && <Button onClick={handleSignOut}>Deslogar</Button>}
      {!user && <Link href="/get-started">Fazer login</Link>}
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getServerAuthSession(context);

  return {
    props: {
      ...session,
    },
  };
};
