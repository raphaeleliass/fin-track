"use client";
import React, { useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import Link from "next/link";
import { Checkbox } from "../ui/checkbox";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { SiGoogle } from "@icons-pack/react-simple-icons";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FirebaseError } from "firebase/app";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase/firebaseConfig";

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

type FormValues = z.infer<typeof formSchema>;

export default function SignupForm() {
  const [Loading, setLoading] = useState<boolean>(false);
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
                <Input
                  placeholder="Enter your password"
                  type="password"
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
          name="confirmPassword"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>

              <FormControl>
                <Input
                  placeholder="Confirm password"
                  type="password"
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
          name="acceptTerms"
          control={form.control}
          render={({ field }) => (
            <FormItem className="mt-6 flex flex-row items-center gap-2 space-y-0">
              <FormControl>
                <Checkbox
                  onCheckedChange={field.onChange}
                  checked={field.value}
                  disabled={Loading}
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

        <p className="mt-4 text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link
            className="underline underline-offset-4 hover:text-primary"
            href={"/login"}
          >
            Login
          </Link>
        </p>

        <Button className="mt-2" type="submit" disabled={Loading}>
          Create account
        </Button>

        <Separator className="h-px w-full" />

        <Button type="button" variant="secondary" disabled={Loading}>
          Continue with Google <SiGoogle />
        </Button>
      </form>
    </Form>
  );
}
