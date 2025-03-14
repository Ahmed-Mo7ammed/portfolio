import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaFacebook, FaGithub, FaPhone, FaWhatsapp } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { fadeIn } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({ index, testimonial, name, designation, company, image }) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-gray-800 p-8 rounded-2xl shadow-lg"
  >
    <p className="text-white text-4xl font-bold">“</p>
    <p className="text-gray-300 text-lg mt-2">{testimonial}</p>
    <div className="mt-6 flex items-center gap-4">
      <img src={image} alt={name} className="w-12 h-12 rounded-full object-cover" />
      <div>
        <p className="text-white font-semibold text-lg">@{name}</p>
        <p className="text-gray-400 text-sm">{designation} at {company}</p>
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className="mt-12 bg-gray-900 p-10 rounded-xl shadow-xl">
      <div className="flex flex-col items-center gap-6">
        
        {/* روابط السوشيال ميديا */}
        <div className="flex justify-center gap-4 mb-6">
          <a href="https://www.facebook.com/profile.php?id=100008232544076" target="_blank" rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-800 transition-all duration-300 shadow-lg">
            <FaFacebook size={24} />
          </a>

          <a href="mailto:dev.ahmedmohammed95@gmail.com" className="w-12 h-12 flex items-center justify-center rounded-full bg-red-500 text-white hover:bg-red-700 transition-all duration-300 shadow-lg">
            <FiMail size={24} />
          </a>

          <a href="https://github.com/Ahmed-Mo7ammed" target="_blank" rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 text-white hover:bg-gray-600 transition-all duration-300 shadow-lg">
            <FaGithub size={24} />
          </a>

          <a href="https://wa.me/201062364985" target="_blank" rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-green-500 text-white hover:bg-green-700 transition-all duration-300 shadow-lg">
            <FaWhatsapp size={24} />
          </a>

          <a href="tel:+201062364985"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-500 text-white hover:bg-blue-700 transition-all duration-300 shadow-lg">
            <FaPhone size={24} />
          </a>
        </div>

     
        
      </div>

      {/* بطاقات التقييم */}
      <div className="mt-10 grid md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default Feedbacks;
