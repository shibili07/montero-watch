"use client";
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import userAvatar from "../../public/images/Avatar.png";
import backArrow from "../../public/images/back.png";
import editIcon from "../../public/images/edit.png";
import Navbar from '../components/navBar/NavBar';
import Footer from '../components/home/Footer/Footer';

function page() {
  const router = useRouter();

  return (
    <>
      <Navbar />

      {/* Page Background */}
      <div className="mt-20 min-h-screen bg-white">
        {/* Centered Container (THIS shrinks the page) */}
        <div className="mx-auto max-w-4xl px-4 sm:px-6 md:px-8 py-8 sm:py-12">

          {/* Back Button */}
          <div className="flex items-center mb-6 sm:mb-8">
            <button
              className="flex items-center"
              onClick={() => router.push('/')}
            >
              <Image src={backArrow} alt="Back" width={36} height={36} />
            </button>
          </div>

          {/* Profile Header */}
          <div className="flex flex-col items-center mb-10 relative">
            <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border border-black">
              <Image
                src={userAvatar}
                alt="User Avatar"
                fill
                className="object-cover"
              />
             
            </div>
             <button
                className="absolute top-22 left-110 bg-white rounded-full p-1 shadow-md hover:shadow-lg transition z-10"
                onClick={() => console.log('Edit profile clicked')}
              >
                <Image src={editIcon} alt="Edit" width={24} height={24} />
              </button>
            <h1 className="font-cormorant text-2xl md:text-3xl text-neutral-900 mt-4">
              Sharon G. Byrd
            </h1>
          </div>

          {/* Personal Information */}
          <div className="mb-12">
            <h2 className="font-cormorant text-xl md:text-2xl text-neutral-900 mb-6">
              Personal Information
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-neutral-500 text-sm mb-1">
                  Name
                </label>
                <input
                  type="text"
                  value="Sharon G. Byrd"
                  readOnly
                  className="w-full bg-neutral-50 border border-neutral-200 px-4 py-3 text-neutral-800 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-neutral-500 text-sm mb-1">
                  Email ID
                </label>
                <input
                  type="email"
                  value="sharon@gmail.com"
                  readOnly
                  className="w-full bg-neutral-50 border border-neutral-200 px-4 py-3 text-neutral-800 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-neutral-500 text-sm mb-1">
                  Mobile Number
                </label>
                <input
                  type="text"
                  value="+71 8956235 899"
                  readOnly
                  className="w-full bg-neutral-50 border border-neutral-200 px-4 py-3 text-neutral-800 focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Activities */}
          <div>
            <h2 className="font-cormorant text-xl md:text-2xl text-neutral-900 mb-6">
              Activities
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-neutral-200">
                    <th className="px-4 py-3 text-left text-neutral-500 text-sm font-medium">
                      Activity
                    </th>
                    <th className="px-4 py-3 text-left text-neutral-500 text-sm font-medium">
                      Quantity
                    </th>
                    <th className="px-4 py-3 text-left text-neutral-500 text-sm font-medium">
                      Date
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="hover:bg-neutral-50 transition">
                    <td className="px-4 py-4 text-neutral-800">
                      Montero English Edition
                    </td>
                    <td className="px-4 py-4 text-neutral-800">
                      1 item
                    </td>
                    <td className="px-4 py-4 text-neutral-800">
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
