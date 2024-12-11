"use client"

import { Card } from "../ui/card";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Link from "next/link";
import { registerSchema } from "@/validation/auth/validation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from 'zod';
import { handleRegister } from "@/services/auth/action";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { useRef, useState } from "react";
import { Eye, EyeClosed } from "lucide-react";


type RegisterFormSchema = z.infer<typeof registerSchema>;

export default function RegisterForm() {
  const form = useForm<RegisterFormSchema>({
    resolver: zodResolver(registerSchema),
  });

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);

  const { control, handleSubmit, formState: { isLoading, isSubmitting, isValid, isDirty, errors } } = form;


  return (
    <section className="px-4 py-36">
      <Card className="max-w-[520px] mx-auto px-12 py-6">
        <span className="font-light">Please enter your details to register</span>
        <h2 className="font-semibold text-[2rem]">Registration</h2>

        <Form {...form}>
          <form onSubmit={handleSubmit(handleRegister)} className="mt-12">
            <div className="mb-6">
              <FormField
                control={control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-normal">Full Name</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Enter your full name"
                        className={`${errors.fullName && 'border-red-500 text-red-500'}`}
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

            <div className="mb-6">
              <FormField
                control={control}
                name="repeatPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-normal">Confirm Password</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          type={showConfirmPassword ? 'text' : 'password'}
                          placeholder="Enter your password"
                          className={`${errors.repeatPassword && 'border-red-500 text-red-500'}`}
                          {...field}
                        />
                        {showConfirmPassword ? (
                          <Eye
                            onClick={() => setShowConfirmPassword(prevStatus => !prevStatus)}
                            className={`${errors.password ? 'text-red-500 hover:text-red-700' : 'text-slate-500 hover:text-slate-700'} h-4 w-4 absolute top-[.6rem] right-2 cursor-pointer`}
                          />
                        ) : (
                          <EyeClosed
                            onClick={() => setShowConfirmPassword(prevStatus => !prevStatus)}
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
            {/* <div className="mb-6">
              <label htmlFor="">Full Name</label>
              <Input type="text" placeholder="Enter your full name" />
            </div>

            <div className="mb-6">
              <label htmlFor="">Email</label>
              <Input type="text" placeholder="Enter your email address" />
            </div>


            <div className="mb-8">
              <label htmlFor="">Password</label>
              <Input type="password" placeholder="Enter your password" />
            </div>

            <div className="mb-8">
              <label htmlFor="">Repeat Password</label>
              <Input type="password" placeholder="Enter your repeat password" />
            </div> */}

            <div className="">
              <Button type="submit" className="w-full text-white">Register</Button>
            </div>

            <div className="mt-4">
              Already have an account? <Link href='/login' className="text-blue-600 hover:underline">Login</Link>
            </div>
          </form>
        </Form>
      </Card>
    </section>

  )
}
