import React, { useState } from "react";
import { KeyboardAvoidingView, Platform } from "react-native";
import { Button } from "@Components/Button";
import { Input } from "@Components/Input";
import {
  Container,
  Title,
  Wrapper,
  Brand,
  ForgotPasswordButton,
  ForgotPasswordLabel,
} from "./styles";

import brand from "@Assets/brand.png";

import { useAuth } from "@Hooks/Auth";

const SignIn = () => {
  const { isLogging, signIn, forgotPassword } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    signIn(email, password);
  };

  const handleForgotPassword = () => {
    forgotPassword(email);
    setEmail("");
  };

  return (
    <Container>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <Wrapper>
          <Brand source={brand} />
          <Title>Login</Title>
          <Input
            placeholder="E-mail"
            type="secondary"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={setEmail}
          />

          <Input
            placeholder="Senha"
            type="secondary"
            secureTextEntry
            onChangeText={setPassword}
          />

          <ForgotPasswordButton onPress={handleForgotPassword}>
            <ForgotPasswordLabel>Esqueci minha senha</ForgotPasswordLabel>
          </ForgotPasswordButton>

          <Button
            title="Entrar"
            type={"secondary"}
            onPress={handleSignIn}
            isLoading={isLogging}
          />
        </Wrapper>
      </KeyboardAvoidingView>
    </Container>
  );
};
export { SignIn };
