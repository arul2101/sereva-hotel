"use client"

import { Card } from "../ui/card";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from 'zod';
import { loginSchema } from "@/validation/auth/validation";
import { handleLogin } from "@/services/auth/action";
import { cn } from "@/lib/utils";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { useState } from "react";
import { Eye, EyeClosed } from "lucide-react";

type LoginFormSchema = z.infer<typeof loginSchema>;


export default function LoginForm() {
  const form = useForm<LoginFormSchema>({
    resolver: zodResolver(loginSchema),
  });
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const { control, handleSubmit, formState: { isLoading, isSubmitting, isValid, isDirty, errors } } = form;

  return (
    <section className="px-4 py-44">
      <Card className="max-w-[520px] mx-auto px-12 py-6">
        <span className="font-light">Please enter your details to login</span>
        <h2 className="font-semibold text-[2rem]">Welcome back!</h2>

        <Form {...form}>
          <form onSubmit={handleSubmit(handleLogin)} className="mt-12">
            <div className="mb-6">
              <FormField
                control={control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-normal">Email</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Enter your email address"
                        className={`${errors.email && 'border-red-500 text-red-500'}`}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>


            <div className="mb-6">
              <FormField
                control={control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-normal">Password</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          type={showPassword ? 'text' : 'password'}
                          placeholder="Enter your password"
                          className={`${errors.password && 'border-red-500 text-red-500'}`}
                          {...field}
                        />
                        {showPassword ? (
                          <Eye
                            onClick={() => setShowPassword(prevStatus => !prevStatus)}
                            className={`${errors.password ? 'text-red-500 hover:text-red-700' : 'text-slate-500 hover:text-slate-700'} h-4 w-4 absolute top-[.6rem] right-2 cursor-pointer`}
                          />
                        ) : (
                          <EyeClosed
                            onClick={() => setShowPassword(prevStatus => !prevStatus)}
                            className={`${errors.password ? 'text-red-500 hover:text-red-700' : 'text-slate-500 hover:text-slate-700'} h-4 w-4 absolute top-[.6rem] right-2 cursor-pointer`}
                          />
                        )}
                      </div>

                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="">
              <Button
                type="submit"
                disabled={isSubmitting}
                className={cn('w-full text-white focus:outline-none')}
              >{isSubmitting ? 'Loading...' : 'Login'}</Button>
            </div>

            <div className="mt-4">
              Don&lsquo;t have an account? <Link href='/register' className="text-blue-600 hover:underline">Register</Link>
            </div>
          </form>
        </Form>
      </Card>
    </section>

  )
}
