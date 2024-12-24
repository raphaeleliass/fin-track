"use client";
import SignupForm from "@/components/Form/signupForm";
import {
  AuthArea,
  AuthAreaLeft,
  AuthAreaRight,
} from "@/components/ui/authArea";
import Logo from "@/components/ui/logo";
import useVerifyAuthUser from "@/hooks/use-verifyAuthUser";
import React from "react";
import { Loader2 } from "lucide-react";

export default function Page() {
  const { Loading } = useVerifyAuthUser({ pushUserIfNotSignedInTo: "/" });

  return (
    <div>
      {Loading ? (
        <Loader2 className="animate-spin" />
      ) : (
        <AuthArea>
          <AuthAreaLeft>
            <div className="text-background">
              <span className="flex flex-row gap-2 text-left">
                <Logo />
                <h1 className="font-lato text-5xl font-bold">Sign Up</h1>
              </span>
              <p className="mt-4 max-w-xs text-sm text-muted">
                Join us today and take the first step towards managing your
                finances effectively. Create an account to unlock all the
                features and start your journey with us.
              </p>
            </div>
          </AuthAreaLeft>

          <AuthAreaRight>
            <SignupForm />
          </AuthAreaRight>
        </AuthArea>
      )}
    </div>
  );
}
