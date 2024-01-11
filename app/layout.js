import './globals.css'

export const metadata = {
  title: 'AI photo tool registration',
  description: 'AI photo tool by Anthill Networks',
}

export default function RootLayout({ children })
{
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.png" sizes="any" />
      </head>
      <body className={`bg-primary`}>
        <div className='p-5 flex items-center justify-center'>
          {children}
        </div>
      </body>
    </html >
  )
}
