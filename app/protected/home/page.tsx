"use client"

import { useFormState, useFormStatus } from "react-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle, CheckCircle } from "lucide-react"
import { sendSMS, type SendSMSFormState } from "@/app/actions/send-sms"
import { useActionState } from "react"

// Submit button with loading state
function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <Button type="submit" className="w-full" disabled={pending}>
      {pending ? "Sending..." : "Send SMS"}
    </Button>
  )
}

export default function SendSMSPage() {
  const initialState: SendSMSFormState = { success: false, message: "" }
  const [state, formAction] = useActionState(sendSMS, initialState)

  return (
    <div className="container mx-auto py-10">
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Send SMS</CardTitle>
          <CardDescription>Send SMS messages using Africa's Talking API</CardDescription>
        </CardHeader>
        <form action={formAction}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="recipients" className="text-sm font-medium">
                Recipients (comma separated)
              </label>
              <Input id="recipients" name="recipients" placeholder="+254711XXXYYY,+254733YYYZZZ" required />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <Textarea id="message" name="message" placeholder="Enter your message here" required />
            </div>
            {state.message && (
              <div
                className={`p-3 rounded-md flex items-start gap-2 ${
                  state.success ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                }`}
              >
                {state.success ? (
                  <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                ) : (
                  <AlertCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                )}
                <span>{state.message}</span>
              </div>
            )}
          </CardContent>
          <CardFooter>
            <SubmitButton />
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}

