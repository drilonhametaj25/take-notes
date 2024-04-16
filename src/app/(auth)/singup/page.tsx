'use client';
import { zodResolver } from "@hookform/resolvers/zod";
import clsx from "clsx";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const signUpFormSchema = z
  .object({
    email: z.string().describe("Email").email({ message: "Invalid email" }),
    password: z
      .string()
      .describe("Password")
      .min(6, "Password must be minimum 6 characters"),
    confirmPassword: z
      .string()
      .describe("Confirm Password")
      .min(6, "Password must be minimum 6 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password don't match!",
    path: ["confirmPassword"],
  });

const SignUp = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [submitError, setSubmitError] = useState('')
  const [confirmation, setConfirmation] = useState(false)

  const constExchangeError = useMemo(() => {
    if (!searchParams) return "";
    return searchParams.get('error_description')
  }, [searchParams]);

  const confirmationAndErrorStyles = useMemo(() => clsx('bg-primary', {
    "bg-red-500/10": constExchangeError,
    "border-red-500/50": constExchangeError,
    "text-red-700": constExchangeError,
  }), [])

  const form = useForm<z.infer<typeof signUpFormSchema>>({
    mode: 'onChange',
    resolver: zodResolver(signUpFormSchema),
    defaultValues: {email: '', password: '', confirmPassword: ''}
  })

  

  return <></>;
};

export default SignUp;
