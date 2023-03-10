import "../styles/global.css"
import Header from "../components/Header"
import Footer from '../components/Footer'

export default function RootLayout({children,}: {children: React.ReactNode}) {
  return (
    <html>
      <head />
      <body >
        
        <Header/>

        <div className="flex-row lg:px-[20%]">
          {children} 
        </div>

        <Footer/>
        </body>
    </html>
  )
}
