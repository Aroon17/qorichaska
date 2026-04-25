import { useState } from "react";

import img1 from "../../assets/images/piso/piso1.jpg";
import img2 from "../../assets/images/piso/piso2.jpg";
import img3 from "../../assets/images/piso/piso3.jpg";
import img4 from "../../assets/images/piso/piso4.jpg";

function PisoDeBano() {

const images=[img1,img2,img3,img4];

const [mainImage,setMainImage]=useState(img1);

return(

<section className="py-20 bg-white min-h-screen">

<div className="max-w-7xl mx-auto px-6">

<h1 className="text-5xl font-serif text-[#0f766e] mb-12">
Piso de Baño
</h1>


<div className="grid md:grid-cols-2 gap-14 items-start">


{/* IMÁGENES */}
<div>

<div className="bg-gray-100 rounded-3xl overflow-hidden mb-6">

<img
src={mainImage}
alt="Piso de baño"
className="w-full h-[420px] object-cover"
/>

</div>


<div className="grid grid-cols-3 gap-3">

{images.map((img,index)=>(

<button
key={index}
onClick={()=>setMainImage(img)}
className="rounded-xl overflow-hidden border hover:opacity-80 transition"
>

<img
src={img}
alt={`Piso ${index+1}`}
className="w-full h-24 object-cover"
/>

</button>

))}

</div>

</div>



{/* CONTENIDO */}
<div>

<h2 className="text-3xl font-semibold mb-4 text-[#d4af37]">
Colección Piso de Baño
</h2>


<p className="text-gray-500 mb-8 leading-7">
Textiles absorbentes y durables diseñados para hotelería e instituciones.
</p>


{/* CARACTERÍSTICAS */}
<div className="space-y-3 mb-8 text-gray-600">

<div className="border-b border-gray-200 pb-3">
✔ Alta absorción
</div>

<div className="border-b border-gray-200 pb-3">
✔ Diferentes acabados
</div>

<div className="border-b border-gray-200 pb-3">
✔ Uso hotelero e institucional
</div>

</div>


{/* ESPECIFICACIONES */}
<div className="
border border-gray-200
rounded-xl
p-5
mb-6
hover:shadow-md
transition
">

<h3 className="text-lg font-semibold text-[#0f766e] mb-3">
Especificaciones
</h3>

<div className="text-gray-600 space-y-2">

<div>
<strong>Tipo:</strong> Piso de baño
</div>

<div>
<strong>Material:</strong> Algodón / Microfibra
</div>

</div>

</div>


{/* BOTÓN */}
<a
href="https://wa.me/51977602419?text=Hola,%20quiero%20cotizar%20Piso%20de%20baño"
target="_blank"
rel="noopener noreferrer"
className="
inline-block
bg-[#0f766e]
text-white
px-8
py-3
rounded-full
hover:bg-[#115e59]
transition
"
>
Solicitar cotización
</a>

</div>

</div>

</div>

</section>

);

}

export default PisoDeBano;