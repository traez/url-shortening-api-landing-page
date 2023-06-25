import './globals.css'

export const metadata = {
  title: 'URL Shortening API Landing Page',
  description: 'Created by Trae Zeeofor',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
