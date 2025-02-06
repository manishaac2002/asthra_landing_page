import React from 'react'
import asthra from "../images/Asthra.webp"

const NavBar = () => {
  return (
    <div class="m-10 flex">

        <div>
          <img class="w-36" src={asthra} alt="Asthra" />
        </div>
        <div class="ml-auto">
            <ul class="flex ">
                <li class="mx-6 text-[#213B6D] text-xl font-bold">Home</li>
                <li class="mx-6 text-[#213B6D] text-xl font-bold">About Us</li>
                <li class="mx-6 text-[#213B6D] text-xl font-bold">Product & Services</li>
                <li class="mx-6 text-[#213B6D] text-xl font-bold">Careers</li>
                <li class="mx-6 text-[#213B6D] text-xl font-bold">Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default NavBar