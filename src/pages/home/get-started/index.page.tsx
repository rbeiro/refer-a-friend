import Link from "next/link";
import styles from "../../styles/pages/Login.module.scss";
import { CaretLeft } from "@phosphor-icons/react";
import { DayLogo } from "@/assets/icons";
import { LoginMethods } from "./LoginMethods";
import { type GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import { getServerAuthSession } from "@/server/auth";

const Login = () => {
  return (
    <>
      <header className={styles["header__container"]}>
        <Link href="/" className={styles["header__link"]}>
          <CaretLeft /> Voltar
        </Link>
        <span className={styles["logo"]}>
          <DayLogo />
        </span>
      </header>
      <main>
        <section className={styles["login-section__wrapper"]}>
          <LoginMethods />
        </section>
      </main>

      <footer className={styles["footer"]}></footer>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getServerAuthSession(context);
  console.log(session);

  if (session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

export default Login;
