"use client";

// Import necessary libraries and components
import React, { useState } from "react";
import Link from "next/link";

// Import UI components
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Checkbox } from "../ui/checkbox";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { SiGoogle } from "@icons-pack/react-simple-icons";

// Import form handling and validation libraries
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// Import Firebase utilities
import { FirebaseError } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "@/firebase/firebaseConfig";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";

// Define the form schema using Zod for validation
const formSchema = z
  .object({
    firstName: z.string().nonempty("First name is required").trim(),
    lastName: z.string().nonempty("Last name is required").trim(),
    email: z.string().email("Invalid email address").trim(),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .trim(),
    confirmPassword: z.string(),
    acceptTerms: z.boolean().refine((val) => val, {
      message: "You must accept the terms and conditions",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });

// Define the form values type based on the schema
type FormValues = z.infer<typeof formSchema>;

export default function SignupForm() {
  // State to manage loading state
  const [Loading, setLoading] = useState<boolean>(false);

  // State to manage password visibility
  const [PasswordVisibility, setPasswordVisibility] = useState<boolean>(false);

  // State to manage confirm password visibility
  const [ConfirmPasswordVisibility, setConfirmPasswordVisibility] =
    useState<boolean>(false);

  // Initialize the router for navigation
  const router = useRouter();

  // Initialize the form with default values and validation schema
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      acceptTerms: false,
    },
  });

  // Function to handle form submission
  async function submitHandler(data: FormValues) {
    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, data.email, data.password);
    } catch (err) {
      if (
        err instanceof FirebaseError &&
        err.code === "auth/email-already-in-use"
      ) {
        form.setError("email", {
          message: "Email is already in use",
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

  function togglePasswordVisibility() {
    setPasswordVisibility((prev) => !prev);
  }

  function toggleConfirmPasswordVisibility() {
    setConfirmPasswordVisibility((prev) => !prev);
  }

  return (
    <Form {...form}>
      <form
        className="flex w-full max-w-xs flex-col gap-4"
        onSubmit={form.handleSubmit(submitHandler)}
      >
        <p className="mx-auto font-lato text-2xl">Sign Up</p>

        <FormField
          name="firstName"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>First Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your first name"
                  type="text"
                  autoComplete="off"
                  autoCapitalize="words"
                  disabled={Loading}
                  aria-label="First Name"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="lastName"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your last name"
                  type="text"
                  autoComplete="off"
                  autoCapitalize="words"
                  disabled={Loading}
                  aria-label="Last Name"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="email"
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
                  aria-label="Email"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="password"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <span className="relative flex items-center justify-center">
                  <Input
                    placeholder="Enter your password"
                    type={PasswordVisibility ? "text" : "password"}
                    autoComplete="off"
                    disabled={Loading}
                    aria-label="Password"
                    {...field}
                  />

                  <button
                    className="absolute right-2"
                    type="button"
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

        <FormField
          name="confirmPassword"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <span className="relative flex items-center justify-center">
                  <Input
                    placeholder="Confirm password"
                    type={ConfirmPasswordVisibility ? "text" : "password"}
                    autoComplete="off"
                    disabled={Loading}
                    aria-label="Confirm Password"
                    {...field}
                  />

                  <button
                    className="absolute right-2"
                    type="button"
                    aria-label={
                      ConfirmPasswordVisibility
                        ? "Hide confirm password"
                        : "Show confirm password"
                    }
                    onClick={toggleConfirmPasswordVisibility}
                  >
                    {ConfirmPasswordVisibility ? (
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

        <FormField
          name="acceptTerms"
          control={form.control}
          render={({ field }) => (
            <FormItem className="mt-6 flex flex-row items-center gap-2 space-y-0">
              <FormControl>
                <Checkbox
                  onCheckedChange={field.onChange}
                  checked={field.value}
                  disabled={Loading}
                  aria-label="Accept Terms and Conditions"
                />
              </FormControl>
              <FormLabel>
                I agree and accept{" "}
                <Link
                  className="underline underline-offset-4 hover:text-primary"
                  href={"/terms"}
                >
                  Terms & Conditions
                </Link>
              </FormLabel>
            </FormItem>
          )}
        />

        <Button className="mt-4" type="submit" disabled={Loading}>
          {Loading ? <Loader2 className="animate-spin" /> : "Sign Up"}
        </Button>

        <Separator className="my-4" />

        <Button
          type="button"
          variant="outline"
          disabled={Loading}
          onClick={loginWithGoogle}
        >
          <SiGoogle className="mr-2" />
          Sign Up with Google
        </Button>

        <p className="mt-4 text-center">
          Already have an account?{" "}
          <Link
            href="/login"
            className="underline underline-offset-4 hover:text-primary"
          >
            Log In
          </Link>
        </p>
      </form>
    </Form>
  );
}
