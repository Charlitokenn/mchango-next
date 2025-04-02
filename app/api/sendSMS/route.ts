import axios from 'axios';

const AFRICAS_TALKING_API_KEY = process.env.NEXT_PUBLIC_AT_SANDBOX_API_KEY!;
const AFRICAS_TALKING_USERNAME = process.env.NEXT_PUBLIC_AT_SANDBOX_USERNAME!;
const AFRICAS_TALKING_URL = `https://api.sandbox.africastalking.com/version1/messaging`
// Allowing all origins for development or specific origins for production
const allowedOrigins = ['http://localhost:3000', 'https://curly-space-xylophone-rvpx99qjpxp2wqrv-3000.app.github.dev'];

export async function POST(req: Request) {
  const origin = req.headers.get('Origin');
  
  // Check if the Origin header is allowed
  if (!allowedOrigins.includes(origin || '')) {
    return new Response(JSON.stringify({ error: 'Origin not allowed' }), {
      status: 403,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    // Parse the form-encoded data from the request body
    const formData = new URLSearchParams(await req.text());

    const username = formData.get('username');
    const to = formData.get('to');
    const message = formData.get('message');
    const from = formData.get('from');

    if (!username || !to || !message || !from) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Prepare the request body for Africa's Talking API
    const requestBody = new URLSearchParams({
      username,
      to,
      message,
      from,
    });

    // Send the POST request to Africa's Talking API
    const response = await axios.post(
      AFRICAS_TALKING_URL,
      requestBody,
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
          'apiKey': AFRICAS_TALKING_API_KEY,
        },
      }
    );

    // Return the API response to the client
    return new Response(JSON.stringify(response.data), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error sending SMS:', error);
    return new Response(JSON.stringify({ error: 'Failed to send SMS' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

