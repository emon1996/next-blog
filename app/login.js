// pages/login.js
import Link from 'next/link';

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-white mb-6">Login</h1>
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="block w-full p-3 bg-gray-700 border border-gray-600 rounded text-white"
          />
          <input
            type="password"
            placeholder="Password"
            className="block w-full p-3 bg-gray-700 border border-gray-600 rounded text-white"
          />
          <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white p-3 rounded">
            Login
          </button>
        </form>
        <p className="mt-4 text-gray-400">
          Don't have an account?{' '}
          <Link href="/signup">
            <a className="text-blue-500">Sign Up</a>
          </Link>
        </p>
      </div>
    </div>
  );
}
