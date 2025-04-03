'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { toast } from "sonner"

import { createClient } from '@/utils/supabase/server'

export const signInUser = async (values: SignInParams) => {
  const supabase = await createClient()

  const { error } = await supabase.auth.signInWithPassword(values)

  if (error) {
    redirect('/error')
  }

  revalidatePath('/home', 'layout')
  redirect('/home')
}

export const signUpUser = async (values: SignUpParams) => {
  const supabase = await createClient()

  // Transform the values object to include options and register user with meta data
  const transformedValues = {
    email: values.email,
    password: values.password,
    options: {
      data: {
        firstName: values.firstName,
        lastName: values.lastName,
        countryCode: values.code,
        mobileNumber: values.mobile,
      },
    },
  };

  const { error } = await supabase.auth.signUp(transformedValues)

  if (error) {
    redirect('/error')
  }

  revalidatePath('/home', 'layout')
  redirect('/home')
}

export const signOutUser = async () => {
  const supabase = await createClient()

  const { error } = await supabase.auth.signOut()

  if (error) {
    redirect('/error')
  }

  revalidatePath('/sign-in', 'layout')
  redirect('/sign-in')  
}

