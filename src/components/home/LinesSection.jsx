import { Link } from "react-router-dom";

import toallas from "../../assets/images/toallas/toallas1.jpg";
import sabanas from "../../assets/images/sabanas/sábanas1.jpg";
import amenities from "../../assets/images/amenities/amenities1.jpg";

const productos=[

{
title:"Toallas",
img:toallas,
desc:"Textiles premium para hotelería e instituciones.",
ruta:"/toallas"
},

{
title:"Sábanas",
img:sabanas,
desc:"Confort, calidad y presentación profesional.",
ruta:"/sabanas"
},

{
title:"Amenities",
img:amenities,
desc:"Soluciones textiles complementarias para huéspedes.",
ruta:"/amenities"
}

];

function LinesSection() {

return(

<section className="py-24 bg-white">

<div className="max-w-7xl mx-auto px-6">

{/* TITULO */}
<h2 className="text-center text-5xl font-serif text-[#0f766e] font-semibold mb-4">
Descubre Nuestros Productos
</h2>

<div className="w-16 h-[3px] bg-[#0f766e] mx-auto mb-14 rounded-full"></div>



{/* GRID */}
<div className="grid md:grid-cols-3 gap-10">

{productos.map((item,index)=>(

<div
key={index}
className="
bg-white
border
border-gray-200
rounded-2xl
overflow-hidden
hover:-translate-y-2
hover:shadow-lg
transition
duration-500
"
>

{/* IMAGEN */}
<div className="overflow-hidden">
<img
src={item.img}
alt={item.title}
className="
w-full
h-80
object-cover
hover:scale-105
transition
duration-500
"
/>
</div>


{/* CONTENIDO */}
<div className="p-6 text-center">

<h3 className="text-2xl font-semibold text-gray-800 mb-3">
{item.title}
</h3>

<p className="text-gray-500 mb-6 text-sm leading-7">
{item.desc}
</p>

<Link
to={item.ruta}
className="
inline-block
bg-[#0f766e]
text-white
px-6
py-2
rounded-full
text-sm
font-medium
hover:bg-[#115e59]
transition
"
>
Ver más
</Link>

</div>

</div>

))}

</div>



{/* BOTÓN FINAL */}
<div className="text-center mt-16">

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
Explorar catálogo completo
</Link>

</div>

</div>

</section>

);

}

export default LinesSection;