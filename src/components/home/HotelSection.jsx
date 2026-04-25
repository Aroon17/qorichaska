import { Link } from "react-router-dom";
import edredones from "../../assets/images/edredones/edredones1.jpg";

function HotelSection() {

return (

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

{/* marco decorativo más elegante */}
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
src={edredones}
alt="Textiles Premium"
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
text-center
md:text-left
">
TEXTILES PREMIUM
</h2>


<div className="
w-16
h-[3px]
bg-[#0f766e]
mb-8
mx-auto
md:mx-0
rounded-full
"></div>



<p className="text-gray-600 leading-9 mb-6 text-lg">
Desarrollamos soluciones textiles diseñadas para ofrecer resistencia,
confort y presentación impecable en entornos exigentes como hoteles,
clínicas y proyectos institucionales.
</p>

<p className="text-gray-600 leading-9 mb-6 text-lg">
Nuestra línea incluye sábanas, almohadas, toallas, protectores,
edredones y más, elaborados con materiales de alta calidad
y acabados profesionales.
</p>

<p className="text-gray-600 leading-9 mb-10 text-lg">
Trabajamos para que cada producto refleje confianza, durabilidad
y una imagen cuidada, adaptándonos a las necesidades de cada cliente.
</p>


<Link
to="/catalogo"
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
Ver catálogo
</Link>

</div>

</div>

</section>

);

}

export default HotelSection;