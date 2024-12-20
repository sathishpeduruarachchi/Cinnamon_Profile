import { Link } from "react-router-dom";
import Navbar from "./components/header_page";
import Footer from "./components/footer_page";

export default function Home() {
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
                  className="w-full max-w-4xl rounded-lg shadow-lg"
              /> */}
          </main>

        <Footer/>
      </div>
  );
}
// import Navbar from "../components/nav_bar";

// export default function Home() {
//   return (
//     <div className="flex flex-col min-h-screen bg-gray-50 font-sans">
//       <Navbar />
//       <main className="flex flex-col items-center justify-center flex-1 text-center px-4">
//         <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
//           Welcome to <span className="text-blue-600">[Your Company Name]</span>
//         </h1>
//         <p className="text-lg text-gray-600 mb-8">
//           Delivering excellence in <span className="font-medium text-gray-800">[Your Industry]</span> since [Year].
//         </p>
//       </main>
//       <footer className="bg-gray-900 text-white text-center py-4">
//         <p>&copy; {new Date().getFullYear()} [Your Company Name]. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// }
