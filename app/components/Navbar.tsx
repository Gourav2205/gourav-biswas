'use client'

import { useState } from 'react'
import Link from 'next/link'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-80 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" className="text-2xl font-bold text-purple-400">
                            Gourav Biswas
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <Link href="#about" className="text-gray-300 hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium">About</Link>
                            <Link href="#projects" className="text-gray-300 hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium">Projects</Link>
                            <Link href="#testimonials" className="text-gray-300 hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium">Testimonials</Link>
                            <Link href="#work-with-me" className="text-gray-300 hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link href="#about" className="text-gray-300 hover:text-purple-400 block px-3 py-2 rounded-md text-base font-medium">About</Link>
                        <Link href="#projects" className="text-gray-300 hover:text-purple-400 block px-3 py-2 rounded-md text-base font-medium">Projects</Link>
                        <Link href="#testimonials" className="text-gray-300 hover:text-purple-400 block px-3 py-2 rounded-md text-base font-medium">Testimonials</Link>
                        <Link href="#work-with-me" className="text-gray-300 hover:text-purple-400 block px-3 py-2 rounded-md text-base font-medium">Contact</Link>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar

