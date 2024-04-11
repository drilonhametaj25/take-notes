import React from "react";
import { z } from "zod";

const signUpFormSchema = z.object({
    email: z.string().describe('Email').email({message: 'Invalid email'}),
    
})

const SignUp = () => {
    return <></>
}

export default SignUp;