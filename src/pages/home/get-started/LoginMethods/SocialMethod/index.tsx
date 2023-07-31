import { AppleLogo, FacebookLogo, GoogleLogo } from "@/assets/icons";
import { SocialButtonsContainer, SocialLoginAction } from "./styles";

const SocialMethod = () => {
  return (
    <SocialButtonsContainer>
      <span>Acessar com minhas redes sociais</span>
      <SocialLoginAction
        bgColor="rgb(231, 38, 38)!"
        bgHoverColor="rgb(231, 38, 38)"
        widthFull
      >
        <GoogleLogo color="#fff" />
        <span>Google</span>
      </SocialLoginAction>
      <SocialLoginAction
        bgColor="rgb(0, 96, 177)!"
        bgHoverColor="rgb(0, 96, 177)"
        widthFull
      >
        <FacebookLogo color="#fff" />
        <span>Facebook</span>
      </SocialLoginAction>
      <SocialLoginAction bgColor="#000000!" bgHoverColor="#000000" widthFull>
        <AppleLogo color="#fff" />
        <span>Apple</span>
      </SocialLoginAction>
    </SocialButtonsContainer>
  );
};

export { SocialMethod };
