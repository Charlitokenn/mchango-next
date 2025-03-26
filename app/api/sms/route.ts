import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const formData = await request.formData()

    // Get the necessary data from the request or use your own values
    const username = formData.get("username") || "sandbox"
    const recipients = formData.get("recipients")
    const message = formData.get("message")
    const sender = formData.get("sender") || "AFRICASTKNG"

    // Create the form data to send to Africa's Talking API
    const apiFormData = new URLSearchParams()
    apiFormData.append("username", username as string)
    apiFormData.append("to", recipients as string)
    apiFormData.append("message", message as string)

    if (sender) {
      apiFormData.append("from", sender as string)
    }

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
      throw new Error(`API call failed with status: ${response.status}`)
    }

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error("Error sending SMS:", error)
    return NextResponse.json({ error: "Failed to send SMS" }, { status: 500 })
  }
}

