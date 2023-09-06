import Navbar from "../components/Navbar";
import {Roboto} from "next/font/google";

export const metadata = {
  title: " Mi Tienda con Next.js - Homepage" ,
  description:"Esta es la pagina principal de mi tienda",
  keywords: "Tienda, online, ecommerce",
};

const roboto = Roboto ({
  weight: ["300", "400","500","700"],
  styles: ["italic", "normal"],
  subsets: ["latin"]
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar/>
        {children}
        </body>
    </html>
  );
}
