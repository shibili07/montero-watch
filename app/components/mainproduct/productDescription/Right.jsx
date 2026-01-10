import Link from "next/link";
import React from "react";

export default function Right() {
  return (
    <div
      className="
        w-full h-full
        flex flex-col justify-center
        px-6 sm:px-8 lg:px-12
        space-y-6 sm:space-y-7
        bg-white
      "
    >
      {/* HEADING */}
      <h2
        className="
          font-cormorant
          text-2xl sm:text-3xl md:text-4xl lg:text-5xl
          text-neutral-900
          leading-[1.15]
          tracking-tight
          max-w-lg
        "
      >
        Time is the vehicle that carries everything into nothing
      </h2>

      {/* DESCRIPTION */}
      <p
        className="
          font-body
          font-extralight
          text-neutral-600
          text-sm sm:text-base
          leading-[1.6]
          max-w-md
        "
      >
        Montero is available in two collectible editions, each designed with its
        own identity while sharing the same world-time DNA and craftsmanship.
      </p>

      {/* CTA */}
      <div className="pt-2">
        <Link href="/product/english">
          <button
            className="
              rounded-full
              border border-neutral-900
              px-8 py-3
              text-[11px] sm:text-xs
              font-medium
              uppercase
              tracking-widest
              transition-all duration-300
              hover:bg-neutral-900 hover:text-white
            "
          >
            Pre-Order Now
          </button>
        </Link>
      </div>
    </div>
  );
}
