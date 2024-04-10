'use client';
import { useRouter } from "next/navigation"
import { useState } from "react";
import {SubmitHandler, useForm } from "react-hook-form"
import * as z from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";
import { FormSchema } from "@/lib/types";
import { Form } from "@/components/ui/form";
import Link from "next/link";
import Image from "next/image";
import Logo from '../../../../public/cypresslogo.svg';


const LoginPage = () => {
    const router = useRouter();
    const [submitError, setSubmitError] = useState('')

    const form = useForm<z.infer<typeof FormSchema>>({
        mode: "onChange",
        resolver: zodResolver(FormSchema),
        defaultValues: {email: '', password: ''}
    });

    const isLoaded = form.formState.isSubmitting
    const onSubmit: SubmitHandler<z.infer<typeof FormSchema>> = (formData) => {

    }
    
    return <Form {...form}>
        <form 
        onChange={() => {if (submitError) setSubmitError('')}}
        onSubmit={form.handleSubmit(onSubmit)} 
        className="w-full sm:justify-center sm:w-[400px] space-y-6 flex flex-col">
            <Link 
            href="/"
            className="w-full flex justify-left items-center"
            >
                <Image 
                src={Logo}
                alt="Logo"
                width={50}
                height={50}
                />
                <span className="font-semibold dark:text-white text-4xl first-letter:ml2">
                    Take Notes
                </span>
            </Link>
        </form>
    </Form>
}

export default LoginPage