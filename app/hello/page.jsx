import React from 'react';
import Image from 'next/image';
import Navbar from '../components/navBar/NavBar';

export default function Page() {
    return (
        <>
            <Navbar />
            <div className="container-fluid w-full mt-10 bg-white py-12 px-6 md:px-12 lg:px-24 overflow-hidden min-h-screen relative">
                <div className="max-w-7xl relative">
                    {/* Heading Section */}
                    <div className="text-left mb-12 md:mb-16 lg:mb-20">
                        <h1 className="font-cormorant text-4xl md:text-5xl lg:text-7xl text-neutral-900 mb-6 font-light leading-tight tracking-tight">
                            Technical Specifications
                        </h1>
                        <p className="font-mona text-sm md:text-base lg:text-lg text-neutral-500 max-w-2xl font-light tracking-[0.05em] leading-relaxed">
                            Seiko NH34 GMT – reliable, accurate, and trusted by global enthusiasts.
                        </p>
                    </div>

                    {/* Integrated Specifications Section */}
                    <div className="relative min-h-[700px] lg:min-h-[950px] flex items-center">

                        {/* Background Watermark */}
                        <div className="absolute inset-0 flex flex-col justify-center items-start lg:items-center pointer-events-none select-none z-0">
                            <h2 className="font-cormorant text-[70px] md:text-[120px] lg:text-[180px] leading-none text-neutral-200 uppercase tracking-tighter opacity-15">
                                Limited Edition
                            </h2>
                            <h2 className="font-cormorant text-[70px] md:text-[120px] lg:text-[180px] leading-none text-neutral-200 uppercase tracking-tighter opacity-15 lg:translate-x-32 italic">
                                One of 150
                            </h2>
                        </div>

                        {/* Unified Container for Image and Callouts */}
                        <div className="w-full relative h-full flex flex-col justify-center">

                            {/* Watch Image - Positioned behind and to the right */}
                            <div className="absolute inset-y-0 -right-10 lg:-right-40 w-full lg:w-[80%] z-0 pointer-events-none">
                                <div className="relative w-full h-full">
                                    <div className="relative w-full h-full -rotate-45 scale-90 md:scale-110 lg:scale-125 translate-y-10 md:translate-y-20">
                                        <Image
                                            src="/images/MainProducts/blueWatch/blueLandScapImg.png"
                                            alt="Montero Technical Watch Detail"
                                            fill
                                            className="object-contain"
                                            priority
                                        />
                                    </div>
                                </div>
                            </div>

                            
                            {/* Callouts - Overlaid on the unified space */}
                            <div className="relative z-10 w-full lg:w-3/5 flex flex-col space-y-8  py-10 md:py-20 pointer-events-none">

                                {/* Stainless Steel */}
                                <div className="flex items-center gap-4 md:gap-6 lg:translate-x-[40%] group transition-all duration-1000 pointer-events-auto">
                                    <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-black shadow-lg shrink-0" />
                                    <span className="monaSense text-[10px] md:text-xs lg:text-sm uppercase tracking-[0.25em] text-neutral-800 whitespace-nowrap font-medium">
                                        Stainless Steel
                                    </span>
                                    <div className="h-px bg-black grow min-w-[80px] md:min-w-[100px] lg:min-w-[200px] group-hover:bg-black transition-colors duration-700" />
                                </div>

                                {/* Polished & Brushed */}
                                <div className="flex items-center gap-4 md:gap-6 lg:translate-x-[20%] group transition-all duration-1000 pointer-events-auto">
                                    <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-black shadow-lg shrink-0" />
                                    <span className="monaSense text-[10px] md:text-xs lg:text-sm uppercase tracking-[0.25em] text-neutral-800 whitespace-nowrap font-medium">
                                        Polished & brushed finishing
                                    </span>
                                    <div className="h-px bg-black grow min-w-[60px] md:min-w-[80px] lg:min-w-[160px] group-hover:bg-black transition-colors duration-700" />
                                </div>

                                {/* Case Thickness */}
                                <div className="flex items-center gap-4 md:gap-6 lg:translate-x-[-10%] group transition-all duration-1000 pointer-events-auto">
                                    <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-black shadow-lg shrink-0" />
                                    <span className="monaSense text-[10px] md:text-xs lg:text-sm uppercase tracking-[0.25em] text-neutral-800 whitespace-nowrap font-medium">
                                        Case Thickness: (add your number)
                                    </span>
                                    <div className="h-px bg-black grow min-w-[120px] md:min-w-[150px] lg:min-w-[300px] group-hover:bg-black transition-colors duration-700" />
                                </div>

                                {/* Diameter */}
                                <div className="flex items-center gap-4 md:gap-6 lg:translate-x-[10%] group transition-all duration-1000 pointer-events-auto">
                                    <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-black shadow-lg shrink-0" />
                                    <span className="monaSense text-[10px] md:text-xs lg:text-sm uppercase tracking-[0.25em] text-neutral-800 whitespace-nowrap font-medium">
                                        Diameter: 40 mm
                                    </span>
                                    <div className="h-px bg-black grow min-w-[80px] md:min-w-[100px] lg:min-w-[200px] group-hover:bg-black transition-colors duration-700" />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}