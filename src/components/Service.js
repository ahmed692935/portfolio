// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faDesktop } from "@fortawesome/free-solid-svg-icons";
// // import { faUser } from "@fortawesome/free-regular-svg-icons";

// import React, { useEffect, useState } from "react";
// import { collection, getDocs } from "firebase/firestore";
// import { db } from "../firebase";

// const Service = () => {

//   const [services, setServices] = useState([]);

//   useEffect(() => {
//     const fetchContacts = async () => {
//       const querySnapshot = await getDocs(collection(db, 'services'));
//       const contactsArray = querySnapshot.docs.map(doc => ({
//         id: doc.id,
//         ...doc.data()
//       }));
//       setServices(contactsArray);

//     };

//     fetchContacts();
//   }, []);

//   return (
// <div id="service" className="bg-blackColor flex flex-col items-center p-10 lg:p-28 font-poppins">
// <div className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
//         My Awesome Service
//         <div className="text-lg font-light text-fontColor text-center mt-5">
//           Things I'm skilled at and passionate about.
//         </div>
//       </div>

//       <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

//       {services.map((service) => {
//   return (
//     <div key={service.id} >
//       <div className="bg-customDark text-white p-10 rounded-lg shadow-md group hover:bg-gradient-to-r hover:from-red-700 hover:to-customRed transition duration-300 hover:scale-105">
//           <h3 className="text-xl font-bold mb-4">
//             <FontAwesomeIcon
//               icon={faDesktop}
//               className="text-3xl mb-4 text-customRed group-hover:text-white transition duration-300"
//             />
//           </h3>
//           <p className="text-white font-medium text-2xl font-poppins group-hover:text-white transition duration-300">
//            {service.title}
//           </p>
//           <p className="text-fontColor font-normal text-lg font-poppins group-hover:text-white transition duration-300">
//             {service.content}
//           </p>
//         </div>

//     </div>
//   );
// })}

//         {/* <div className="bg-customDark text-white p-10 rounded-lg shadow-md group hover:bg-gradient-to-r hover:from-red-700 hover:to-customRed transition duration-300 hover:scale-105">
//           <h3 className="text-xl font-bold mb-4">
//             <FontAwesomeIcon
//               icon={faDesktop}
//               className="text-3xl mb-4 text-customRed group-hover:text-white transition duration-300"
//             />
//           </h3>
//           <p className="text-white font-medium text-2xl font-poppins group-hover:text-white transition duration-300">
//             Web Application Development
//           </p>
//           <p className="text-fontColor font-normal text-lg font-poppins group-hover:text-white transition duration-300">
//             Fast, responsive and engaging apps that bring your ideas to life.
//           </p>
//         </div>

//         <div className="bg-customDark text-white p-10 rounded-lg shadow-md group hover:bg-gradient-to-r hover:from-red-700 hover:to-customRed transition duration-300 hover:scale-105">
//           <h3 className="text-xl font-bold mb-4">
//             <FontAwesomeIcon
//               icon={faGears}
//               className="text-3xl mb-4 text-customRed group-hover:text-white transition duration-300"
//             />
//           </h3>
//           <p className="text-white font-medium text-2xl font-poppins group-hover:text-white transition duration-300">
//             Web Application Development
//           </p>
//           <p className="text-fontColor font-normal text-lg font-poppins group-hover:text-white transition duration-300">
//             Fast, responsive and engaging apps that bring your ideas to life.
//           </p>
//         </div>

//         <div className="bg-customDark text-white p-10 rounded-lg shadow-md group hover:bg-gradient-to-r hover:from-red-700 hover:to-customRed transition duration-300 hover:scale-105">
//           <h3 className="text-xl font-bold mb-4">
//             <FontAwesomeIcon
//               icon={faUser}
//               className="text-3xl mb-4 text-customRed group-hover:text-white transition duration-300"
//             />
//           </h3>
//           <p className="text-white font-medium text-2xl font-poppins group-hover:text-white transition duration-300">
//             Web Application Development
//           </p>
//           <p className="text-fontColor font-normal text-lg font-poppins group-hover:text-white transition duration-300">
//             Fast, responsive and engaging apps that bring your ideas to life.
//           </p>
//         </div>

//         <div className="bg-customDark text-white p-10 rounded-lg shadow-md group hover:bg-gradient-to-r hover:from-red-700 hover:to-customRed transition duration-300 hover:scale-105">
//           <h3 className="text-xl font-bold mb-4">
//             <FontAwesomeIcon
//               icon={faDesktop}
//               className="text-3xl mb-4 text-customRed group-hover:text-white transition duration-300"
//             />
//           </h3>
//           <p className="text-white font-medium text-2xl font-poppins group-hover:text-white transition duration-300">
//             Web Application Development
//           </p>
//           <p className="text-fontColor font-normal text-lg font-poppins group-hover:text-white transition duration-300">
//             Fast, responsive and engaging apps that bring your ideas to life.
//           </p>
//         </div>

