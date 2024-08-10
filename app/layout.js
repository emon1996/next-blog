import { Ubuntu } from '@next/font/google';
import '../styles/globals.css';

const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: ['400', '700'], // Add weights if needed
  style: ['normal', 'italic'] // Add styles if needed
});


export const metadata = {
  title: "BLog Grid Card",
  description: "BLog Grid Card made in Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={ubuntu.className}>{children}</body>
    </html>
  );
}



