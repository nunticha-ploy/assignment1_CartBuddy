import Image from 'next/image';

export default function Home() {
    return (
        <div style={{ textAlign: 'center', padding: '50px' }}>
            <Image src="CartBuddyLogo.png" alt="CartBuddy Logo" width={100} height={100} />
            <h1>Welcome to CartBuddy</h1>
            <p>Your Shopping Companion!</p>
        </div>
    );
}