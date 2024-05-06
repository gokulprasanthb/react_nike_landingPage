//import React from 'react'

const Button = ({label}) => {
  return (
    <button className="flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-slate-700 text-white border-slate-950 rounded-lg hover:shadow-xl">
        {label}
      { /*<img src={iconURL} alt="ARROW RIGHT ICON" className="ml-2 rounded-full w-5 h-5" /> */}
    </button>
    
  )
}

export default Button