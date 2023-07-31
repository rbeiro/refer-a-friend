import { PassCodeInput } from "@/components/PassCodeInput";
import { Button, LoadingSpinner } from "@rbeiro-ui/react-components";
import { useState, type Dispatch, type SetStateAction } from "react";
import {
  EmailContainer,
  VerificationResult,
  VerificationSpinner,
} from "./styles";
import { CheckIcon, ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/router";
import { getSession } from "next-auth/react";
import { type GetServerSideProps } from "next";
interface VerificationStepProps {
  userEmail?: string;
  setEmailWasSubmitted: Dispatch<SetStateAction<boolean>>;
}

const VerificationStep = ({
  userEmail,
  setEmailWasSubmitted,
}: VerificationStepProps) => {
  const router = useRouter();
  const [isVerificationLoading, setIsVerificationLoading] = useState(false);
  const [verificationErrorMessage, setVerificationErrorMessage] = useState("");
  const [verificationSuccessMessage, setVerificationSuccessMessage] =
    useState("");

  function handleValueEnter(inputValue: string) {
    const verificaitonCode = inputValue;

    setVerificationErrorMessage("");
    setIsVerificationLoading(true);

    const verificationUrl = `http://localhost:3000/api/auth/callback/email?callbackUrl=http%3A%2F%2Flocalhost%3A3000%2Fget-started&token=${verificaitonCode}&email=${
      userEmail || ""
    }`;
    fetch(verificationUrl)
      .then((data) => {
        if (data.status !== 200) {
          setVerificationErrorMessage("O código é inválido. Tente novamente.");
          return;
        } else {
          setVerificationSuccessMessage(
            "Sucesso! Aguarde o redirecionamento da página..."
          );
          router
            .push("/")
            .then((data) => console.log(data))
            .catch((err) => console.log(err));
        }
      })
      .catch((err) => {
        setVerificationErrorMessage("O código é inválido. Tente novamente.");
      })
      .finally(() => setIsVerificationLoading(false));
  }

  return (
    <EmailContainer>
      <h1>Verifique seu e-mail para obter o código</h1>
      <span>
        Enviamos um código de seis caracteres para <strong>{userEmail}</strong>.
        Não demore para inserir o código, pois ele expirará em breve.
      </span>
      <PassCodeInput onValueEnter={handleValueEnter} />
      <VerificationResult
        hasErrorMessage={verificationErrorMessage.length > 0}
        hasSuccessMessage={verificationSuccessMessage.length > 0}
        isLoading={isVerificationLoading}
      >
        {isVerificationLoading && (
          <>
            <VerificationSpinner>
              <LoadingSpinner />
            </VerificationSpinner>
            <span>Verificando código inserido</span>
          </>
        )}
        {verificationErrorMessage && (
          <>
            <ExclamationTriangleIcon />
            <span>{verificationErrorMessage}</span>
          </>
        )}
        {verificationSuccessMessage && (
          <>
            <CheckIcon />
            <span>{verificationSuccessMessage}</span>
          </>
        )}
      </VerificationResult>
      <Button onClick={() => setEmailWasSubmitted(false)}>
        Alterar e-mail
      </Button>
    </EmailContainer>
  );
};

export { VerificationStep };
