import React from 'react';
import { FiMail } from 'react-icons/fi';

export default function Subscribe() {
    return (
        <section className="w-full bg-white py-12 px-6 md:px-12 lg:px-24 flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Left Content */}
            <div className="w-full lg:w-1/2 max-w-xl space-y-4 text-center lg:text-left">
                <h2 className="font-cormorant text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-black font-light leading-tight">
                    Subscribe for Exclusive Updates
                </h2>
                <p className="font-mona text-gray-600 text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-md mx-auto lg:mx-0">
                    Join our mailing list to receive early access, limited-edition alerts, and insider updates directly from the Montero team.
                </p>
            </div>

            {/* Right Form */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                <div className="flex flex-col sm:flex-row w-full max-w-xl gap-4">
                    {/* Input Field */}
                    <div className="flex-1 bg-[#E6E6E6] flex items-center px-4 sm:px-6 py-3 sm:py-0 rounded-md">
                        <FiMail className="text-xl text-gray-500 mr-3" />
                        <input
                            type="email"
                            placeholder="Enter your e-mail"
                            className="bg-transparent w-full outline-none text-gray-800 placeholder-gray-500 font-mona text-base sm:text-sm h-full"
                        />
                    </div>
                    {/* Subscribe Button */}
                    <button className="bg-black text-white px-6 sm:px-10 font-mona text-base sm:text-sm font-normal h-12 sm:h-[60px] rounded-md whitespace-nowrap hover:bg-gray-900 transition-colors">
                        Subscribe Now
                    </button>
                </div>
            </div>
        </section>
    );
}
