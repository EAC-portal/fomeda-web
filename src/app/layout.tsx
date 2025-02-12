import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import "../styles/product.component.css"
import "../styles/header.component.css"
import "../styles/category.component.css"
import "../styles/common.component.css"
import {AuthProvider} from "./(auth)/context/auth-context";
import {Suspense} from "react";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "FOMEDA Standard",
    description: "Electrical Appliances Certification Platform",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <AuthProvider>
            <Suspense fallback={null}>
                {children}
            </Suspense>
        </AuthProvider>
        </body>
        </html>
    );
}
