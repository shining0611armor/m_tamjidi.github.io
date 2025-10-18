import { motion } from 'framer-motion';
import { Linkedin, GitHub, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-start space-y-4">
      <motion.h1
        className="text-5xl md:text-7xl font-bold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Mehran Tamjidi
      </motion.h1>
      <motion.p
        className="text-xl md:text-2xl max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
      Computer Vision Researcher | Machine Learning & Deep Learning Engineer | Large Vision-Language Models | 3D Computer Vision
      </motion.p>
      <motion.div
        className="flex space-x-6 pt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <a href="https://www.linkedin.com/in/mehran-tamjidi-34293b229/"><Linkedin size={32} /></a>
        <a href="https://github.com/shining0611armor"><GitHub size={32} /></a>
        <a href="mailto:mehrant.0611@gmail.com"><Mail size={32} /></a>
      </motion.div>
    </section>
  );
}
