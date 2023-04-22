import { Poppins } from "next/font/google"
import Header from "./components/Header"
import "./globals.css"

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
})

export const metadata = {
  title: "Todos",
  description: "A simple todo app using local storage",
  keywords:
    "nextjs 13, todo app, todo list, local storage, localstorage, react, react 18",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        <main className="container">{children}</main>
      </body>
    </html>
  )
}
