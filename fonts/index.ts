import { Inter, Poppins, Roboto } from "next/font/google";


export const poppins = Poppins({
  weight: ['400', '300', '600'],
  subsets: ["latin"],
});

export const roboto = Roboto({
  weight: ["400", "500", "700", '300'],
  subsets: ["latin"],
});

export const inter = Inter({
  weight: ['400', '700'],
  subsets: ["latin"],
});