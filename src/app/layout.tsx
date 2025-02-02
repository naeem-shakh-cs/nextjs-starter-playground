import './globals.css'

export const dynamic = "force-static";

export const dynamicParams = true;

//export const revalidate = 600; // 10 minutes


export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  console.log('Hi');
  return (
    <html lang="en">
      <body >{children}
      <h1>Hi</h1>
      </body>
    </html>
  )
}
