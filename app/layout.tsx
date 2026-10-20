import type { Metadata, Viewport } from "next";
import "./globals.css";
export const metadata: Metadata = { title:"A Little Blue for Manju 💙", description:"A tiny, cozy corner of the internet, made just for Manju.", applicationName:"A Little Blue for Manju", openGraph:{title:"A Little Blue for Manju 💙",description:"A little reminder that you're cared for, exactly as you are.",type:"website"} };
export const viewport: Viewport = { themeColor:"#dcecff", width:"device-width", initialScale:1 };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en"><body>{children}</body></html>; }