import './globals.css'

export const metadata = {
  title: 'Pibi Tech | Enterprise Data Science & Business Intelligence',
  description: 'Transform complex enterprise data into predictive insights, business intelligence dashboards, and automated decision intelligence.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Space+Grotesk:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#2ec4b6] selection:text-white">
        {children}
      </body>
    </html>
  )
}
