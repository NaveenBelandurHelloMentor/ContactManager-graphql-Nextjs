"use client"
import StartApolloServer from './ApolloClient/ApolloClient'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
         <StartApolloServer>
        {children}
        </StartApolloServer>
        </body>
    </html>
  )
}
