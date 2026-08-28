import { Nunito, Poppins, Rubik } from "next/font/google";

const poppinsFont = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const rubikFont = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});

const nunitoFont = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export { nunitoFont, poppinsFont, rubikFont };
