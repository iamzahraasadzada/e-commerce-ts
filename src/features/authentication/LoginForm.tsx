import styled from "styled-components";
import Logo from "../../ui/Logo";
import { useState } from "react";
import { useLogin } from "./useLogin";
import MiniSpiner from "../../ui/MiniSpiner";
import toast from "react-hot-toast";

// import { login } from "../../services/apuAuth";
const FullPageContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginFormContainer = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
`;

const StyledLoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: 0.6rem;
  width: 40rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  padding: 6rem 4rem;
  margin: 0 2rem;
  @media (max-width: 340px) {
    width: 32rem;
  }
`;

const FormRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-weight: 500;
`;

const Title = styled.h2`
  font-size: 3.2rem;
  font-weight: 700;
  margin-bottom: 2rem;
`;

const Input = styled.input`
  border: 1px solid var(--color-grey-300);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-sm);
  padding: 0.8rem 2rem;
  box-shadow: var(--shadow-sm);
`;

const Button = styled.button`
  font-size: 1.2rem;
  padding: 1.2rem 1.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #101010;
  border: 1px solid #101010;
  color: #fff;
  font-weight: 700;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  transition: all 0.3s ease;
  &:hover {
    cursor: pointer;
    background: #2a2a2a;
    border: 1px solid #2a2a2a;
    text-decoration: none;
  }
`;

export default function LoginForm() {
  const [email, setEmail] = useState("user@example.com");
  const [password, setPassword] = useState("00789");
  const { login, isPending } = useLogin();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email || !password) {
      !email && toast.error("Email must be entered", { position: "top-right" });
      !password &&
        toast.error("Password must be entered", { position: "top-right" });
      return;
    }
    login(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      }
    );
  }

  return (
    <FullPageContainer>
      <LoginFormContainer>
        <Logo />
        <Title>Log into your account</Title>
        <StyledLoginForm onSubmit={handleSubmit}>
          <FormRow>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              autoComplete="username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isPending}
            />
          </FormRow>
          <FormRow>
            <Label htmlFor="email">Password</Label>
            <Input
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isPending}
            />
          </FormRow>
          <Button type="submit">{isPending ? <MiniSpiner /> : "Log in"}</Button>
        </StyledLoginForm>
      </LoginFormContainer>
    </FullPageContainer>
  );
}

// autocomplete prop da olmalidir inputda
