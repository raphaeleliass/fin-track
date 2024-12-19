import SignupForm from "@/components/Form/signupForm";
import {
  AuthArea,
  AuthAreaLeft,
  AuthAreaRight,
} from "@/components/ui/authArea";
import React from "react";

export default function Page() {
  return (
    <AuthArea>
      <AuthAreaLeft>
        <div className="text-background">
          <h1 className="font-lato text-4xl font-bold">Sign Up</h1>
          <p className="text-sm text-muted">
            Create an account to start your journey.
          </p>
        </div>
      </AuthAreaLeft>

      <AuthAreaRight>
        <SignupForm />
      </AuthAreaRight>
    </AuthArea>
  );
}
