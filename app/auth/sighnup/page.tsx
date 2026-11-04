"use client";

import { signUpSchema } from "@/app/schemas/auth";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";



export default function SighnUpPage() {
    const form = useForm({
        resolver: zodResolver(signUpSchema),
        defaultValues:{
            email:"",
            name:"",
            password:"",
        },
    });

    return (
        <div className="w-full h-screen flex flex-col justify-center text-3xl font-bold mt-5">
            <h1>SIGHN UP PAGE</h1>
            <Card>
                <CardHeader>
                    <CardTitle>
                        Sign Up
                    </CardTitle>
                    <CardDescription>
                        Create an acount to get started
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={form.handleSubmit((values) => console.log(values))}>
                        <FieldGroup>
                            <Controller name="name" control={form.control} render={({field, fieldState}) =>(
                                <Field>
                                    <FieldLabel>Full Name</FieldLabel>
                                    <Input placeholder="Jack Roy" {...field}{...form.register("email")} />

                                    {fieldState.invalid && (
                                         <FieldError errors={[fieldState.error]}/>
                                    )}
                                </Field>
                            )} />                  
                        </FieldGroup>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}