import logo from "../../assets/images/logo.jpg";

import {
  MapPin,
  Phone
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaTiktok
} from "react-icons/fa";

function Footer() {

return(

<footer className="bg-[#0f766e] text-white mt-20">

<div className="
max-w-7xl
mx-auto
px-6
py-20
grid
md:grid-cols-4
gap-14
">

{/* LOGO */}
<div>

<img
src={logo}
alt="Qorichaska"
className="h-20 mb-6 rounded-2xl"
/>

<p className="leading-8 text-white/90">
Especialistas en ropa de cama de alta calidad para hoteles, clínicas,
sector minero e instituciones públicas.
</p>

</div>



{/* REDES */}
<div>

<h3 className="text-2xl font-serif mb-6">
Síguenos
</h3>

<div className="flex gap-5">

<a
href="https://www.facebook.com/share/1CGUAwpfiS/?mibextid=wwXIfr"
target="_blank"
rel="noopener noreferrer"
className="bg-white/20 p-4 rounded-full hover:bg-[#1877f2] hover:scale-110 transition"
>
<FaFacebookF size={20}/>
</a>

<a
href="https://www.instagram.com/qorichaskaa?igsh=ODJsb2d4NDJ3NHY0"
target="_blank"
rel="noopener noreferrer"
className="bg-white/20 p-4 rounded-full hover:bg-gradient-to-tr hover:from-pink-500 hover:via-red-500 hover:to-yellow-500 hover:scale-110 transition"
>
<FaInstagram size={20}/>
</a>

<a
href="https://www.tiktok.com/@qorichaskaperu?_r=1&_t=ZS-95kvmBYQxa0"
target="_blank"
rel="noopener noreferrer"
className="bg-white/20 p-4 rounded-full hover:bg-black hover:scale-110 transition"
>
<FaTiktok size={20}/>
</a>

</div>

</div>



{/* MAPA */}
<div>

<h3 className="text-2xl font-serif mb-6">
Ubícanos
</h3>

<div className="rounded-3xl overflow-hidden shadow-xl">

<iframe
src="https://www.google.com/maps?q=Jr.+Alexander+Von+Humboldt+1206+La+Victoria&output=embed"
className="w-full h-64 border-0"
title="Mapa"
/>

</div>

</div>



{/* CONTACTO */}
<div>

<h3 className="text-2xl font-serif mb-6">
Contáctanos
</h3>

<div className="space-y-6">

<div className="flex gap-4">
<MapPin/>
<span>Jr. Alexander Von Humboldt 1206, La Victoria</span>
</div>

<div className="flex gap-4">
<Phone/>
<a
href="https://wa.me/51977602419"
target="_blank"
rel="noopener noreferrer"
>
+51 977 602 419
</a>
</div>

</div>

<a
href="https://wa.me/51977602419"
target="_blank"
rel="noopener noreferrer"
className="
inline-flex
items-center
gap-3
mt-8
bg-white
text-[#0f766e]
px-8
py-4
rounded-full
font-semibold
hover:bg-green-500
hover:text-white
hover:scale-105
transition
"
>
<FaWhatsapp/>
Contáctanos
</a>

</div>

</div>



{/* LEGAL / RUC */}
<div className="
border-t
border-white/20
text-center
py-10
text-white/80
space-y-2
text-sm
">

<p className="font-semibold text-white">
Qorichaska Textil
</p>

<p>
CKT Perú S.A.C. — RUC: 2052243737
</p>

<p>
Milsa Medina O. — RUC: 10701036030
</p>

<p className="mt-4 text-white/70">
© {new Date().getFullYear()} Qorichaska — Todos los derechos reservados
</p>

</div>

</footer>

);

}

export default Footer;