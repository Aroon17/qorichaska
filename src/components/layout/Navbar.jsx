import logo from "../../assets/images/logo.jpg";

import { useState } from "react";
import { Link } from "react-router-dom";

import {
ChevronDown,
Menu
} from "lucide-react";

function Navbar() {

const [mobile,setMobile]=useState(false);

return(

<nav className="bg-white shadow-sm sticky top-0 z-50">

<div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">


{/* LOGO */}
<Link to="/" className="flex items-center">

<img
src={logo}
alt="Qorichaska"
className="h-16 md:h-14 w-auto object-contain"
/>

</Link>



{/* DESKTOP */}
<ul className="hidden md:flex items-center gap-10 text-gray-700 font-medium">

<li>
<Link to="/" className="nav-link">
INICIO
</Link>
</li>

<li>
<Link to="/nosotros" className="nav-link">
QORICHASKA TEXTIL
</Link>
</li>

<li>
<Link to="/catalogo" className="nav-link">
CATÁLOGO
</Link>
</li>


{/* DROPDOWN HOVER */}
<li className="relative group">

<div className="flex items-center gap-2 nav-link cursor-pointer">
PRODUCTOS
<ChevronDown size={16}/>
</div>


{/* MENU */}
<div className="
absolute
top-full
left-0
mt-3
bg-white
shadow-xl
rounded-xl
p-4
w-64
z-50

opacity-0
invisible
translate-y-2

group-hover:opacity-100
group-hover:visible
group-hover:translate-y-0

transition-all
duration-300
">

<ul className="space-y-2 text-sm">

<li><Link to="/almohadas" className="hover:text-[#0f766e]">Almohadas</Link></li>
<li><Link to="/amenities" className="hover:text-[#0f766e]">Amenities</Link></li>
<li><Link to="/batas-bano" className="hover:text-[#0f766e]">Batas de baño</Link></li>
<li><Link to="/edredones" className="hover:text-[#0f766e]">Edredones</Link></li>
<li><Link to="/manta-polar" className="hover:text-[#0f766e]">Manta polar</Link></li>
<li><Link to="/pie-de-cama" className="hover:text-[#0f766e]">Pie de cama</Link></li>
<li><Link to="/piso-de-bano" className="hover:text-[#0f766e]">Piso de baño</Link></li>
<li><Link to="/protector-colchon" className="hover:text-[#0f766e]">Protector</Link></li>
<li><Link to="/sabanas" className="hover:text-[#0f766e]">Sábanas</Link></li>
<li><Link to="/toallas" className="hover:text-[#0f766e]">Toallas</Link></li>
<li><Link to="/funda-duvet" className="hover:text-[#0f766e]">Funda Duvet</Link></li>

</ul>

</div>

</li>


<li>
<Link to="/contacto" className="nav-link">
CONTACTO
</Link>
</li>

</ul>



{/* BOTÓN MOBILE */}
<button
className="md:hidden"
onClick={()=>setMobile(!mobile)}
>
<Menu size={28}/>
</button>

</div>



{/* MOBILE MENU */}
{mobile && (
<div className="md:hidden bg-white border-t px-6 pb-6 shadow">

<ul className="space-y-4 text-gray-700 pt-4">

<li><Link to="/" onClick={()=>setMobile(false)}>Inicio</Link></li>

<li><Link to="/nosotros" onClick={()=>setMobile(false)}>Qorichaska</Link></li>

<li><Link to="/catalogo" onClick={()=>setMobile(false)}>Catálogo</Link></li>


<li className="pt-4 border-t text-sm text-gray-400">
PRODUCTOS
</li>

<li><Link to="/almohadas" onClick={()=>setMobile(false)}>Almohadas</Link></li>
<li><Link to="/amenities" onClick={()=>setMobile(false)}>Amenities</Link></li>
<li><Link to="/batas-bano" onClick={()=>setMobile(false)}>Batas</Link></li>
<li><Link to="/edredones" onClick={()=>setMobile(false)}>Edredones</Link></li>
<li><Link to="/manta-polar" onClick={()=>setMobile(false)}>Manta</Link></li>
<li><Link to="/pie-de-cama" onClick={()=>setMobile(false)}>Pie</Link></li>
<li><Link to="/piso-de-bano" onClick={()=>setMobile(false)}>Piso</Link></li>
<li><Link to="/protector-colchon" onClick={()=>setMobile(false)}>Protector</Link></li>
<li><Link to="/sabanas" onClick={()=>setMobile(false)}>Sábanas</Link></li>
<li><Link to="/toallas" onClick={()=>setMobile(false)}>Toallas</Link></li>
<li><Link to="/funda-duvet" onClick={()=>setMobile(false)}>Funda Duvet</Link></li>


<li className="pt-4">
<Link
to="/contacto"
onClick={()=>setMobile(false)}
className="
block
text-center
bg-[#0f766e]
text-white
py-3
rounded-full
font-semibold
"
>
Contactar
</Link>
</li>

</ul>

</div>
)}

</nav>

);

}

export default Navbar;