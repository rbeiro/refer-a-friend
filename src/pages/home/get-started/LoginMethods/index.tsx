import { useState } from "react";
import { MagicCodeMethod } from "./MagicCodeMethod";
import { SocialMethod } from "./SocialMethod";
import { LoginMethodsContainer, Separator } from "./styles";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const LoginMethods = () => {
  const router = useRouter();
  const [emailWasSubmitted, setEmailWasSubmitted] = useState(false);
  const { data: session, status } = useSession();
  console.log(session);
  console.log(status);
  return (
    <LoginMethodsContainer>
      <MagicCodeMethod
        emailWasSubmitted={emailWasSubmitted}
        setEmailWasSubmitted={setEmailWasSubmitted}
      />
      {!emailWasSubmitted && (
        <>
          <Separator>ou</Separator>
          <SocialMethod />
        </>
      )}
    </LoginMethodsContainer>
  );
};

export { LoginMethods };
