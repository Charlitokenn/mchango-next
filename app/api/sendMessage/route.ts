import { NextResponse } from 'next/server';

const AFRICAS_TALKING_API_KEY = process.env.NEXT_PUBLIC_AT_SANDBOX_API_KEY!;
const AFRICAS_TALKING_USERNAME = process.env.NEXT_PUBLIC_AT_SANDBOX_USERNAME!;
const AFRICAS_TALKING_URL = 'https://api.sandbox.africastalking.com/version1/messaging';

export async function POST(request: Request) {
    try {
        const { to, message, from } = await request.json();

        if (!to || !message) {
            return NextResponse.json({ message: 'Missing required fields: to, message' }, { status: 400 });
        }

        const response = await fetch(AFRICAS_TALKING_URL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
                'apiKey': AFRICAS_TALKING_API_KEY,
            },
            body: new URLSearchParams({
                username: AFRICAS_TALKING_USERNAME,
                to,
                message,
                from: from || '',
            }),
        });

        const data = await response.json();

        if (!response.ok) {
            return NextResponse.json({ message: 'Failed to send message', error: data }, { status: response.status });
        }
        console.log(data)
        return NextResponse.json(data, { status: 200 });
    } catch (error: any) {
        return NextResponse.json({ message: 'Failed to send message', error: error.message }, { status: 500 });
    }
}
