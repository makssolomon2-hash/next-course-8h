"use client";

import { signUpSchema } from "@/app/schemas/auth";
import MyInput from "@/components/MyInput";
import { Button } from "@/components/ui/button";
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

    function onSubmit() {
        console.log('yoo')
    }

    return (
        <div className="w-full h-screen flex flex-col justify-center text-3xl font-bold mt-5">
            <h1 className="my-10">SIGHN UP PAGE</h1>
            
            <Card className="my-10">
                <CardHeader>
                    <CardTitle>
                        Sign Up
                    </CardTitle>
                    <CardDescription>
                        Create an acount to get started
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    

                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <FieldGroup className="gap-4">
                            <Controller name="name" control={form.control} render={({field, fieldState}) =>(
                                <Field>
                                    <FieldLabel>Full Name</FieldLabel>
                                    <Input
                                        aria-invalid={fieldState.invalid}
                                        placeholder="Enter your name..." 
                                        {...field} 
                                    />

                                    {fieldState.invalid && (
                                         <FieldError errors={[fieldState.error]}/>
                                    )}
                                </Field>
                            )} />     

                            <Controller name="email" control={form.control} render={({field, fieldState}) =>(
                                <Field>
                                    <FieldLabel>Email</FieldLabel>
                                    <Input
                                        aria-invalid={fieldState.invalid} 
                                        placeholder="Enter your email..." 
                                        {...field} 
                                    />

                                    {fieldState.invalid && (
                                         <FieldError errors={[fieldState.error]}/>
                                    )}
                                </Field>
                            )} />    

                            <Controller name="password" control={form.control} render={({field, fieldState}) =>(
                                <Field>
                                    <FieldLabel>Password</FieldLabel>
                                    <Input
                                        aria-invalid={fieldState.invalid} 
                                        placeholder="********" 
                                        type="password" 
                                        {...field} 
                                    />

                                    {fieldState.invalid && (
                                         <FieldError errors={[fieldState.error]}/>
                                    )}
                                </Field>
                            )} /> 

                            <Button type="submit">Sign Up</Button>  

                            
                           
                          
                        </FieldGroup>
                    </form>
                </CardContent>
            </Card>
            <div className="text-sm max-w-md mx-auto">
            <MyInput        
                placeholders={['first...','second...','Ask anything...3','fourh...','Ask anything...5']}
            />
                
            </div>
        
        </div>
    );
}