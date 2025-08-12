import '../styles/globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { CartProvider } from '../components/CartContext'

export const metadata = {
  title: 'Loraiso - Pure as Nature Intended',
  description: 'Premium cold-pressed oils and natural foods crafted with care. Non-GMO, lab-tested, and pure quality from Loraiso.',
  keywords: 'cold-pressed oil, olive oil, almond oil, natural foods, organic, premium quality, halal',
  openGraph: {
    title: 'Loraiso - Pure as Nature Intended',
    description: 'Premium cold-pressed oils and natural foods crafted with care.',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ background: 'var(--color-background)', color: 'var(--color-foreground)', fontFamily: 'var(--font-body)' }}>
        <CartProvider>
          <div className="flex flex-col min-h-screen">
            <Header className="header" />
            <main className="flex-1">
              {children}
            </main>
            <Footer className="footer" />
          </div>
        </CartProvider>
      </body>
    </html>
  )
}