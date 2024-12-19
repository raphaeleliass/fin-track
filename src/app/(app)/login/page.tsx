import LoginForm from "@/components/Form/loginForm";
import {
  AuthArea,
  AuthAreaLeft,
  AuthAreaRight,
} from "@/components/ui/authArea";
import Logo from "@/components/ui/logo";
import React from "react";

export default function Login() {
  return (
    <AuthArea>
      <AuthAreaLeft>
        <div className="flex flex-col gap-4">
          <span className="flex flex-row gap-2 text-left font-lato text-5xl font-bold text-background">
            <Logo /> <h1>Sign in</h1>
          </span>
          <p className="max-w-xs text-muted">
            Please enter your credentials to access your account. If you
            don&apos;t have an account, you can register for one.
          </p>
        </div>
      </AuthAreaLeft>

      <AuthAreaRight>
        <LoginForm />
      </AuthAreaRight>
    </AuthArea>
  );
}
