import "@/app/globals.css"

import MyNavbar from "@/components/MyNavbar"
import Providers from "./redux/provider"

export const metadata = {
  title: 'Doffy Puffy',
  description: 'Best pastry shop',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <MyNavbar />
          {children}
        </Providers>
      </body>
    </html>
  )
}
