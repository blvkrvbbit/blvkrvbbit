import Navbar from '../components/navbar/navbar.component';
import '../globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blvk Rvbbit | Portfolio',
  description: 'My personal portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <Navbar />
        <div className='container  px-4 mx-auto'>{children}</div>
      </body>
    </html>
  );
}
