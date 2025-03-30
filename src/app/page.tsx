'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Explore the Elements
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8"
          >
            Discover the building blocks of our universe
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              href="/periodic-table"
              className="bg-accent hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors duration-300"
            >
              View Periodic Table
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-primary">
            Why Explore With Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-gray-50 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-primary">Interactive Learning</h3>
              <p className="text-gray-600">
                Engage with elements through interactive features and detailed information.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-gray-50 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-primary">Comprehensive Data</h3>
              <p className="text-gray-600">
                Access detailed information about each element's properties and characteristics.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-gray-50 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-primary">Visual Learning</h3>
              <p className="text-gray-600">
                Learn through visual representations and intuitive navigation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
