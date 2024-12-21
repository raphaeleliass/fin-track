"use client";

// React and state management imports
import React, { useState } from "react";

// Zod for schema validation
import { z } from "zod";

// React Hook Form for form handling
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// UI components for the form
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

// Firebase authentication
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "@/firebase/firebaseConfig";
import { FirebaseError } from "firebase/app";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { Separator } from "@radix-ui/react-separator";
import Link from "next/link";
import { SiGoogle } from "@icons-pack/react-simple-icons";

// Define the form schema using Zod for validation
const formSchema = z.object({
  Email: z.string().email(),
  Password: z.string().min(8, "Password must be at least 8 characters long"),
});

// Initialize the form with schema validation and default values
type FormValues = z.infer<typeof formSchema>;

export default function LoginForm() {
  // State to manage loading state
  const [Loading, setLoading] = useState<boolean>(false);

  // State to manage password visibility
  const [PasswordVisibility, setPasswordVisibility] = useState<boolean>(false);

  // Initialize the form with schema validation and default values
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { Email: "", Password: "" },
  });

  // Router for navigation and redirection user after login
  const router = useRouter();

  // Function to handle login form submission
  async function handleLogin(values: FormValues) {
    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, values.Email, values.Password);
      form.reset();
      router.push("/dashboard");
    } catch (err) {
      if (
        err instanceof FirebaseError &&
        err.code === "auth/invalid-credential"
      ) {
        form.setError("Email", {
          message: "Invalid email or password",
        });
        form.setError("Password", {
          message: "Invalid email or password",
        });
      }
    } finally {
      setLoading(false);
    }
  }

  // Function to handle Google login
  async function loginWithGoogle() {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      router.push("/dashboard");
    } catch (err) {
      alert(err);
    }
  }

  // toggle password visibility
  function togglePasswordVisibility() {
    setPasswordVisibility((prev) => !prev);
  }

  return (
    <Form {...form}>
      <form
        className="flex w-full max-w-xs flex-col gap-4"
        onSubmit={form.handleSubmit(handleLogin)}
      >
        <p className="mx-auto font-lato text-2xl">Login</p>

        <FormField
          name="Email"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your email"
                  type="email"
                  autoComplete="off"
                  disabled={Loading}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="Password"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <span className="relative flex items-center">
                  <Input
                    placeholder="Enter your password"
                    type={PasswordVisibility ? "text" : "password"}
                    autoComplete="off"
                    disabled={Loading}
                    {...field}
                  />

                  <button
                    type="button"
                    className="absolute right-2"
                    onClick={togglePasswordVisibility}
                    aria-label={
                      PasswordVisibility ? "Hide password" : "Show password"
                    }
                  >
                    {PasswordVisibility ? (
                      <Eye className="size-5" />
                    ) : (
                      <EyeOff className="size-5" />
                    )}
                  </button>
                </span>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <p className="text-sm text-muted-foreground">
          Forgot your password?{" "}
          <Link href="/reset-password" className="underline hover:text-primary">
            Click here
          </Link>
        </p>

        <Button className="w-full" type="submit" disabled={Loading}>
          {Loading ? <Loader2 className="animate-spin" /> : "Login"}
        </Button>

        <Separator className="h-px w-full rounded-full bg-zinc-300" />

        <Button
          type="button"
          variant="outline"
          disabled={Loading}
          onClick={loginWithGoogle}
        >
          <SiGoogle className="mr-2" />
          Sign in with Google
        </Button>

        <p className="mt-4 text-center">
          Don&apos;t have an account?{" "}
          <Link
            href="/signup"
            className="underline underline-offset-4 hover:text-primary"
          >
            Sign Up
          </Link>
        </p>
      </form>
    </Form>
  );
}
