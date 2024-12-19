"use client";
import { cn } from "@/lib/utils";
import { ReactNode, Ref } from "react";
import { Button } from "./button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export const AuthArea = ({
  className,
  ref,
  ...props
}: {
  className?: string;
  ref?: Ref<HTMLElement>;
  children?: ReactNode;
}) => (
  <section
    className={cn("flex min-h-dvh flex-col md:flex-row", className)}
    ref={ref}
    {...props}
  />
);

export const AuthAreaLeft = ({
  className,
  ref,
  ...props
}: {
  className?: string;
  ref?: Ref<HTMLDivElement>;
  children?: ReactNode;
}) => (
  <div
    className={cn(
      "hidden w-1/2 flex-col items-center justify-center bg-gradient-to-b from-primary to-purple-900 md:flex",
      className,
    )}
    ref={ref}
    {...props}
  />
);

export const AuthAreaRight = ({
  className,
  children,
  ref,
  ...props
}: {
  className?: string;
  ref?: Ref<HTMLDivElement>;
  children?: ReactNode;
}) => {
  const router = useRouter();
  return (
    <div
      className={cn(
        "relative flex min-h-dvh items-center justify-center md:w-1/2",
        className,
      )}
      ref={ref}
      {...props}
    >
      {children}

      <Button
        className="absolute left-0 top-4"
        variant={"ghost"}
        onClick={() => {
          router.back();
        }}
      >
        <ArrowLeft />
        Back
      </Button>
    </div>
  );
};
