import { Link } from "react-router-dom";

import almohadas from "../../assets/images/almohadas/almohadas1.jpg";
import amenities from "../../assets/images/amenities/amenities1.jpg";
import sabanas from "../../assets/images/sabanas/sabanas1.jpg";
import toallas from "../../assets/images/toallas/toallas1.jpg";

const data = [
{
title:"Almohadas",
img:almohadas,
ruta:"/almohadas"
},
{
title:"Amenities",
img:amenities,
ruta:"/amenities"
},
{
title:"Sábanas",
img:sabanas,
ruta:"/sabanas"
},
{
title:"Toallas",
img:toallas,
ruta:"/toallas"
}
];

function CatalogSection(){

return(

<section className="py-24 bg-white">

<div className="max-w-7xl mx-auto px-6">

{/* TITULO */}
<h2 className="text-center text-5xl font-serif text-[#0f766e] font-semibold mb-4">
Nuestro Catálogo
</h2>

<div className="w-16 h-[3px] bg-[#0f766e] mx-auto mb-14 rounded-full"></div>


{/* GRID */}
<div className="grid md:grid-cols-4 gap-8">

{data.map((item,index)=>(

<Link
key={index}
to={item.ruta}
className="
relative
group
overflow-hidden
rounded-2xl
border
border-gray-200
hover:-translate-y-2
hover:shadow-lg
transition
duration-500
"
>

{/* IMAGEN */}
<img
src={item.img}
alt={item.title}
className="
h-80
w-full
object-cover
group-hover:scale-110
transition
duration-700
"
/>


{/* OVERLAY SUAVE */}
<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>


{/* CONTENIDO */}
<div className="absolute bottom-6 left-6 text-white">

<h3 className="text-xl font-semibold mb-3">
{item.title}
</h3>

<span className="
bg-white
text-[#0f766e]
px-5
py-2
rounded-full
text-sm
font-medium
group-hover:bg-[#0f766e]
group-hover:text-white
transition
">
Ver colección
</span>

</div>

</Link>

))}

</div>


{/* BOTON */}
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
Ver catálogo completo
</Link>

</div>

</div>

</section>

);

}

export default CatalogSection;