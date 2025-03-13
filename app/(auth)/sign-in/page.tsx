"use client";

import { signInSchema } from "@/lib/validations";
import AuthForm from "@/components/authForm";
import { loginAction } from "@/actions/auth.actions";

const Page = () => (
  <AuthForm
    type="SIGN_IN"
    schema={signInSchema}
    defaultValues={{
      email: "",
      password: "",
    }}
    onSubmit={loginAction}
  />
);

export default Page;