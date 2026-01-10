"use client";

import React, { useState, useRef, useEffect } from "react";
import Navbar from "@/app/components/navBar/NavBar";
import Footer from "@/app/components/home/Footer/Footer";
import Link from "next/link";
import Image from "next/image";
import { Mail } from "lucide-react";
import { FaArrowLeft } from "react-icons/fa6";
import InnerBlog1 from "@/public/images/Blog/innerBlog1.jpg";
import Blog5 from "@/public/images/Blog/gmt2.png";
import Blog6 from "@/public/images/Blog/gmt3.jpg";
import Blog7 from "@/public/images/Blog/gmt11.jpg";

const page = () => {
  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <ScrollAnimation animationClass="animate-fade-in">
        <section className="bg-white px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-24 pb-8 sm:pb-12">
          <div className="mx-auto max-w-7xl">
            {/* TOP BAR */}
            <div className="mb-8 sm:mb-10 flex items-center gap-4 sm:gap-6">
              {/* BACK BUTTON */}
              <Link
                href="/review"
                className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-gray-300 transition-all duration-300 hover:bg-gray-100 hover:border-gray-400"
              >
                <FaArrowLeft className="text-xs sm:text-sm" />
              </Link>

              {/* DATE */}
              <span className="text-xs sm:text-sm text-gray-400">
                Date&nbsp;&nbsp;20 Dec 2025
              </span>
            </div>

            {/* TITLE */}
            <h1 className="font-cormorant text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-black max-w-5xl">
              Montero GMT – Exclusive Production Update
            </h1>
          </div>
        </section>
      </ScrollAnimation>

      {/* HERO IMAGE */}
      <ScrollAnimation animationClass="animate-slide-in-up">
        <section className="bg-white px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 lg:pb-24">
          <div className="mx-auto max-w-7xl">
            <div className="relative h-[280px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-full overflow-hidden rounded-lg">
              <Image
                src={InnerBlog1} // Suggested hero shot: Montero GMT dial
                alt="Montero GMT Hero"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* BLOG CONTENT */}
      <ScrollAnimation animationClass="animate-fade-in-up">
        <section className="bg-white px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-4xl">
            <div className="space-y-5 sm:space-y-6 text-gray-700 text-sm sm:text-base leading-relaxed">

              <p>
                By Montero Watches
              </p>

              <hr className="my-6 border-gray-300" />

              <p>
                Welcome Back, Montero Community
              </p>

              <p>
                Thank you for your continued trust and patience. We’re excited to share a new exclusive production update for the Montero GMT, following weeks of intensive refinement, testing, and collaboration.
              </p>

              <p>
                Over the past period, our focus has been on enhancing legibility, night visibility, and overall functional precision, while maintaining the distinctive identity that defines Montero.
              </p>

              <p>
                Below are the latest confirmed updates now locked into production.
              </p>

              {/* Enhanced Lume Section */}
              <h2 className="font-cormorant text-2xl sm:text-3xl lg:text-4xl mt-8">
                Enhanced Super-LumiNova – Clearer, Stronger, More Purposeful
              </h2>
              <p>
                We’ve refined the lume application to ensure superior night-time readability while preserving visual balance during the day.
              </p>
              <ul className="list-disc list-inside">
                <li>Earth map: Only the land areas are treated with Super-LumiNova for improved contrast and a cleaner night appearance.</li>
                <li>Blue Edition: Emits a blue lume glow at night.</li>
                <li>Green Edition: Emits a green lume glow at night.</li>
                <li>GMT Red Pointer: Now larger, more legible, and filled with red lume for instant GMT reference.</li>
              </ul>

              {/* GMT Hand Visibility */}
              <h2 className="font-cormorant text-2xl sm:text-3xl lg:text-4xl mt-8">
                Improved GMT Hand Visibility
              </h2>
              <p>
                The red GMT pointer has been intentionally enlarged to improve readability across time zones, especially in low-light conditions.
              </p>
              <ul className="list-disc list-inside">
                <li>Faster GMT recognition</li>
                <li>Balanced dial proportions</li>
                <li>Enhanced night performance</li>
              </ul>

              {/* Buckle Design */}
              <h2 className="font-cormorant text-2xl sm:text-3xl lg:text-4xl mt-8">
                Refined Buckle Design – Minimal & Elegant
              </h2>
              <ul className="list-disc list-inside">
                <li>The buckle will feature the Montero logo only</li>
                <li>All additional markings have been removed for a refined finish</li>
              </ul>

              {/* GMT Crown */}
              <h2 className="font-cormorant text-2xl sm:text-3xl lg:text-4xl mt-8">
                GMT Crown Optimization
              </h2>
              <ul className="list-disc list-inside">
                <li>The GMT crown will be partially or fully hidden, depending on final ergonomic validation</li>
                <li>This improves wearability without affecting functionality</li>
              </ul>

              {/* Caseback */}
              <h2 className="font-cormorant text-2xl sm:text-3xl lg:text-4xl mt-8">
                Screw-Down Caseback – Finalized
              </h2>
              <ul className="list-disc list-inside">
                <li>Improved durability</li>
                <li>Secure construction</li>
                <li>Long-term reliability</li>
                <li>Limited Edition serial numbering</li>
                <li>Clear English & Arabic lettering</li>
                <li>Optimized font size and engraving depth for clarity</li>
              </ul>

              {/* GMT Function */}
              <h2 className="font-cormorant text-2xl sm:text-3xl lg:text-4xl mt-8">
                GMT Function – Fully Verified
              </h2>
              <p>
                We confirm that the GMT mechanism is working accurately and independently, ensuring correct time zone tracking without interference.
              </p>
              <p>
                This was a critical functional checkpoint and is now fully validated.
              </p>

              <p className="mt-6">
                We’ll continue sharing transparent updates as we move closer to delivery.
              </p>

              <p>
                Thank you for being part of the Montero journey 
              </p>

              <p className="mt-6 font-cormorant text-lg">
                Montero Watches<br/>
                Designed for explorers. Built for precision.
              </p>

            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* POPULAR POST SECTION */}
      <ScrollAnimation animationClass="animate-fade-in-up">
        <section className="bg-white px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 sm:mb-12 flex items-center justify-between">
              <h2 className="font-cormorant text-2xl sm:text-3xl lg:text-4xl">
                Popular Post
              </h2>

              <Link href="/review">
                <button className="bg-black text-white px-5 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm rounded-md transition-all duration-300 hover:bg-gray-800 active:scale-95">
                  View All
                </button>
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:gap-10 md:grid-cols-2 lg:grid-cols-3">
              <ScrollAnimation animationClass="animate-slide-in-up" delay={0}>
                <BlogCard
                  img={Blog5}
                  category="Music"
                  date="9 March 2023"
                  title="Who is the best singer on chart? Know him?"
                  desc="Chart by Billboard ranks the all-time greatest artists based on their performance on the weekly Billboard Hot 100."
                />
              </ScrollAnimation>

              <ScrollAnimation animationClass="animate-slide-in-up" delay={100}>
                <BlogCard
                  img={Blog6}
                  category="Development"
                  date="8 March 2023"
                  title="How to start export import business from home?"
                  desc="Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide."
                />
              </ScrollAnimation>

              <ScrollAnimation animationClass="animate-slide-in-up" delay={200}>
                <BlogCard
                  img={Blog7}
                  category="Food"
                  date="7 March 2023"
                  title="Make some drinks with chocolates and milk"
                  desc="Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment."
                />
              </ScrollAnimation>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* SUBSCRIBE SECTION */}
      <ScrollAnimation animationClass="animate-fade-in-up">
        <section className="bg-white px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 items-center gap-8 lg:gap-12 md:grid-cols-2">
              {/* LEFT TEXT */}
              <ScrollAnimation animationClass="animate-slide-in-left">
                <div>
                  <h2 className="font-cormorant text-2xl sm:text-3xl lg:text-4xl xl:text-5xl transition-colors duration-300 hover:text-gray-700">
                    Subscribe for Exclusive Updates
                  </h2>

                  <p className="mt-3 sm:mt-4 lg:mt-6 max-w-md text-xs sm:text-sm lg:text-base text-gray-600 transition-opacity duration-300 hover:opacity-80 leading-relaxed">
                    Join our mailing list to receive early access,
                    limited-edition alerts, and insider updates directly from
                    the Montero team.
                  </p>
                </div>
              </ScrollAnimation>

              {/* RIGHT FORM */}
              <ScrollAnimation animationClass="animate-slide-in-right">
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <div className="flex items-center bg-gray-100 px-4 py-3 sm:py-4 w-full rounded-md transition-all duration-300 hover:bg-gray-200">
                    <Mail className="mr-4" />
                    <input
                      type="email"
                      placeholder="Enter your e-mail"
                      className="bg-transparent outline-none w-full text-xs sm:text-sm placeholder:text-gray-400"
                    />
                  </div>

                  <button className="bg-black text-white px-6 sm:px-8 py-3 sm:py-4 text-xs sm:text-sm font-medium whitespace-nowrap rounded-md transition-all duration-300 hover:bg-gray-800 active:scale-95">
                    Subscribe Now
                  </button>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      <Footer />
    </>
  );
};

