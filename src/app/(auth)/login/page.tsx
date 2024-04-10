'use client';
import { useRouter } from "next/navigation"
import { useState } from "react";
import {SubmitHandler, useForm } from "react-hook-form"
import * as z from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";
import { FormSchema } from "@/lib/types";
import { Form } from "@/components/ui/form";

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

        </form>
    </Form>
}