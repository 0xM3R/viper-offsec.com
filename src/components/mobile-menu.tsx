"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  links: { href: string; label: string }[];
}

export function MobileMenu({ open, onClose, links }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-40 bg-viper-dark/98 backdrop-blur-xl md:hidden"
        >
          <div className="flex flex-col items-center justify-center min-h-screen gap-8 px-6">
            {links.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 + 0.1 }}
              >
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="text-2xl font-medium text-foreground hover:text-viper-green transition-colors"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: links.length * 0.05 + 0.1 }}
            >
              <Link
                href="/contact"
                onClick={onClose}
                className="inline-flex items-center gap-2 rounded-lg bg-viper-green px-6 py-3 text-lg font-medium text-viper-dark hover:bg-viper-green-dim transition-colors"
              >
                Request Audit
                <ArrowRight className="h-5 w-5" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
