import {
ShieldCheck,
Handshake,
Lightbulb,
BadgeCheck
} from "lucide-react";

import { Link } from "react-router-dom";

function Nosotros(){

const values = [

{
title:"Compromiso",
desc:"Trabajamos con dedicación y excelencia.",
icon:<ShieldCheck size={26}/>
},

{
title:"Confianza",
desc:"Construimos relaciones sólidas.",
icon:<Handshake size={26}/>
},

{
title:"Innovación",
desc:"Mejoramos continuamente nuestros procesos.",
icon:<Lightbulb size={26}/>
},

{
title:"Responsabilidad",
desc:"Cumplimos con calidad y seriedad.",
icon:<BadgeCheck size={26}/>
}

];

return(
<>

{/* HERO */}
<section
className="
h-[80vh]
bg-cover
bg-center
relative
flex
items-center
justify-center
"
style={{
backgroundImage:
`url(https://images.unsplash.com/photo-1505693416388-ac5ce068fe85)`
}}
>

{/* overlay oscuro elegante */}
<div className="absolute inset-0 bg-black/60"></div>

<div className="relative z-10 text-center px-6">

<h1 className="
text-5xl
md:text-7xl
font-serif
text-white
mb-6
">
QORICHASKA
</h1>

<p className="
text-lg
md:text-xl
text-gray-200
max-w-2xl
mx-auto
leading-8
">
Tradición textil peruana con innovación y calidad premium.
</p>

</div>

</section>



{/* CONTENIDO */}
<section className="py-28 bg-white">

<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">


{/* IZQUIERDA */}
<div>

<h2 className="
text-4xl
md:text-5xl
font-serif
text-[#0f766e]
mb-8
leading-tight
">

Conoce más sobre nosotros

</h2>


<p className="
text-gray-600
text-lg
leading-9
">

Somos una empresa dedicada a brindar soluciones textiles de alta calidad
para hoteles, clínicas, instituciones y el hogar. Nuestros productos combinan
diseño, durabilidad y confort, cumpliendo con altos estándares para garantizar
excelencia en cada detalle.

</p>

</div>



{/* DERECHA */}
<div className="grid grid-cols-2 gap-8">

{values.map((item,index)=>(

<div
key={index}
className="
p-6
rounded-2xl
border
border-gray-200
hover:shadow-md
transition
bg-white
"
>

<div className="
w-14
h-14
rounded-full
bg-[#ecfdf5]
flex
items-center
justify-center
text-[#0f766e]
mb-4
">

{item.icon}

</div>


<h3 className="
font-semibold
text-lg
mb-2
text-gray-800
">

{item.title}

</h3>


<p className="
text-gray-500
text-sm
leading-6
">

{item.desc}

</p>

</div>

))}

</div>

</div>

</section>



{/* CTA */}
<section className="bg-[#0f766e] py-16">

<div className="
max-w-7xl
mx-auto
px-6
flex
flex-col
md:flex-row
justify-between
items-center
gap-6
">

<h2 className="
text-white
text-2xl
md:text-3xl
font-serif
">

Estamos listos para trabajar contigo

</h2>


<Link
to="/contacto"
className="
bg-white
text-[#0f766e]
px-10
py-3
rounded-full
font-semibold
hover:scale-105
transition
"
>

Contáctanos

</Link>

</div>

</section>

</>
);

}

export default Nosotros;