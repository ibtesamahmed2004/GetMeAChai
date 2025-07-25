import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SessionWrapper from "@/components/SessionWrapper";


// import Dashboard from "@/components/Dashboard";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "🏷️ GetMeAChai - Fuel Creativity, One Sip at a Time",
  description: "GetMeAChai is a modern creator-support platform designed to turn everyday appreciation into lasting impact. By blending the simplicity of buying a chai or coffee with the power of direct support, GetMeAChai gives fans a meaningful way to fuel the creativity of the people they admire. Creators can effortlessly share their work, receive support, and build genuine connections with their community— no noise, no gatekeeping, just pure, heartfelt engagement. Because every sip is more than a drink—it's a statement of belief in someone's passion.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`bg-[#0d0c1d] bg-[radial-gradient(circle_farthest-side,_rgba(0,245,255,0.15),_transparent),radial-gradient(circle_farthest-side,_rgba(255,0,153,0.12),_transparent)]  text-white`}
      >

        <SessionWrapper>

        <Navbar/>

        <div className="min-h-screen bg-[#0d0c1d] bg-[radial-gradient(circle_farthest-side,_rgba(0,245,255,0.15),_transparent),radial-gradient(circle_farthest-side,_rgba(255,0,153,0.12),_transparent)]  text-white">

        {children}

        </div>
        <Footer/>

        </SessionWrapper>
      </body>
    </html>
  );
}
