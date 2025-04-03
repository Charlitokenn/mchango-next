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
import { countryCodes } from "@/constants"
import { signInUser, signUpUser } from "@/app/actions/auth.actions"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Logo from "./logo"



const authFormSchema = (type: FormType) => {
  const mobileSchema = z.string().regex(/^0\d{9}$/, "Mobile number must have 10 digits and start with 0");
  
  const passwordSchema = z.string()
  .min(6, {message: "Password must be at least 6 characters long"})
  // .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
  // .regex(/[a-z]/, "Password must contain at least one lowercase letter")
  // .regex(/\d/, "Password must contain at least one number")
  // .regex(/[\W_]/, "Password must contain at least one special character");

  return z.object({
    firstName: type === 'sign-up' ? z.string().min(3) : z.string().optional(),
    lastName: type === 'sign-up' ? z.string().min(3) : z.string().optional(),
    code: type === 'sign-up' ? z.string().min(4).max(4) : z.string().optional(),
    mobile: type === 'sign-up' ? mobileSchema : z.string().optional(),
    email: z.string().email(),
    password: type !== 'forgot-password' ? passwordSchema : z.string().optional(),
  })
}

const AuthForm = ({ type }: { type: FormType }) => {
  const router = useRouter()
  const formSchema = authFormSchema(type)

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      code: "",
      mobile: "",
      email: "",
      password: ""
    },
  })
 
  // 2. Define a submit handler.
  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      if (type === 'sign-up') {
        const response = await signUpUser(values)

        if(response?.error) {
          toast.error(response.message, { description: `Failed to create account. Please try again.` })
          return
        } else {
          const firstName = response.data?.[0]?.firstName || "User"

          toast.success("Account Created", { 
            description: `👋 Welcome aboard ${firstName}`,
          })
        }
                
        router.push('/sign-in')
        console.log('SIGN UP',values)
      } else {
        const response = await signInUser(values);

        if(response?.error) {
          toast.error(response.message, {
            description: `Failed to log into account. Please try again.`,
            // action: {
            //   label: "Undo",
            //   onClick: () => console.log("Undo"),
            // },
          })
          return
        } else {
          const userName = response?.data?.firstName
         
          toast.success("Login Successful", { 
            description: `Welcome back, ${userName}`,
          })
          router.push('/home')
        }
      }    
    } catch (error) {
      console.log(error)
      toast("Couldn't Login", {
        description: `Failed to log into account. Please try again.`,
        action: {
          label: "Undo",
          onClick: () => console.log("Undo"),
        },
      })
    }
  }

  const isSignIn = type === 'sign-in'
  const isForgotPassword = type === 'forgot-password'

  return (
    <div className="lg:min-w-[487x]">
      <div className="flex flex-col gap-6 card py-8 px-10 border rounded-lg !bg-white shadow-sm">
        <Logo />           
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="w-full space-y-6 mt-4 form">
              {!isSignIn && (
                <div className="flex flex-col space-y-6">
                  <div className="flex justify-between space-x-2">                
                    <FormField control={form.control} name='firstName' label='First Name' placeholder="First Name"/>
                    <FormField control={form.control} name='lastName' label='Last Name' placeholder="Last Name"/>
                  </div>
                  <div className="flex -space-x-0.5">
                    <CustomSelect 
                      classname="rounded-r" 
                      control={form.control} 
                      name='code' 
                      label='Mobile Number' 
                      placeholder="Select Country"
                      options={countryCodes}
                    />
                    <FormField classname="rounded-l mt-3.5 min-w-[230px]" control={form.control} name='mobile' label='' placeholder="e.g 0712555888"/>
                  </div>                  
                  </div>             
                )
              }
                <FormField control={form.control} type="email" name='email' label='Email' placeholder="Email Address"/>
                {!isForgotPassword && <FormField control={form.control} type="password" name='password' label='Password' placeholder="Enter Password"/>}
            <Button type="submit" className="btn w-full">
              {isSignIn ? 'Sign In' : isForgotPassword ? 'Reset Password' : 'Create an Account'}
            </Button>
          </form>
        </Form>
        <p className="text-center -mt-3 text-sm">
          {isSignIn ? "Don't have an account?" : 'Have an account already?'}
          <Link  
            href={!isSignIn ? '/sign-in' : '/sign-up'} 
            className="font-bold text-user-primary ml-1"
          >
            {!isSignIn ? 'Sign In' : 'Sign Up'}
          </Link>
        </p>
      </div>
      <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </div>      
    </div>
  )
}

export default AuthForm