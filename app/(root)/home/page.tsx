'use client'

const Home = () => {
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
    <div>Home</div>
  )
}

export default Home