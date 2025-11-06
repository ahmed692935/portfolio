// import React from 'react'

// const LatestProjects = () => {
//   return (
//     <div className='bg-customDark text-white flex flex-col items-center p-10 lg:p-28 font-poppins'>
//     <div className="text-white text-4xl md:text-5xl lg:text-6xl font-bold text-center">
//       My Latest Project
//     </div>
//     <div className="text-lg font-light text-fontColor text-center mt-5">
//       There are many variations of passages of Lorem Ipsum available, but the <br/> majority have suffered alteration.
//     </div>

//     <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
//   <div className="bg-bgCards p-6 rounded-lg shadow-md group hover:bg-gradient-to-b hover:from-pink-600 hover:to-black transition duration-300 hover:scale-105" style={{ height: '600px' }}></div>
//   <div className="bg-bgCards p-6 rounded-lg shadow-md group hover:bg-gradient-to-b hover:from-pink-600 hover:to-black transition duration-300 hover:scale-105" style={{ height: '600px' }}></div>
//   <div className="bg-bgCards p-6 rounded-lg shadow-md group hover:bg-gradient-to-b hover:from-pink-600 hover:to-black transition duration-300 hover:scale-105" style={{ height: '600px' }}></div>
//   <div className="bg-bgCards p-6 rounded-lg shadow-md group hover:bg-gradient-to-b hover:from-pink-600 hover:to-black transition duration-300 hover:scale-105" style={{ height: '600px' }}></div>
//   <div className="bg-bgCards p-6 rounded-lg shadow-md group hover:bg-gradient-to-b hover:from-pink-600 hover:to-black transition duration-300 hover:scale-105" style={{ height: '600px' }}></div>
//   <div className="bg-bgCards p-6 rounded-lg shadow-md group hover:bg-gradient-to-b hover:from-pink-600 hover:to-black transition duration-300 hover:scale-105" style={{ height: '600px' }}></div>
// </div>

//   </div>

//   )
// }

// export default LatestProjects

// import React, { useEffect, useState } from 'react';
// import { collection, getDocs } from 'firebase/firestore';
// import { db, storage } from '../firebase';
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { getDownloadURL, ref } from 'firebase/storage';

// const LatestProjects = () => {
//   const [projects, setProjects] = useState([]);

//   const [images, setImages] = useState([]);

//   useEffect(() => {
//     const fetchContacts = async () => {
//       const querySnapshot = await getDocs(collection(db, 'projects'));
//       const contactsArray = querySnapshot.docs.map(doc => ({
//         id: doc.id,
//         ...doc.data()
//       }));
//       setProjects(contactsArray);
//     };

//     fetchContacts();
//   }, []);

//   useEffect(()=>{
//     const fetchImageUrl = async () => {
//       const imageRef = ref(storage, 'images/2.jpg');
//       try {
//         const url = await getDownloadURL(imageRef);
//         setImages(url);
//       } catch (error) {
//         console.error('Error fetching image URL:', error);
//       }
//     };

//     fetchImageUrl();
//   }, []);

//   const goToGithub = () => {
//     window.open("https://github.com/ahmed3441/", "_blank");
//   }

//   const settings = {
//     dots: true,
//     infinite: true,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//           infinite: true,
//           dots: true
//         }
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1
//         }
//       }
//     ]
//   };

//   return (
//     <div id='portfolio' className='bg-customDark text-white flex flex-col items-center p-10 lg:p-28 font-poppins'>
//       <div className="text-white text-4xl md:text-5xl lg:text-6xl font-bold text-center">
//         My Latest Project
//       </div>
//       <div className="text-lg font-light text-fontColor text-center mt-5">
//         There are many variations of passages of Lorem Ipsum available, but the <br /> majority have suffered alteration.
//       </div>

//       <div className="container mt-20">
//         <Slider {...settings}>
//           {projects.map((project) => {
//             return (
//               <div key={project.id}>
//                 <div onClick={goToGithub}
//                   className="bg-bgCards p-0 mx-5 rounded-lg shadow-md group hover:bg-gradient-to-b hover:from-pink-600 hover:to-black transition duration-300 hover:scale-105 flex flex-col justify-end"
//                   style={{ height: '600px' }}
//                 >
//                 <img src={images} alt={project.title} className="w-full h-2/3 object-cover rounded-t-lg" />
//                   <div className="mt-auto p-20">
//                     <p className="text-sm font-poppins font-normal text-white">{project.niche}</p>
//                     <p className="text-3xl font-medium font-poppins text-white">{project.title}</p>
//                    </div>
//                  </div>
//               </div>
//             );
//           })}
//         </Slider>
//       </div>
//     </div>
//   );
// };

// export default LatestProjects;

// import React, { useEffect, useState } from "react";
// import { collection, getDocs } from "firebase/firestore";
// import { db, storage } from "../firebase";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { getDownloadURL, ref } from "firebase/storage";

// const LatestProjects = () => {
//   const [projects, setProjects] = useState([]);

//   useEffect(() => {
//     const fetchProjects = async () => {
//       const querySnapshot = await getDocs(collection(db, "projects"));
//       const projectsArray = await Promise.all(
//         querySnapshot.docs.map(async (doc) => {
//           const data = doc.data();
//           let imageUrl = null;
//           if (data.imageUrl) {
//             imageUrl = await getDownloadURL(ref(storage, data.imageUrl));
//           }
//           return {
//             id: doc.id,
//             ...data,
//             imageUrl,
//           };
//         })
//       );
//       setProjects(projectsArray);
//     };

