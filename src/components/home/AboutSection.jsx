import { Link } from "react-router-dom";
import hero1 from "../../assets/images/hero1.jpg";

function AboutSection(){

return(

<section className="py-24 bg-white">

<div className="
max-w-7xl
mx-auto
grid
md:grid-cols-2
gap-16
items-center
px-6
">


{/* IMAGEN */}
<div className="relative group">

{/* marco decorativo más sutil */}
<div className="
absolute
-rotate-3
top-4
left-4
w-full
h-full
border-2
border-[#0f766e]/20
rounded-2xl
"></div>


<div className="
relative
bg-white
rounded-2xl
overflow-hidden
shadow-sm
group-hover:shadow-lg
transition
">

<img
src={hero1}
alt="Qorichaska"
className="
w-full
h-[520px]
object-cover
group-hover:scale-105
transition
duration-500
"
/>

</div>

</div>



{/* TEXTO */}
<div>

<h2 className="
text-5xl
font-serif
text-[#0f766e]
font-semibold
tracking-wide
mb-3
">
Acerca de Qorichaska
</h2>


<div className="w-16 h-[3px] bg-[#0f766e] mb-8 rounded-full"></div>



<p className="text-gray-600 leading-9 mb-6 text-lg">
Ofrecemos textiles diseñados para mejorar la experiencia de descanso
en hoteles, clínicas e instituciones.
</p>

<p className="text-gray-600 leading-9 mb-6 text-lg">
Cada producto es desarrollado con un enfoque en confort, resistencia y una
presentación cuidada que eleva la experiencia del usuario.
</p>

<p className="text-gray-600 leading-9 mb-10 text-lg">
Trabajamos con el objetivo de brindar textiles que reflejen confianza,
profesionalismo y excelencia en cada detalle.
</p>



<Link
to="/nosotros"
className="
inline-block
bg-[#0f766e]
text-white
px-10
py-4
rounded-full
font-semibold
shadow-md
hover:shadow-lg
hover:bg-[#115e59]
transition
"
>
Conoce más
</Link>

</div>

</div>

</section>

);

}

export default AboutSection;