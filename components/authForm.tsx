'use client';

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
} from "@/components/ui/form"

import { authFormSchema } from '@/lib/utils';
import { Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import CustomInput from './CustomInput';
import { loginAction, signupAction } from '@/actions/auth.actions';


const AuthForm = ({ type }: { type: string }) => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const formSchema = authFormSchema(type);

    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        email: "",
        password: ''
      },
    })
   
    // 2. Define a submit handler.
    const onSubmit = async (data: z.infer<typeof formSchema>) => {
      setIsLoading(true);

      try {       
        if(type === 'sign-up') {
          // const userData = {
          //   firstName: data.firstName!,
          //   lastName: data.lastName!,
          //   mobile: data.mobile!,
          //   email: data.email!,
          //   password: data.password
          // }

          const formData = new FormData();
          formData.append('firstName', data.firstName!);
          formData.append('lastName', data.lastName!);
          formData.append('mobile', data.mobile!);
          formData.append('email', data.email);
          formData.append('password', data.password);

          const newUser = await signupAction(formData);

          setUser(newUser);
        }

        if(type === 'sign-in') {
          const formData = new FormData();
          formData.append('email', data.email);
          formData.append('password', data.password);

          const response = await loginAction(formData);

          if(response) router.push('/home')
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

  return (
    <section className="flex min-h-screen w-full max-w-[420px] flex-col justify-center gap-5 py-10 md:gap-8;">
      <header className='flex flex-col gap-5 md:gap-8'>
          <Link href="/" className="cursor-pointer flex items-center gap-1">
            <Image 
              src="/logo.png"
              width={78}
              height={54}
              alt="Mchango logo"
            />
            <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1"></h1>
          </Link>

          <div className="flex flex-col gap-1 md:gap-3">
            <h1 className="text-24 lg:text-36 font-semibold text-gray-900">
              {user 
                ? 'Link Account'
                : type === 'sign-in'
                  ? 'Sign In'
                  : 'Sign Up'
              }
              <p className="text-16 font-normal text-gray-600">
                {user 
                  ? 'Link your account to get started'
                  : 'Please enter your details'
                }
              </p>  
            </h1>
          </div>
      </header>
      {user ? (
        <div className="flex flex-col gap-4">
          {/* <PlaidLink user={user} variant="primary" /> */}
        </div>
      ): (
        <>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {type === 'sign-up' && (
                <>
                  <div className="flex gap-4">
                    <CustomInput control={form.control} name='firstName' label="First Name" placeholder='Enter your first name' />
                    <CustomInput control={form.control} name='lastName' label="Last Name" placeholder='Enter your first name' />
                  </div>
                  <CustomInput control={form.control} name='code' label="Mobile Number" placeholder='Enter your Mobile' />
                  <CustomInput control={form.control} name='mobile' label="Country Code" placeholder='Select Country Code' />
                </>
              )}

              <CustomInput control={form.control} name='email' label="Email" placeholder='Enter your email' />

              <CustomInput control={form.control} name='password' label="Password" placeholder='Enter your password' />

              <div className="flex flex-col gap-4">
                <Button type="submit" disabled={isLoading} className="form-btn">
                  {isLoading ? (
                    <>
                      <Loader2 size={20} className="animate-spin" /> &nbsp;
                      Loading...
                    </>
                  ) : type === 'sign-in' 
                    ? 'Sign In' : 'Sign Up'}
                </Button>
              </div>
            </form>
          </Form>

          <footer className="flex justify-center gap-1">
            <p className="text-14 font-normal text-gray-600">
              {type === 'sign-in'
              ? "Don't have an account?"
              : "Already have an account?"}
            </p>
            <Link href={type === 'sign-in' ? '/sign-up' : '/sign-in'} className="form-link">
              {type === 'sign-in' ? 'Sign up' : 'Sign in'}
            </Link>
          </footer>
        </>
      )}
    </section>
  )
}

export default AuthForm