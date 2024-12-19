import SignupForm from "@/components/Form/signupForm";
import {
  AuthArea,
  AuthAreaLeft,
  AuthAreaRight,
} from "@/components/ui/authArea";
import Logo from "@/components/ui/logo";
import React from "react";

export default function Page() {
  return (
    <AuthArea>
      <AuthAreaLeft>
        <div className="text-background">
          <span className="flex flex-row gap-2 text-left">
            <Logo />
            <h1 className="font-lato text-5xl font-bold">Sign Up</h1>
          </span>
          <p className="mt-4 max-w-xs text-sm text-muted">
            Join us today and take the first step towards managing your finances
            effectively. Create an account to unlock all the features and start
            your journey with us.
          </p>
        </div>
      </AuthAreaLeft>

      <AuthAreaRight>
        <SignupForm />
      </AuthAreaRight>
    </AuthArea>
  );
}
