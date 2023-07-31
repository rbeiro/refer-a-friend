import "../lib/dayjs";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { api } from "@/utils/api";
import "@/styles/globals.css";
import { useEffect } from "react";
import localFont from "next/font/local";

const HeroNew = localFont({
  src: [
    {
      path: "../assets/fonts/Hero New Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/Hero New Bold.woff",
      weight: "700",
      style: "bold",
    },
    {
      path: "../assets/fonts/Hero New SemiBold.woff",
      weight: "600",
      style: "semi-bold",
    },
  ],
});

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  useEffect(() => {
    //document.body.classList.add("light-theme");
  });
  return (
    <>
      <style jsx global>{`
        :root {
          --text-font: ${HeroNew.style.fontFamily};
        }
      `}</style>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
};

export default api.withTRPC(MyApp);
