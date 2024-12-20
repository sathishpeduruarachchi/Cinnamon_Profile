"use client";

import Footer from "../components/footer_page";
// import Navbar from "../components/nav_bar";

// export default function Services() {
//   return (
//     <div className="flex flex-col min-h-screen bg-gray-50 font-sans">
//       {/* Navbar Component */}
//       <Navbar />

//       {/* Page Header */}
//       <div className="text-center py-12 bg-gradient-to-r from-teal-500 to-blue-500 text-white">
//         <h1 className="text-4xl font-bold">Our Services</h1>
//         <p className="text-lg mt-2">Discover what we offer to help your business succeed</p>
//       </div>

//       {/* Services Grid */}
//       <div className="flex-1 px-6 py-12">
//         <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//           {/* Service 1 */}
//           <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
//             <h2 className="text-2xl font-semibold text-teal-600">Service 1</h2>
//             <p className="text-gray-600 mt-2">
//               Detailed description of Service 1. Highlight key benefits and features.
//             </p>
//           </div>

//           {/* Service 2 */}
//           <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
//             <h2 className="text-2xl font-semibold text-teal-600">Service 2</h2>
//             <p className="text-gray-600 mt-2">
//               Detailed description of Service 2. Highlight key benefits and features.
//             </p>
//           </div>

//           {/* Service 3 */}
//           <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
//             <h2 className="text-2xl font-semibold text-teal-600">Service 3</h2>
//             <p className="text-gray-600 mt-2">
//               Detailed description of Service 3. Highlight key benefits and features.
//             </p>
//           </div>

//           {/* Service 4 */}
//           <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
//             <h2 className="text-2xl font-semibold text-teal-600">Service 4</h2>
//             <p className="text-gray-600 mt-2">
//               Detailed description of Service 4. Highlight key benefits and features.
//             </p>
//           </div>

//           {/* Service 5 */}
//           <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
//             <h2 className="text-2xl font-semibold text-teal-600">Service 5</h2>
//             <p className="text-gray-600 mt-2">
//               Detailed description of Service 5. Highlight key benefits and features.
//             </p>
//           </div>

//           {/* Service 6 */}
//           <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
//             <h2 className="text-2xl font-semibold text-teal-600">Service 6</h2>
//             <p className="text-gray-600 mt-2">
//               Detailed description of Service 6. Highlight key benefits and features.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Footer */}
//       <footer className="text-center py-6 bg-gray-800 text-white">
//         <p>&copy; {new Date().getFullYear()} [Your Company Name]. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// }

import Navbar from "../components/header_page";

export default function Services() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 font-sans">
      {/* Navbar Component */}
      <Navbar />

      {/* Page Header */}
      <div className="text-center py-12 bg-gradient-to-r from-teal-500 to-blue-500 text-white">
        <h1 className="text-4xl font-bold">Our Services</h1>
        <p className="text-lg mt-2">Discover what we offer to help your business succeed</p>
      </div>

      {/* Services Grid */}
      <div className="flex-1 px-6 py-12">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Service 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-teal-600">Service 1</h2>
            <p className="text-gray-600 mt-2">
              Detailed description of Service 1. Highlight key benefits and features.
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-teal-600">Service 2</h2>
            <p className="text-gray-600 mt-2">
              Detailed description of Service 2. Highlight key benefits and features.
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-teal-600">Service 3</h2>
            <p className="text-gray-600 mt-2">
              Detailed description of Service 3. Highlight key benefits and features.
            </p>
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  );
}
