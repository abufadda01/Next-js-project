import Footer from "@/components/footer/Footer"
import Navbar from "@/components/navbar/Navbar"
import "./globals.css"


export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">

      <header>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;1,300;1,400&display=swap" rel="stylesheet"/>
      </header>
      
      <body>
      
        <div className="container">
      
          <Navbar/>
      
          {children}
      
          <Footer/>
      
        </div>
      
      </body>
    
    </html>
  )
}

