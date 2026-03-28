import { useState } from "react";

const NavBar = () => {
    const [active,setActive]=useState('home')
  return (
    <div className="flex items-center justify-between container mx-auto">
      <div>
        <img className="w-20" src="/logo.png" alt="" />
      </div>
      <div>
        <ul className=" items-center gap-3 hidden md:flex">
          <li>
            <button onClick={()=>setActive('home')} className={`btn ${active === 'home' ? 'btn border-none bg-red-500 text-white ' : 'btn-ghost'}`}>Home</button>
          </li>
          <li>
            <button onClick={()=>setActive('about')} className={`btn  ${active === 'about' ? 'btn bg-red-500 text-white border-none' : 'btn-ghost'}`}>About</button>
          </li>
          <li>
            <button onClick={()=>setActive('services')} className={`btn ${active === 'services' ? 'btn bg-red-500 text-white border-none' : 'btn-ghost'}`}>Services</button>
          </li>
          <li>
            <button onClick={()=>setActive('contact')} className={`btn ${active === 'contact' ? ' bg-red-500 text-white border-none' : 'btn-ghost'}`}>Contact</button>
          </li>
        </ul>
      </div>
      <div>
        <button className="btn bg-red-500 text-white">Get In Touch</button>
      </div>
    </div>
  );
};

export default NavBar;
