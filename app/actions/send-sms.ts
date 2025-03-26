"use server"

import { z } from "zod"

// Define a schema for validation
const SendSMSSchema = z.object({
  recipients: z.string().min(1, "Recipients are required"),
  message: z.string().min(1, "Message is required"),
})

export type SendSMSFormState = {
  success: boolean
  message: string
}

export async function sendSMS(prevState: SendSMSFormState | null, formData: FormData): Promise<SendSMSFormState> {
  try {
    // Validate the form data
    const validatedFields = SendSMSSchema.safeParse({
      recipients: formData.get("recipients"),
      message: formData.get("message"),
    })

    if (!validatedFields.success) {
      return {
        success: false,
        message: "Validation failed. Please check your inputs.",
      }
    }

    const { recipients, message } = validatedFields.data

    // Create the form data to send to Africa's Talking API
    const apiFormData = new URLSearchParams()
    apiFormData.append("username", process.env.NEXT_PUBLIC_AT_SANDBOX_USERNAME!)
    apiFormData.append("to", recipients)
    apiFormData.append("message", message)
    // apiFormData.append("from", "AFRICASTKNG")

    // Make the API call
    const response = await fetch("https://api.sandbox.africastalking.com/version1/messaging", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
        apiKey: process.env.NEXT_PUBLIC_AT_SANDBOX_API_KEY!,
      },
      body: apiFormData.toString(),
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => null)
      throw new Error(errorData?.message || `API call failed with status: ${response.status}`)
    }

    const data = await response.json()

    // Check the Africa's Talking response format
    if (data.SMSMessageData?.Recipients?.[0]?.statusCode !== 101) {
      return {
        success: false,
        message: data.SMSMessageData?.Recipients?.[0]?.status || "Failed to send SMS",
      }
    }

    return {
      success: true,
      message: `SMS sent successfully to ${data.SMSMessageData.Recipients.length} recipient(s)!`,
    }
  } catch (error) {
    console.error("Error sending SMS:", error)
    return {
      success: false,
      message: error instanceof Error ? error.message : "An unknown error occurred",
    }
  }
}

