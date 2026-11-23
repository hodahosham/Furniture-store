"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Sparkles, Truck } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const packagesData = [
  {
    id: 1,
    title: "Nordic Minimalist Set",
    category: "Living Room",
    material: "Solid Oak & Linen",
    price: "$2,450",
    img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Warm Oak Living",
    category: "Living Room",
    material: "Walnut & Bouclé",
    price: "$3,100",
    img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Serene Bedroom Suite",
    category: "Bedroom",
    material: "Organic Cotton & Ash",
    price: "$1,890",
    img: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "Artisan Dining Ensemble",
    category: "Dining",
    material: "Smoked Oak & Ceramic",
    price: "$2,750",
    img: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    title: "Haven Master Retreat",
    category: "Bedroom",
    material: "Teak & Raw Silk",
    price: "$3,400",
    img: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    title: "Studio Gathering Table",
    category: "Dining",
    material: "Travertine & Brass",
    price: "$2,150",
    img: "https://images.unsplash.com/photo-1604578762246-41134e37f9cc?auto=format&fit=crop&w=800&q=80",
  },
];

const categories = ["All Rooms", "Living Room", "Bedroom", "Dining"];

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState("All Rooms");

  const filteredPackages =
    selectedCategory === "All Rooms"
      ? packagesData
      : packagesData.filter((item) => item.category === selectedCategory);

  return (
    <div className="space-y-24">
      <section className="max-w-7xl mx-auto px-6 pt-12 grid md:grid-cols-2 gap-12 items-center">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="space-y-6">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#EFECE6] text-xs font-medium tracking-wide text-[#5C534A]">
            CURATED LIVING PACKAGES
          </span>
          <h1 className="text-4xl md:text-6xl font-serif leading-tight text-[#2C2520]">
            Design your space with timeless comfort.
          </h1>
          <p className="text-[#6E655D] text-lg max-w-md leading-relaxed">
            Explore complete room packages crafted with sustainable materials and effortless elegance.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              href="/register"
              className="px-7 py-3.5 rounded-xl bg-[#2C2520] text-[#FAF8F5] text-sm font-medium hover:bg-[#423830] transition flex items-center gap-2"
            >
              Get Started <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="#packages"
              className="px-7 py-3.5 rounded-xl border border-[#D6CFC5] text-sm font-medium hover:bg-[#EFECE6] transition"
            >
              Explore Packages
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="h-[460px] rounded-2xl bg-[#E8E1D5] overflow-hidden relative shadow-sm"
        >
          <img
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80"
            alt="Living Room Furniture"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-6 bg-[#EFECE6]/70 p-8 rounded-2xl border border-[#E5DFD5]">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-white text-[#2C2520] shadow-xs">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-medium text-base">Material Integrity</h3>
              <p className="text-xs text-[#6E655D] mt-1 leading-relaxed">
                FSC-certified solid hardwoods and natural OEKO-TEX fabrics built to last decades.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-white text-[#2C2520] shadow-xs">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-medium text-base">Curated Harmony</h3>
              <p className="text-xs text-[#6E655D] mt-1 leading-relaxed">
                Every piece is proportioned and color-matched by interior architects.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-white text-[#2C2520] shadow-xs">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-medium text-base">White-Glove Delivery</h3>
              <p className="text-xs text-[#6E655D] mt-1 leading-relaxed">
                Full in-room assembly and packaging removal included with every package.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="packages" className="max-w-7xl mx-auto px-6 space-y-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-3xl font-serif">Package Gallery</h2>
            <p className="text-sm text-[#7A7067] mt-1">
              Select a room collection to explore complete sets
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((chip) => {
              const isSelected = selectedCategory === chip;
              return (
                <button
                  key={chip}
                  onClick={() => setSelectedCategory(chip)}
                  className={`px-4 py-2 rounded-full text-xs font-medium transition cursor-pointer ${
                    isSelected
                      ? "bg-[#2C2520] text-[#FAF8F5]"
                      : "bg-[#EFECE6] text-[#5C534A] hover:bg-[#E2DDD3]"
                  }`}
                >
                  {chip}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {filteredPackages.map((item) => (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              whileHover={{ y: -6 }}
              className="group bg-white rounded-2xl p-4 border border-[#EAE4DC] shadow-xs hover:shadow-md transition-shadow"
            >
              <div className="h-64 rounded-xl overflow-hidden bg-[#F2EFE9] mb-4 relative">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur-xs text-[11px] font-medium text-[#2C2520]">
                  {item.material}
                </span>
              </div>
              <div className="flex justify-between items-center px-1">
                <div>
                  <h3 className="font-medium text-lg">{item.title}</h3>
                  <p className="text-xs text-[#7A7067]">{item.category}</p>
                </div>
                <span className="text-sm font-semibold bg-[#FAF8F5] px-3 py-1.5 rounded-lg border border-[#EAE4DC]">
                  {item.price}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#E8E2D9] bg-[#F4F0EA] mt-20">
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xl font-serif font-semibold text-[#2C2520]">Furniture.</span>
            <p className="text-xs text-[#7A7067] mt-1">
              Thoughtfully curated furniture packages for modern homes.
            </p>
          </div>
          <div className="flex gap-6 text-xs font-medium text-[#5C534A]">
            <Link href="/" className="hover:text-[#2C2520]">Home</Link>
            <Link href="/login" className="hover:text-[#2C2520]">Log In</Link>
            <Link href="/register" className="hover:text-[#2C2520]">Register</Link>
          </div>
          <p className="text-xs text-[#7A7067]">
            © {new Date().getFullYear()} Furniture Store. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}