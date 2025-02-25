import React from "react";
import { FaAward, FaClock, FaHeadset } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";

const Products5 = () => {
  const productlist =[
    {
      title:"Modern design",
      disl:"Said be brought bel also fills kind face creepeth gathired their sine good under is beast.",
      icon:  <FaClock />,
      color:"red"
    },
    {
      title:"Digital Marketing",
      disl:"Said be brought bel also fills kind face creepeth gathired their sine good under is beast.",
      icon:  <FaAward />,
      color:"blue"
    },
    {
      title:"UI/UX Strategy",
      disl:"Said be brought bel also fills kind face creepeth gathired their sine good under is beast.",
      icon:  <FaHeadset />,
      color:"green"
    }
  ]

  return (
    <section className="py-16 bg-white">
      
      <div className="max-w-6xl mx-auto px-6">
      <div className="mb-9">
          <h2 className="text-5xl uppercase font-bold mb-2">innovation starts here</h2>
          <span className="text-sm text-red-600 underline ">Some Standard Serivices</span>
        </div>
      <div className="grid md:grid-cols-3 gap-8">
        {/* First Card */}
        {
          productlist.map((item,index)=>(
            <div className=" p-8  bg-blue-50 text-left hover:bg-green-50 rounded-br-xl overflow-hidden">
              <div className="relative inline-block mb-8">
                <div className={`relative z-10  bg-${item.color}-500 text-white w-20 h-20 flex items-center justify-center rounded-full text-3xl shadow-lg`}>
                  {item.icon}
                </div>
                <div className={`absolute translate-y-6 -translate-x-1 -top-4 -left-0 z w-full h-full border border-${item.color}-300 rounded-full `}></div>
              </div>
              <h3 className="text-xl font-semibold mt-6 mb-8">{item.title}</h3>
              <p className="text-gray-500 mt-3 leading-8">
               {item.disl}
              </p>
              <Link className="flex items-center mt-6 mb-6">read more <FaLongArrowAltRight  className="mx-3"/></Link>
            </div>
          ))
        }
    

      
      </div>
    </div>
  </section>
  );
};

export default Products5;
