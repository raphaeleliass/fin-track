"use client";
import useVerifyAuthUser from "@/hooks/use-verifyAuthUser";
import { Loader2 } from "lucide-react";

export default function Page() {
  const Loading = useVerifyAuthUser({
    pushUserIfNotSignedInTo: "/",
  });

  return (
    <div className="flex min-h-dvh flex-col items-center justify-center">
      {Loading ? <Loader2 className="animate-spin" /> : "test"}
    </div>
  );
}
