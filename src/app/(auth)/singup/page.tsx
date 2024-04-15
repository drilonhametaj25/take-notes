import { useRouter, useSearchParams } from "next/navigation";
import React, { useMemo, useState } from "react";
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

  const confirmationAndErrorStyles = useMemo(() => {}, [])

  return <></>;
};

export default SignUp;