export default page;

/* ================= SCROLL ANIMATION COMPONENT ================= */
function ScrollAnimation({ children, animationClass, delay = 0 }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible ? animationClass : "opacity-0"
      }`}
    >
      {children}
    </div>
  );
}

/* ================= BLOG CARD COMPONENT ================= */
function BlogCard({ img, category, date, title, desc }) {
  return (
    <div className="group cursor-pointer">
      <div className="relative h-[220px] sm:h-[240px] lg:h-[260px] w-full overflow-hidden rounded-lg">
        <Image
          src={img}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
      </div>

      <div className="mt-4 sm:mt-5 flex gap-2 sm:gap-3 text-xs sm:text-sm text-gray-500">
        <span className="transition-colors duration-300 hover:text-gray-700">
          {category}
        </span>
        <span>•</span>
        <span>{date}</span>
      </div>

      <h3 className="mt-2 sm:mt-3 font-mona text-base sm:text-lg lg:text-xl leading-snug transition-colors duration-300 group-hover:text-gray-700">
        {title}
      </h3>

      <p className="mt-2 sm:mt-3 text-gray-600 text-xs sm:text-sm leading-relaxed line-clamp-3">
        {desc}
      </p>

      <a
        href="#"
        className="mt-3 sm:mt-4 inline-block text-xs sm:text-sm text-blue-600 transition-all duration-300 hover:text-blue-700 hover:underline hover:translate-x-1"
      >
        Read More...
      </a>
    </div>
  );
}
