import React from 'react'
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";


export default function Navbar() {
  return (
    <nav>
            <div className="text-white py-5 flex justify-between items-center">
        {/* Logo */}
        <div className="text-lg font-semibold cursor-pointer">
          <span className="text-[#8245ec]">&lt;</span>
          <span className="text-white">kishan</span>
          <span className="text-[#8245ec]">/</span>
          <span className="text-white">kumar</span>
          <span className="text-[#8245ec]">&gt;</span>
        </div>

</div>
    </nav>
  )
}