//         <div className="bg-customDark text-white p-10 rounded-lg shadow-md group hover:bg-gradient-to-r hover:from-red-700 hover:to-customRed transition duration-300 hover:scale-105">
//           <h3 className="text-xl font-bold mb-4">
//             <FontAwesomeIcon
//               icon={faUser}
//               className="text-3xl mb-4 text-customRed group-hover:text-white transition duration-300"
//             />
//           </h3>
//           <p className="text-white font-medium text-2xl font-poppins group-hover:text-white transition duration-300">
//             Web Application Development
//           </p>
//           <p className="text-fontColor font-normal text-lg font-poppins group-hover:text-white transition duration-300">
//             Fast, responsive and engaging apps that bring your ideas to life.
//           </p>
//         </div>

//         <div className="bg-customDark text-white p-10 rounded-lg shadow-md group hover:bg-gradient-to-r hover:from-red-700 hover:to-customRed transition duration-300 hover:scale-105">
//           <h3 className="text-xl font-bold mb-4">
//             <FontAwesomeIcon
//               icon={faDesktop}
//               className="text-3xl mb-4 text-customRed group-hover:text-white transition duration-300"
//             />
//           </h3>
//           <p className="text-white font-medium text-2xl font-poppins group-hover:text-white transition duration-300">
//             Web Application Development
//           </p>
//           <p className="text-fontColor font-normal text-lg font-poppins group-hover:text-white transition duration-300">
//             Fast, responsive and engaging apps that bring your ideas to life.
//           </p>
//         </div> */}
//       </div>
//     </div>
//   );
// };

// export default Service;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faLaptopCode,
  faPaintBrush,
  faRocket,
  faDatabase,
  faCloud,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Service = () => {
  // ✅ Static services (no Firebase)
  const services = [
    {
      id: 1,
      icon: faLaptopCode,
      title: "Frontend Development",
      content:
        "Building responsive, dynamic, and high-performing web applications using React.js and Next.js with modern UI frameworks like Tailwind and Material UI.",
    },
    {
      id: 2,
      icon: faCode,
      title: "Web Application Architecture",
      content:
        "Designing scalable front-end architectures with clean component structures, reusable logic, and optimized performance using React Query and Redux Toolkit.",
    },
    {
      id: 3,
      icon: faPaintBrush,
      title: "UI / UX Implementation",
      content:
        "Translating design prototypes from Figma into pixel-perfect interfaces with smooth animations, accessibility, and consistent branding.",
    },
    {
      id: 4,
      icon: faRocket,
      title: "Performance Optimization",
      content:
        "Improving loading times, optimizing bundle size, and implementing lazy loading and code-splitting for a seamless user experience. Ensuring smooth app performance.",
    },

    {
      id: 5,
      icon: faDatabase,
      title: "API Integration",
      content:
        "Integrating RESTful APIs and Firebase backends with front-end apps using Axios, Fetch, and React Query for real-time data synchronization.",
    },
    {
      id: 6,
      icon: faCloud,
      title: "Deployment & Hosting",
      content:
        "Deploying and managing web apps on Vercel, and AWS EC2, ensuring continuous delivery, scalability, and performance monitoring.",
    },
  ];

  return (
    <div
      id="service"
      className="bg-blackColor flex flex-col items-center p-10 lg:p-28 font-poppins"
    >
      <div className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-center">
        My Awesome Services
        <div className="text-lg font-light text-fontColor text-center mt-5">
          Things I'm skilled at and passionate about.
        </div>
      </div>

      <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div key={service.id}>
            <div className="bg-customDark text-white p-10 rounded-lg shadow-md group hover:bg-gradient-to-r hover:from-red-700 hover:to-customRed transition duration-300 hover:scale-105">
              <h3 className="text-xl font-bold mb-4 flex justify-center">
                <FontAwesomeIcon
                  icon={service.icon}
                  className="text-4xl mb-4 text-customRed group-hover:text-white transition duration-300"
                />
              </h3>
              <p className="text-white font-semibold text-2xl mb-3 font-poppins group-hover:text-white transition duration-300 text-center">
                {service.title}
              </p>
              <p className="text-fontColor font-normal text-lg font-poppins group-hover:text-white transition duration-300 text-center">
                {service.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
