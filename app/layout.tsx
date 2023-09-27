import './globals.scss'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: '3D Navbar with Next.js and React Three Fiber',
    description: 'Create an immersive 3D navigation bar using Next.js, React Three Fiber, and Drei. This project features frosted glass effects, interactive 3D links, and smooth page transitions.',
    keywords: 'Next.js, React Three Fiber, Drei, 3D Navigation Bar, Web Development, 3D Web UI',
}

export default function RootLayout({ children } : { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    )
}
