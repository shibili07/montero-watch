"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Mail } from "lucide-react";
import Blue1 from "@/public/images/BlueWatch/productBlue1.png";
import Blue2 from "@/public/images/BlueWatch/productBlue2.png";
import Green2 from "@/public/images/GreenWatch/productGreen2.png";
import Blue3 from "@/public/images/BlueWatch/productBlue3.png";
import Blue4 from "@/public/images/BlueWatch/productBlue4.jpg";
import Green6 from "@/public/images/GreenWatch/productGreen6.png";
import newcurrency from "../../../public/images/dbff981dfc9f1a8358f03cc8ee71583a164e6ffc.png";

import Navbar from "@/app/components/navBar/NavBar";
import Footer from "@/app/components/home/Footer/Footer";

const Page = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [open, setOpen] = useState(null);

  const faqs = [
    {
      question: "Do the watches come with a warranty?",
      answer: "Yes, all Montero watches come with a comprehensive 2-year international warranty covering manufacturing defects."
    },
    {
      question: "Are the watches scratch-resistant?",
      answer: "Yes, all Montero watches feature sapphire crystal glass which is highly scratch-resistant and durable."
    },
    {
      question: "What materials are used to make your watches?",
      answer: "We use 316L stainless steel cases, sapphire crystal, genuine leather straps, and Seiko NH34 GMT movements."
    },
    {
      question: "How can I place an order?",
      answer: "You can place an order directly through our website, or contact our customer service for personalized assistance."
    }
  ];

  return (
    <>
      <Navbar />

      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-[#004770] via-[#0C2636] to-[#000106]">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-48 h-48 bg-emerald-400 rounded-full blur-3xl md:top-20 md:right-20 md:w-96 md:h-96"></div>
          <div className="absolute bottom-10 left-10 w-48 h-48 bg-teal-600 rounded-full blur-3xl md:bottom-20 md:left-20 md:w-96 md:h-96"></div>
        </div>

        {/* Content Container */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center py-12 lg:py-0">
          <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-8 lg:gap-12">
            {/* Left Content */}
            <div className="max-w-xl text-center lg:text-left z-10 order-2 lg:order-1">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-cormorant text-white leading-tight mb-4 sm:mb-6">
                A World Time Watch Inspired by Global Beaches
              </h1>

              <p className="text-sm md:text-base lg:text-lg text-white/90 mb-6 sm:mb-8 leading-relaxed font-light">
                Crafted for explorers, dreamers, and lovers of the world&apos;s most
                iconic beaches
              </p>
            </div>

            {/* Right Watch Image */}
            <div className="relative w-full max-w-[280px] sm:max-w-[380px] md:max-w-[480px] lg:max-w-[600px] xl:max-w-[700px] aspect-square order-1 lg:order-2 mx-auto">
              <div className="absolute inset-0 bg-gradient-radial from-emerald-400/20 to-transparent rounded-full blur-2xl"></div>

              <div className="relative w-full h-full">
                <Image
                  src={Blue1}
                  alt="Green World Time Watch"
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                  sizes="(max-width: 640px) 280px, (max-width: 768px) 380px, (max-width: 1024px) 480px, 600px, 700px"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/20 to-transparent"></div>
      </section>

      {/* ================= MONTERO EDITION SECTION ================= */}
      <section className="relative w-full bg-gray-50 py-4 sm:py-8 lg:py-12 xl:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center">
            {/* Title - Reduced margin bottom */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-cormorant text-gray-900 mb-2 sm:mb-4 lg:mb-6">
              Montero Arabic Edition
            </h2>

            {/* Watch Image - Reduced margin top and bottom */}
            <div className="relative mb-2 sm:mb-4 lg:mb-6">
              <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl 2xl:max-w-3xl mx-auto h-48 sm:h-56 md:h-64 lg:h-[400px] xl:h-[500px] 2xl:h-[600px]">
                <Image
                  src={Blue2}
                  alt="Montero Arabic Edition Watch"
                  fill
                  priority
                  className="object-contain"
                  sizes="(max-width: 640px) 320px, (max-width: 768px) 384px, (max-width: 1024px) 448px, 600px, 768px, 1024px"
                />
              </div>
            </div>

            {/* Features Grid - Adjusted spacing */}
            <div className="max-w-6xl mx-auto mb-4 sm:mb-6 lg:mb-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2 sm:gap-3 lg:gap-4">
                {[
                  "Sapphire Crystal",
                  "Seiko NH34 GMT Movement",
                  "5 ATM Water Resistance",
                  "Stainless Steel Case",
                  "World-Time Beach Concept",
                ].map((item) => (
                  <div key={item} className="flex items-center justify-center gap-2 lg:gap-2">
                    <span className="w-2 h-2 lg:w-2 lg:h-2 bg-[#2596be] rounded-full flex-shrink-0"></span>
                    <p className="text-gray-700 text-xs sm:text-sm lg:text-base xl:text-lg text-center">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Features - Adjusted spacing */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 lg:gap-3 mb-4 sm:mb-6 lg:mb-8 px-4">
              <div className="flex items-center gap-2 lg:gap-2">
                <span className="w-2 h-2 lg:w-2 lg:h-2 bg-[#2596be] rounded-full"></span>
                <p className="text-gray-700 text-xs sm:text-sm lg:text-base">
                  Sapphire crystal for durability
                </p>
              </div>

              <div className="hidden sm:block w-2 h-2 lg:w-2 lg:h-2 bg-[#2596be] rounded-full"></div>

              <p className="text-gray-700 text-xs sm:text-sm lg:text-base text-center sm:text-left">
                GMT function for global synchrony
              </p>
            </div>

            {/* Order Button - Adjusted spacing */}
            <div className="mb-4 sm:mb-6 lg:mb-8">
              <Link href="/order">
                <button className="bg-black text-white px-6 sm:px-8 lg:px-12 xl:px-16 py-2 sm:py-3 lg:py-3 rounded-full font-medium hover:bg-gray-800 transition-colors inline-flex items-center gap-2 lg:gap-3 justify-center">
                  <div className="relative w-4 h-4 sm:w-4 sm:h-4 lg:w-5 lg:h-5">
                    <Image
                      src={newcurrency}
                      alt="Currency Symbol"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="text-sm sm:text-base lg:text-lg xl:text-xl">860 Order Now</span>
                </button>
              </Link>
            </div>

            {/* Limited Edition Badge - Adjusted spacing */}
            <div className="inline-flex items-center gap-2">
              <span className="px-4 py-1 lg:px-5 lg:py-1.5 text-xs lg:text-sm tracking-widest font-semibold text-red-700 border border-red-600 uppercase">
                Limited Edition
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TECHNICAL SPECIFICATIONS SECTION ================= */}
      <section className="bg-white py-12 sm:py-16 lg:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative">
          {/* Title - Always visible */}
          <div className="max-w-md mb-8 sm:mb-0">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-cormorant text-gray-900 mb-3">
              Technical Specifications
            </h2>
            <p className="text-sm text-gray-600">
              Seiko NH34 GMT – reliable, accurate, and trusted by global
              enthusiasts.
            </p>
          </div>

          {/* Mobile/Tablet View with rotated image */}
          <div className="lg:hidden relative min-h-[600px] sm:min-h-[700px] mt-12">
            {/* Specifications positioned around the rotated image */}
            
            {/* Top Center Specification */}
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
              <div className="flex items-center justify-center gap-2 sm:gap-3">
                <span className="w-2 h-2 sm:w-3 sm:h-3 bg-black rounded-full"></span>
                <p className="text-xs sm:text-sm text-gray-700 text-center">
                  Stainless Steel
                </p>
              </div>
            </div>

            {/* Right Middle Specification */}
            <div className="absolute top-1/3 right-4 sm:right-8 transform -translate-y-1/2">
              <div className="flex items-center justify-end gap-2 sm:gap-3">
                <p className="text-xs sm:text-sm text-gray-700 text-right">
                  Polished & brushed finishing
                </p>
                <span className="w-2 h-2 sm:w-3 sm:h-3 bg-black rounded-full"></span>
              </div>
            </div>

            {/* Left Middle Specification */}
            <div className="absolute top-2/3 left-4 sm:left-8 transform -translate-y-1/2">
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="w-2 h-2 sm:w-3 sm:h-3 bg-black rounded-full"></span>
                <p className="text-xs sm:text-sm text-gray-700">
                  Case Thickness: 13mm
                </p>
              </div>
            </div>

            {/* Bottom Center Specification */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
              <div className="flex items-center justify-center gap-2 sm:gap-3">
                <span className="w-2 h-2 sm:w-3 sm:h-3 bg-black rounded-full"></span>
                <p className="text-xs sm:text-sm text-gray-700 text-center">
                  Diameter: 41 mm
                </p>
              </div>
            </div>

            {/* Rotated Watch Image - Mobile */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[400px] h-[400px] sm:h-[500px]">
              <Image
                src={Blue3}
                alt="Montero Watch"
                fill
                className="object-contain -rotate-[20deg] sm:-rotate-[30deg]"
                sizes="(max-width: 640px) 300px, 400px"
              />
            </div>

            {/* Limited Edition Text - Mobile */}
            <div className="absolute bottom-4 left-4 pointer-events-none">
              <p className="text-2xl sm:text-3xl font-serif text-gray-200 leading-none">
                LIMITED EDITION
              </p>
              <p className="text-xl sm:text-2xl font-serif text-gray-200">
                ONE OF 150
              </p>
            </div>
          </div>

          {/* Desktop View - Original positioned layout */}
          <div className="hidden lg:block min-h-[700px]">
            {/* RIGHT TOP SPEC */}
            <div className="absolute right-[120px] top-36">
              <div className="flex items-center gap-4">
                <span className="w-2 h-2 bg-black rounded-full" />
                <p className="text-sm text-gray-700 w-[160px]">
                  Stainless Steel
                </p>
                <span className="w-56 h-px bg-gray-300" />
              </div>
            </div>

            {/* LEFT MIDDLE SPECS */}
            <div className="absolute left-[480px] top-72 space-y-16">
              <div className="flex items-center gap-4">
                <span className="w-2 h-2 bg-black rounded-full" />
                <p className="text-sm text-gray-700 w-[220px]">
                  Polished & brushed finishing
                </p>
                <span className="w-64 h-px bg-gray-300" />
              </div>

              <div className="flex items-center gap-4">
                <span className="w-2 h-2 bg-black rounded-full" />
                <p className="text-sm text-gray-700 w-[240px]">
                  Case Thickness: 13.mm
                </p>
                <span className="w-72 h-px bg-gray-300" />
              </div>
            </div>

            {/* FADED TEXT */}
            <div className="absolute left-12 bottom-40 pointer-events-none">
              <p className="text-6xl font-serif text-gray-200 leading-none">
                LIMITED EDITION
              </p>
              <p className="text-5xl font-serif text-gray-200">ONE OF 150</p>
            </div>

            {/* BOTTOM LEFT SPEC */}
            <div className="absolute left-[620px] bottom-10">
              <div className="flex items-center gap-4">
                <span className="w-2 h-2 bg-black rounded-full" />
                <p className="text-sm text-gray-700 w-[140px]">
                  Diameter: 41 mm
                </p>
                <span className="w-64 h-px bg-gray-300" />
              </div>
            </div>

            {/* WATCH IMAGE - Desktop */}
            <div className="absolute left-[800px] top-[-250px] w-[900px] h-[1250px]">
              <Image
                src={Blue3}
                alt="Montero Watch"
                fill
                priority
                className="object-contain -rotate-[70deg] scale-110 transition-transform duration-700 ease-out"
                sizes="900px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= HOW TO SET SECTION ================= */}
      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-cormorant text-gray-900 mb-8 sm:mb-12">
            How to Set Your Montero Watch
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* LEFT CONTENT */}
            <div className="space-y-6 sm:space-y-8">
              {/* Section 1 */}
              <div>
                <h3 className="text-lg sm:text-xl font-medium text-gray-900 mb-3 sm:mb-4">
                  Section 1 – Setting Local Time
                </h3>
                <ul className="space-y-2 sm:space-y-3 text-gray-700 text-sm sm:text-base">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 mt-2 bg-black rounded-full flex-shrink-0"></span>
                    <span>Pull the crown to Position 2</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 mt-2 bg-black rounded-full flex-shrink-0"></span>
                    <span>Rotate to adjust the main hour and minute hands</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 mt-2 bg-black rounded-full flex-shrink-0"></span>
                    <span>Push the crown back to lock</span>
                  </li>
                </ul>
              </div>

              {/* Section 2 */}
              <div>
                <h3 className="text-lg sm:text-xl font-medium text-gray-900 mb-3 sm:mb-4">
                  Section 2 – Setting GMT Hand
                </h3>
                <ul className="space-y-2 sm:space-y-3 text-gray-700 text-sm sm:text-base">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 mt-2 bg-black rounded-full flex-shrink-0"></span>
                    <span>Pull the crown to Position 1</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 mt-2 bg-black rounded-full flex-shrink-0"></span>
                    <span>
                      Rotate clockwise to move the GMT hand in 1-hour increments
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 mt-2 bg-black rounded-full flex-shrink-0"></span>
                    <span>Set it to a second time zone of your choice</span>
                  </li>
                </ul>
              </div>

              {/* Section 3 */}
              <div>
                <h3 className="text-lg sm:text-xl font-medium text-gray-900 mb-3 sm:mb-4">
                  Section 3 – Using the Beach Time System
                </h3>
                <ul className="space-y-2 sm:space-y-3 text-gray-700 text-sm sm:text-base">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 mt-2 bg-black rounded-full flex-shrink-0"></span>
                    <span>
                      Each beach on the dial corresponds to its GMT offset
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 mt-2 bg-black rounded-full flex-shrink-0"></span>
                    <span>
                      Choose the beach you want, match its time zone with your
                      GMT hand, and enjoy instant global reference.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* RIGHT VIDEO */}
            <div className="relative w-full h-64 sm:h-80 lg:h-96">
              <video
                src="/images/Gallery/galleryV.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black/10 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SPLIT IMAGE/TEXT SECTION ================= */}
      <section className="w-full flex flex-col lg:flex-row">
        {/* LEFT — Image with Gradient Fade */}
        <div className="relative w-full lg:w-1/2 h-64 sm:h-80 md:h-96 lg:h-[531px]">
          <Image
            src={Blue4}
            alt="Blueprint"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#1A1E28] via-transparent to-transparent"></div>
        </div>

        {/* RIGHT — Content */}
        <div className="w-full lg:w-1/2 bg-[#1A1E28] flex items-center px-4 sm:px-6 lg:px-12 xl:px-20 py-12 lg:py-0">
          <div className="max-w-xl mx-auto lg:mx-0">
            <h2 className="font-cormorant text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-white leading-tight mb-4 sm:mb-6">
              A World Time Watch Inspired by Global Beaches
            </h2>

            <p className="font-light text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed">
              Crafted for explorers, dreamers, and lovers of the world&apos;s most
              iconic beaches
            </p>
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS SECTION ================= */}
      <section className="bg-white py-12 sm:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* LEFT CONTENT */}
            <div>
              <p className="text-sm text-gray-500 mb-2">Client Feedback</p>

              <h2 className="text-2xl sm:text-3xl font-cormorant text-gray-900 mb-4 sm:mb-6 leading-snug">
                What They Say After Using Our Product
              </h2>

              <p className="text-gray-600 text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed">
                Many of our members have started their earlier careers with us.
              </p>

              {/* Arrows */}
              <div className="flex items-center gap-3">
                <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition">
                  ←
                </button>
                <button className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition">
                  →
                </button>
              </div>
            </div>

            {/* TESTIMONIAL CARDS */}
            <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {[1, 2, 3].map((_, i) => (
                <div key={i} className="pb-6 sm:pb-8 border-b lg:border-0">
                  {/* Stars */}
                  <div className="flex gap-1 mb-3 sm:mb-4">
                    {[...Array(5)].map((_, j) => (
                      <span key={j} className="text-yellow-500 text-sm">
                        ★
                      </span>
                    ))}
                  </div>

                  {/* Text */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 sm:mb-6 line-clamp-4">
                    I recently purchased the Montero watch, and I&apos;m extremely
                    satisfied. The design looks premium, the build quality is
                    solid, and it feels very comfortable on the wrist. Perfect
                    for both formal and casual wear.
                  </p>

                  {/* User */}
                  <div className="flex items-center gap-3">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                      <Image
                        src={Green6}
                        alt="Mirana Marci"
                        fill
                        className="object-cover"
                        sizes="40px"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        Mirana Marci
                      </p>
                      <p className="text-xs text-gray-500">Watch Enthusiast</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= FAQ + SUBSCRIBE ================= */}
      <section className="bg-white py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* FAQ ROW */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* LEFT TEXT */}
            <div>
              <h2 className="font-cormorant text-2xl sm:text-3xl lg:text-4xl text-gray-900 mb-4 sm:mb-6">
                Frequently Asked Questions
              </h2>

              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
                Each beach was chosen for its cultural significance, beauty,
                and global reputation — together forming the emotional core
                of Montero.
              </p>
            </div>

            {/* RIGHT FAQ LIST */}
            <div className="space-y-4 sm:space-y-6">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="border-b border-gray-200 pb-4 sm:pb-6"
                >
                  <button
                    onClick={() => setOpen(open === i ? null : i)}
                    className="flex w-full items-center justify-between text-left"
                  >
                    <span className="text-sm sm:text-base font-medium text-gray-900 pr-4">
                      {faq.question}
                    </span>
                    <span className="text-xl text-gray-500 flex-shrink-0 transition-transform duration-300">
                      {open === i ? "−" : "+"}
                    </span>
                  </button>

                  {open === i && (
                    <p className="mt-3 sm:mt-4 text-sm text-gray-600">
                      {faq.answer}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* SUBSCRIBE ROW */}
          <div className="mt-12 sm:mt-16 lg:mt-24 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* LEFT TEXT */}
            <div>
              <h2 className="font-cormorant text-2xl sm:text-3xl lg:text-4xl text-gray-900 mb-4 sm:mb-6">
                Subscribe for Exclusive Updates
              </h2>

              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Join our mailing list to receive early access,
                limited-edition alerts, and insider updates directly from
                the Montero team.
              </p>
            </div>

            {/* RIGHT FORM */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center bg-gray-100 px-4 py-3 rounded-lg flex-grow">
                <Mail className="w-5 h-5 text-gray-400 mr-3" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-transparent outline-none w-full text-sm"
                />
              </div>

              <button className="bg-black text-white px-2 py-3 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors whitespace-nowrap">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Page;