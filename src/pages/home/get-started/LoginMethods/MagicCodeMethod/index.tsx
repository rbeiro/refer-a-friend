import { Button, Input } from "@rbeiro-ui/react-components";
import { signIn } from "next-auth/react";
import {
  type SyntheticEvent,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";
import { VerificationStep } from "./VerificationStep";
import { EmailForm } from "./styles";
import { api } from "@/utils/api";

interface BaseProps {
  emailWasSubmitted: boolean;
  setEmailWasSubmitted: Dispatch<SetStateAction<boolean>>;
}

const MagicCodeMethod = ({
  emailWasSubmitted,
  setEmailWasSubmitted,
}: BaseProps) => {
  const [userEmail, setUserEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [userPhoneNumber, setUserPhoneNumber] = useState<number | null>(null);
  const [isEmailSubmitting, setIsEmailSubmitting] = useState(false);
  const createNewUserMutation = api.user.addAdditionalDataToCookies.useMutation(
    {
      onSuccess: () => {
        signIn("email", {
          email: "gaah.11.r@gmail.com",
          redirect: false,
        })
          .then(() => setEmailWasSubmitted(true))
          .catch((err) => console.log(err));
      },
      onSettled: () => {
        setIsEmailSubmitting(false);
      },
    }
  );

  function handleFormSubmit(e: SyntheticEvent) {
    e.preventDefault();
    setIsEmailSubmitting(true);
    if (!userPhoneNumber) return;

    createNewUserMutation.mutate({
      name: userName,
      phoneNumber: userPhoneNumber,
    });
  }

  function handleUserNameInput(e: SyntheticEvent) {
    const target = e.target as HTMLInputElement;
    setUserName(target.value);
  }
  function handleEmailInput(e: SyntheticEvent) {
    const target = e.target as HTMLInputElement;
    setUserEmail(target.value);
  }
  function handlePhoneNumberInput(e: SyntheticEvent) {
    const target = e.target as HTMLInputElement;
    setUserPhoneNumber(parseInt(target.value));
  }

  if (emailWasSubmitted) {
    return (
      <VerificationStep
        setEmailWasSubmitted={setEmailWasSubmitted}
        userEmail={userEmail}
      />
    );
  }

  return (
    <>
      <h1>Primeiro, insira seu e-mail</h1>
      <EmailForm onSubmit={handleFormSubmit}>
        <Input
          labelName="Nome"
          labelBackgroundColor="var(--color-loContrast)"
          onChange={handleUserNameInput}
        />
        <Input
          labelName="Telefone"
          labelBackgroundColor="var(--color-loContrast)"
          maxLength={11}
          onChange={handlePhoneNumberInput}
        />
        <Input
          labelName="E-mail"
          labelBackgroundColor="var(--color-loContrast)"
          onChange={handleEmailInput}
        />
        <Button
          type="submit"
          widthFull
          bgColor="#023E8A"
          bgHoverColor="#023E8A"
          isLoading={isEmailSubmitting}
        >
          Continuar
        </Button>
      </EmailForm>
    </>
  );
};

export { MagicCodeMethod };
