"use client";

import Navbar from "../components/header_page";

export default function About() {
    return (
        <div className="flex flex-col min-h-screen bg-gray-50 font-sans">
          <Navbar/>

            {/* Main Content */}
            <main className="flex flex-col items-center justify-center flex-1 text-center px-4">
                <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
                    Welcome to <span className="text-blue-600">[Your Company Name]</span>
                </h1>
                <p className="text-lg text-gray-600 mb-8">
                    Delivering excellence in <span className="font-medium text-gray-800">[Your Industry]</span> since [Year].
                </p>
                {/* <img
                    src="/images/banner.jpg"
                    alt="Company Banner"
                    className="w-full max-w-4xl rounded-lg shadow-lg mb-8"
                /> */}

                <div className="p-6 space-y-6">
                    <h1 className="text-4xl font-bold text-gray-800">About Us</h1>
                    <p className="text-lg text-gray-700">
                        [Your Company Name] is a leader in [Industry]. Founded in [Year], we aim to provide top-notch solutions to our clients.
                    </p>

                    <div>
                        <h2 className="text-3xl font-semibold text-gray-800">Our Mission</h2>
                        <p className="text-lg text-gray-700">
                            Our mission is to drive innovation and create value for our clients through cutting-edge solutions.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-3xl font-semibold text-gray-800">Our Vision</h2>
                        <p className="text-lg text-gray-700">
                            We envision a world where businesses thrive through technology and sustainable practices.
                        </p>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-gray-900 text-white text-center py-4">
                <p>&copy; {new Date().getFullYear()} [Your Company Name]. All rights reserved.</p>
            </footer>
        </div>
    );
}