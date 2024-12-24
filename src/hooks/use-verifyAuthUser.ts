import { auth } from "@/firebase/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function useVerifyAuthUser({
  pushUserIfNotSignedInTo,
}: {
  pushUserIfNotSignedInTo: string;
}) {
  const [Loading, setLoading] = useState<boolean>(false);

  const router = useRouter();

  useEffect(() => {
    setLoading(true);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push(pushUserIfNotSignedInTo);
        setLoading(false);
      }
      return () => unsubscribe;
    });
  }, [pushUserIfNotSignedInTo, router]);

  return { Loading };
}
