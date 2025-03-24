import "./globals.css";
import Navbar from "./componentes/Navbar";
import { Toaster } from 'react-hot-toast'

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-200 ">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 xl:px-0">
          {children}
        </div>
        <Toaster position='bottom-right'/>
      </body>
    </html>
  );
}
