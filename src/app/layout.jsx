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
          <footer className="text-center bg-amber-600 text-white font-bold py-3">
            🎂 Serving you since 2020 🎂 
          </footer>
        </Providers>
      </body>
    </html>
  )
}
