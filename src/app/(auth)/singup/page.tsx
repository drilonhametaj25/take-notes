import React from "react";
import { z } from "zod";

const signUpFormSchema = z.object({
    email: z.string().describe('Email').email({message: 'Invalid email'}),
    password: z.string().describe('Password').min(6, 'Password must be minimum 6 characters'),
    confirmPassword: z.string().describe('Confirm Password').min(6, 'Password must be minimum 6 characters')
    
}).refine((data) => data.password === data.confirmPassword, {message: "Password don't match!", path: ['confirmPassword']} )

const SignUp = () => {
    return <></>
}

export default SignUp;