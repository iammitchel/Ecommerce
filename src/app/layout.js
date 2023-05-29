import React from 'react'
import './globals.css'

export const metadata = {
  title: 'Ecommerce store',
  description: 'Created by Mitchel Ogbu',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
