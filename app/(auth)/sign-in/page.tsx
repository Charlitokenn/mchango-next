import AuthForm from "@/components/authForm"

const SignUp = async () => {
  const sendMessage = async () => {
    try {
        const response = await fetch('/api/sendMessage', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                to: '+255745896952',
                message: 'Hello World!!',
            })
        });

        const result = await response.json();
        console.log('Response:', result);
    } catch (error) {
        console.error('Error sending message:', error);
    }
};


sendMessage()

  return (
    <section className="flex-center size-full max-sm:px-6">
      <AuthForm type="sign-in" />
    </section>
  )
}

export default SignUp