'use client'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { signUpUser } from "@/actions/auth.actions"
import Link from "next/link"
import Image from "next/image"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"

const formSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  mobileNumber: z.string().min(10).max(10),
  countryCode: z.string(),
  email: z.string().email(),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
})

export const SignUpForm = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      mobileNumber: "",
      countryCode: "+255",
      email: "",
      password: ""
    },
  })
 
  // 2. Define a submit handler.
  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    await signUpUser(values);
  }

  return (
    <>
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          <Form {...form}>
            <div className="flex flex-col gap-6 p-8">
              <div className="flex flex-col items-center text-center mb-3">
                <h1 className="text-2xl font-bold">Welcome</h1>
                <p className="text-muted-foreground text-balance">
                  Create your Mchango App account
                </p>
              </div> 
              <form onSubmit={form.handleSubmit(handleSubmit)}>
                <div className="flex flex-row gap-2">
                  <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem className="mb-4">
                          <FormLabel>First Name</FormLabel>
                          <FormControl>
                            <Input placeholder="First Name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem className="mb-4">
                          <FormLabel>Last Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Last Name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />                   
                </div> 
                <div className="flex flex-row justify-between gap-2">
                  <FormField
                    control={form.control}
                    name="countryCode"
                    render={({ field }) => (
                      <FormItem className="mb-4">
                        <FormLabel>Country</FormLabel>
                        <FormControl>
                          <Select onValueChange={field.onChange} {...field}>
                            <SelectTrigger>
                              <SelectValue placeholder="Country Code" />
                            </SelectTrigger>                            
                            <SelectContent>
                              <SelectItem value="+255"><Image alt="Tanzania" src='TZFlag.svg' width={16} height={16}/> +255</SelectItem>
                              <SelectItem value="+254"><Image alt="Kenya" src='KEFlag.svg' width={16} height={16}/> +254</SelectItem>
                              <SelectItem value="+256"><Image alt="Uganda" src='UGFlag.svg' width={16} height={16}/> +256</SelectItem>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="mobileNumber"
                    render={({ field }) => (
                      <FormItem className="mb-4">
                        <FormLabel>Mobile</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g. 0712002001" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />                    
                </div>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="mb-4">
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Your Email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem className="mb-6">
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input placeholder="Password" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />        
                <Button type="submit" className="w-full">Create Account</Button>
              </form>
              <div className="text-center text-sm">
                Already have an account?{" "}
                <Link href='/sign-in' className="underline underline-offset-4">Sign In</Link>
              </div>
            </div>
          </Form>
          <div className="bg-muted relative hidden md:block">
            <Image 
              src="/greetings.gif"
              alt="image"
              className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
              unoptimized
              width={120}
              height={100}
              />
          </div>
        </CardContent>
      </Card>
      <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </div>
    </>
  )   
}