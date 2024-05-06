//import React from 'react'

import { copyrightSign } from "../assets/icons"
import { footerLogo } from "../assets/images"
import { footerLinks, socialMedia } from "../constants"

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
       <div className="flex flex-col items-start">
          <a href="/">
            <img src={footerLogo} width={150} height={46} alt="" />
          </a>
          <p className="mt-5 text-base leading-7 font-montserrat sm:max-w-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt harum architecto nemo excepturi consequuntur minus nihil ducimus iure! Consequuntur, sit!</p>

          <div className="flex items-center gap-5 mt-8 ">
            {socialMedia.map((icon) =>(
              <div className="flex justify-center items-center w-12 h-12 cursor-pointer">
                <img src={icon.src} alt="icon" width={24} height={24} className="bg-yellow-400 rounded-lg hover:bg-inherit" />
              </div>
            ))}
          </div>
       </div>

       <div className="flex flex-1 justify-between gap-20 lg:gap-10 flex-wrap">
              {footerLinks.map((section) =>(
                <div key={section}>
                  <h4 className="font-montserrat text-2xl mb-6 leading-normal font-medium">{section.title}</h4>
                  <ul >
                    {section.links.map((link) =>(
                      <li className="mt-3 font-montserrat text-base leading-normal" key={link.name}>
                       <a href="" className="hover:text-yellow-400">{link.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
       </div>
      </div>

      <div className="justify-center items-center mt-24 max-sm:flex-col max-sm:items-center">
          <div className="flex flex-1 justify-center items-center gap-2 font-montserrat">
              <img src={copyrightSign} alt="copyright" width={20} height={20} className="rounded-full m-0" />
              <p>Copyright. All rights reserved.</p>
          </div>
      </div>
    </footer>
  )
}

export default Footer