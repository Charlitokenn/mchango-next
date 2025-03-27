import { forgotPasswordAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import Image from "next/image";
import { SmtpMessage } from "../smtp-message";

export default async function ForgotPassword(props: {
  searchParams: Promise<Message>;
}) {
  const searchParams = await props.searchParams;
  return (
    <>
      <form className="flex-1 flex flex-col min-w-64">      
        <div className="flex justify-center gap-2 mb-4">
          <Image src="./logo.svg" alt="logo" width={45} height={45} />
          <span style={{ fontFamily: "'Blueberry', sans-serif", fontSize: "2rem", color: '#f49f1c' }}>Mchango App</span>
        </div>
        <h1 className="text-2xl font-medium flex justify-center">Reset Password</h1>
        <div className="flex flex-col gap-2 [&>input]:mb-3 mt-8">
          <Label htmlFor="email">Email</Label>
          <Input name="email" placeholder="you@example.com" required />
          <SubmitButton formAction={forgotPasswordAction}>
            Reset Password
          </SubmitButton>
          <div className="flex justify-center">
            <p className="text-sm text-foreground">
              Already have an account?{" "}
              <Link className="text-foreground font-medium underline" href="/sign-in">
                Sign In
              </Link>
            </p>
          </div>           
          <FormMessage message={searchParams} />
        </div>
      </form>
    </>
  );
}
