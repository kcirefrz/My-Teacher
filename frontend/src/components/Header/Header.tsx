import { HeaderContainer, Logo } from "./Header.style";

export const Header = () => {
  return (
    <HeaderContainer>
      <div>
        <Logo src="/images/myteacher.png" />
      </div>

      <p>Find the perfect teacher!</p>
    </HeaderContainer>
  );
};
