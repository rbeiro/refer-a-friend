import { useState } from "react";
import { MagicCodeMethod } from "./MagicCodeMethod";
import { SocialMethod } from "./SocialMethod";
import { LoginMethodsContainer, Separator } from "./styles";
import { useSession } from "next-auth/react";

const LoginMethods = () => {
  const [emailWasSubmitted, setEmailWasSubmitted] = useState(false);
  const { data: session, status } = useSession();
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
