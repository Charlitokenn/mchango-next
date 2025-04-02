"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import Link from "next/link"
import {toast} from "sonner"
import FormField from "@/components/FormField"
import CustomSelect from "./customSelect"


const authFormSchema = (type: FormType) => {
  return z.object({
    firstname: type === 'sign-up' ? z.string().min(3) : z.string().optional(),
    lastname: type === 'sign-up' ? z.string().min(3) : z.string().optional(),
    code: type === 'sign-up' ? z.string().min(4).max(4) : z.string().optional(),
    mobile: type === 'sign-up' ? z.string().min(10).max(10) : z.string().optional(),
    email: z.string().email(),
    password: z.string().min(6)  
  })
}

const AuthForm = ({ type }: { type: FormType }) => {
  const formSchema = authFormSchema(type)

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      code: "+255",
      mobile: "",
      email: "",
      password: ""
    },
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      if(type === 'sign-up'){
        console.log('SIGN UP',values)
      }else{
        console.log('SIGN IN', values)
      }
    } catch (error) {
      console.log(error)
      toast.error(`There was an error: ${error}`)
    }
  }

  const isSignIn = type === 'sign-in'

  return (
    <div className="card-border lg:min-w-[566px]">
      <div className="flex flex-col gap-6 card py-14 px-10">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6 mt-4 form">
              {isSignIn && (
                <div className="flex flex-col space-y-6">
                  <div className="flex justify-between space-x-2">                
                    <FormField control={form.control} name='firstname' label='First Name' placeholder=""/>
                    <FormField control={form.control} name='lastname' label='Last Name' placeholder=""/>
                  </div>
                  <div className="flex -space-x-0.5">
                    <CustomSelect classname="rounded-r" control={form.control} name='code' label='Mobile Number' placeholder="Select Country"/>
                    <FormField classname="rounded-l mt-3.5" control={form.control} name='mobile' label='' placeholder=""/>
                  </div>                  
                  </div>             
                )
              }
                <FormField control={form.control} type="email" name='email' label='Email' placeholder="Email Address"/>
                <FormField control={form.control} type="password" name='password' label='Password' placeholder="Enter Password"/>
            <Button type="submit" className="btn w-full">{isSignIn ? 'Sign In' : 'Create an Account'}</Button>
          </form>
        </Form>
        <p className="text-center">
          {isSignIn ? 'No account yet?' : 'Have an account already?'}
          <Link  
            href={!isSignIn ? '/sign-in' : '/sign-up'} 
            className="font-bold text-user-primary ml-1"
          >
            {!isSignIn ? 'Sign In' : 'Sign Up'}
          </Link>
        </p>
      </div>
    </div>
  )
}

export default AuthForm