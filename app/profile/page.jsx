"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import userAvatar from "../../public/images/Avatar.png";
import backArrow from "../../public/images/back.png";
import editIcon from "../../public/images/edit.png";
import Navbar from "../components/navBar/NavBar";
import Footer from "../components/home/Footer/Footer";

function page() {
  const router = useRouter();

  return (
    <>
      <Navbar />

      {/* Page Background */}
      <div className="mt-20 min-h-screen bg-white">
        {/* Centered Container */}
        <div className="mx-auto max-w-4xl px-4 sm:px-6 md:px-8 py-8 sm:py-12">
          {/* Back Button */}
          <div className="flex items-center mb-6 sm:mb-8">
            <button
              className="flex items-center hover:opacity-70 transition"
              onClick={() => router.push("/")}
            >
              <Image src={backArrow} alt="Back" width={36} height={36} />
            </button>
          </div>

          {/* Profile Header */}
          <div className="flex flex-col items-center mb-12 relative">
            <div className="relative">
              <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border border-black">
                <Image
                  src={userAvatar}
                  alt="User Avatar"
                  fill
                  className="object-cover"
                />
              </div>
              <button
                className="absolute bottom-0 right-0 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition border border-neutral-200"
                onClick={() => console.log("Edit profile clicked")}
              >
                <Image src={editIcon} alt="Edit" width={20} height={20} />
              </button>
            </div>
            <h1 className="font-cormorant text-2xl md:text-3xl text-neutral-900 mt-6">
              Sharon G. Byrd
            </h1>
          </div>

          {/* Personal Information */}
          <div className="mb-12">
            <h2 className="font-cormorant text-xl md:text-2xl text-neutral-900 mb-6">
              Personal Information
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
              {/* NAME */}
              <div>
                <label className="block text-neutral-500 text-sm mb-2">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full bg-neutral-50 border border-neutral-200 rounded px-4 py-3 text-neutral-800 placeholder-neutral-400 focus:outline-none focus:border-neutral-400 transition"
                />
              </div>

              {/* EMAIL */}
              <div>
                <label className="block text-neutral-500 text-sm mb-2">
                  Email ID
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-neutral-50 border border-neutral-200 rounded px-4 py-3 text-neutral-800 placeholder-neutral-400 focus:outline-none focus:border-neutral-400 transition"
                />
              </div>

              {/* MOBILE */}
              <div>
                <label className="block text-neutral-500 text-sm mb-2">
                  Mobile Number
                </label>
                <input
                  type="text"
                  placeholder="Enter your phone number"
                  className="w-full bg-neutral-50 border border-neutral-200 rounded px-4 py-3 text-neutral-800 placeholder-neutral-400 focus:outline-none focus:border-neutral-400 transition"
                />
              </div>
            </div>
          </div>

          {/* Activities */}
          <div className="mb-12">
            <h2 className="font-cormorant text-xl md:text-2xl text-neutral-900 mb-6">
              Activities
            </h2>

            <div className="overflow-x-auto border border-neutral-200 rounded">
              <table className="w-full border-collapse">
                <thead className="bg-neutral-50">
                  <tr className="border-b border-neutral-200">
                    <th className="px-6 py-4 text-left text-neutral-500 text-sm font-medium">
                      Activity
                    </th>
                    <th className="px-6 py-4 text-left text-neutral-500 text-sm font-medium">
                      Quantity
                    </th>
                    <th className="px-6 py-4 text-left text-neutral-500 text-sm font-medium">
                      Date
                    </th>
                  </tr>
                </thead>

                <tbody className="bg-white">
                  <tr className="hover:bg-neutral-50 transition border-b border-neutral-200 last:border-0">
                    <td className="px-6 py-4 text-neutral-800">
                      Montero English Edition
                    </td>
                    <td className="px-6 py-4 text-neutral-800">1 item</td>
                    <td className="px-6 py-4 text-neutral-800">
                      20 / Jun / 2025
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default page;
