'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'
import { capitalizeText } from '@/lib/utils'

export const signInUser = async (values: SignInParams) => {
  const supabase = await createClient()

  const { data, error } = await supabase.auth.signInWithPassword(values)

  if (error) {    
    return {
      code: error.code,
      message: error.message,
      error: true,
    }
  } else {    
    // revalidatePath('/home', 'layout')
    const userId = data.user?.id

    // Get the user profile from the 'profiles' table
    const { data: userName } = await supabase
      .from('profiles')
      .select('firstName')
      .eq('id', userId)
      .single()
      
    return {
      data: userName,
      error: false,
    }
  }
}

export const signUpUser = async (values: SignUpParams) => {
  const supabase = await createClient()

  // Transform the values object to include options and register user with meta data
  const transformedValues = {
    email: values.email,
    password: values.password,
    // options: {
    //   data: {
    //     firstName: capitalizeText(values.firstName),
    //     lastName: capitalizeText(values.lastName),
    //     countryCode: values.code,
    //     mobileNumber: values.mobile,
    //   },
    // },
  };

  const { data, error } = await supabase.auth.signUp(transformedValues)

  if (error) {  
    return {
      code: error.code,
      message: error.message,
      error: true,
    }
  } else {
    // Update User Info into 'profiles' table   
    if (!data.user) {
      return {
        code: 'USER_NULL',
        message: 'User data is null',
        error: true,
      }
    }

    const {data: newUser} = await supabase
    .from('profiles')
    .update({ 
      firstName: capitalizeText(values.firstName), 
      lastName: capitalizeText(values.lastName),
      countryCode: values.code,
      mobile: values.mobile,})
    .eq('id', data.user.id )
    .select()

    return {
      data: newUser,
      error: false,
    }
  }
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

