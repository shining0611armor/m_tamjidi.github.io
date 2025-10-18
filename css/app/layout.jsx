import '../styles/globals.css';
import { AnimatePresence } from 'framer-motion';

export const metadata = {
  title: 'Mehran Tamjidi - Portfolio',
  description: 'Computer Vision Researcher | Machine Learning & Deep Learning Researcher'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AnimatePresence mode="wait">{children}</AnimatePresence>
      </body>
    </html>
  );
}
