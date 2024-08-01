// pages/signup.js
import Link from 'next/link';

export default function Signup() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">Sign Up</h1>
      <form className="mt-4">
        <input type="text" placeholder="Username" className="block w-full p-2 border mb-2" />
        <input type="email" placeholder="Email" className="block w-full p-2 border mb-2" />
        <input type="password" placeholder="Password" className="block w-full p-2 border mb-2" />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Sign Up</button>
      </form>
      <p className="mt-2">
        Already have an account? <Link href="/login" className="text-blue-500">Login</Link>
      </p>
    </div>
  );
}