//     fetchProjects();
//   }, []);

//   const handleClick = (link) => {
//     if (link) {
//       window.open(link, "_blank");
//     }
//   };

//   // const goToGithub = () => {
//   //   window.open("https://github.com/ahmed3441/", "_blank");
//   // };

//   const settings = {
//     dots: true,
//     infinite: true,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//           infinite: true,
//           dots: true,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <div
//       id="portfolio"
//       className="bg-customDark text-white flex flex-col items-center p-10 lg:p-28 font-poppins"
//     >
//       <div className="text-white text-4xl md:text-5xl lg:text-6xl font-bold text-center">
//         My Latest Project
//       </div>
//       <div className="text-lg font-light text-fontColor text-center mt-5">
//         I specialize in developing innovative, user-focused projects, from
//         dynamic web applications to responsive UI designs, <br /> leveraging
//         modern technologies like React.js, ASP.NET, and Firebase.
//       </div>

//       <div className="container mt-20 cursor-pointer">
//         <Slider {...settings}>
//           {projects.map((project) => (
//             <div key={project.id}>
//               <div
//                 onClick={() => handleClick(project.link)}
//                 // onClick={goToGithub}
//                 className="bg-bgCards p-0 mx-5 rounded-lg shadow-md group hover:bg-gradient-to-b hover:from-pink-600 hover:to-black transition duration-300 hover:scale-105 flex flex-col justify-end"
//                 style={{ height: "600px" }}
//               >
//                 {project.imageUrl && (
//                   <img
//                     src={project.imageUrl}
//                     alt={project.title}
//                     className="w-full h-2/3 object-cover rounded-t-lg"
//                   ></img>
//                 )}
//                 <div className="mt-auto p-20">
//                   <p className="text-sm font-poppins font-normal text-white">
//                     {project.niche}
//                   </p>
//                   <p className="text-3xl font-medium font-poppins text-white">
//                     {project.title}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </div>
//   );
// };

// export default LatestProjects;

import React from "react";
import Artificizen from "../assets/images/artificizen.png";
import Qs from "../assets/images/image.png";
import Awfera from "../assets/images/awfera.png";
import Todo from "../assets/images/todo.png";

const LatestProjects = () => {
  const projects = [
    {
      id: 1,
      title: "Todo AI App",
      niche: "AI Agent Communication Platform",
      description:
        "Developed an AI-powered pharmaceutical assistant app integrating Heygen avatars for realistic virtual interactions. Enabled users to communicate with the AI agent through both text and voice for enhanced engagement and accessibility.",
      imageUrl: Todo,
      link: "https://todoai.ai",
    },
    {
      id: 2,
      title: "Artificizen Site",
      niche: "Company Website (Next.js & Tailwind CSS)",
      description:
        "Developed the official company website using Next.js and Tailwind CSS, ensuring full responsiveness across all devices. Focused on performance optimization, scalable architecture, and maintaining a consistent brand identity.",
      imageUrl: Artificizen,
      link: "https://artificizen.com/",
    },
    {
      id: 3,
      title: "Quick Solutions Repair Portal",
      niche: "Frappe + React Integration",
      description:
        "Built new modules such as Legal Warranty and Withdrawal Case for mobile and laptop repair workflows. Integrated Redux Toolkit for state management and connected the frontend with Frappe APIs. Enhanced UI for better user experience.",
      imageUrl: Qs,
      link: "https://erp.quicksolutions.be/online-repair",
    },
    {
      id: 4,
      title: "Awfera ALMS",
      niche: "Learning Management System (React + TypeScript)",
      description:
        "Developed a role-based LMS using React.js, TypeScript, React Query, and Ant Design. Implemented reusable UI components, optimized API integration, and designed responsive dashboards for learners, organizations, and admins.",
      imageUrl: Awfera,
      link: "https://almsfe.xeventechnologies.com/",
    },
  ];

  const handleClick = (link) => {
    if (link) window.open(link, "_blank");
  };

  return (
    <div
      id="portfolio"
      className="bg-customDark text-white flex flex-col items-center p-10 lg:p-28 font-poppins"
    >
      <div className="text-white text-4xl md:text-5xl lg:text-6xl font-bold text-center">
        My Latest Projects
      </div>
      <div className="text-lg font-light text-fontColor text-center mt-5 max-w-3xl">
        I build intuitive, high-performance web and mobile applications using
        React, Next.js combining great UI design with seamless functionality.
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-16 w-full max-w-7xl px-5">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleClick(project.link)}
            className="border rounded-xl overflow-hidden shadow-md group hover:bg-gradient-to-b hover:from-pink-600 hover:to-black transition duration-300 hover:scale-105 cursor-pointer flex flex-col"
          >
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full object-cover h-52"
            />
            <div className="p-6 flex flex-col flex-grow justify-between">
              <div>
                <p className="text-sm text-fontColor font-medium mb-2 group-hover:text-white">
                  {project.niche}
                </p>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-white transition">
                  {project.title}
                </h3>
                <p className="text-base text-fontColor leading-relaxed group-hover:text-gray-200 transition">
                  {project.description}
                </p>
              </div>
              <button className="mt-5 bg-transparent border border-customRed text-customRed px-5 py-2 rounded-md font-semibold hover:bg-customRed hover:text-white transition duration-300 self-start">
                View Project
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestProjects;
