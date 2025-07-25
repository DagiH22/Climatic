import React from 'react';
import { motion } from 'framer-motion';
import '../styles/dataLoading.css'

export default function DataLoadingScreen() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white dataLoadingScreen">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1.2, ease: 'linear' }}
        className="w-16 h-16 border-4 border-dashed rounded-full border-blue-400"
      />
      <motion.p
        className="mt-6 text-xl font-semibold"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        Loading...
      </motion.p>
    </div>
  );
}
