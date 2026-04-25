import { useState } from "react";

import img1 from "../../assets/images/amenities/amenities1.jpg";
import img2 from "../../assets/images/amenities/amenities2.jpg";
import img3 from "../../assets/images/amenities/amenities3.jpg";
import img4 from "../../assets/images/amenities/amenities4.jpg";
import img5 from "../../assets/images/amenities/amenities5.jpg";
import img6 from "../../assets/images/amenities/amenities6.jpg";
import img7 from "../../assets/images/amenities/amenities7.jpg";
import img8 from "../../assets/images/amenities/amenities8.jpg";
import img9 from "../../assets/images/amenities/amenities9.jpg";
import img10 from "../../assets/images/amenities/amenities10.jpg";
import img11 from "../../assets/images/amenities/amenities11.jpg";
import img12 from "../../assets/images/amenities/amenities12.jpg";
import img13 from "../../assets/images/amenities/amenities13.jpg";

function Amenities() {

const images = [
img1,img2,img3,img4,img5,img6,img7,
img8,img9,img10,img11,img12,img13
];

const [mainImage,setMainImage] = useState(img1);

return(

<section className="py-20 bg-white min-h-screen">

<div className="max-w-7xl mx-auto px-6">

{/* TITULO */}
<h1 className="text-5xl font-serif text-[#0f766e] mb-12">
Amenities
</h1>


<div className="grid md:grid-cols-2 gap-14 items-start">


{/* IMÁGENES */}
<div>

<div className="bg-gray-100 rounded-3xl overflow-hidden mb-6">

<img
src={mainImage}
alt="Amenities"
className="w-full h-[420px] object-cover"
/>

</div>


<div className="grid grid-cols-3 gap-3 max-h-[420px] overflow-auto pr-1">

{images.map((img,index)=>(
<button
key={index}
onClick={()=>setMainImage(img)}
className="rounded-xl overflow-hidden border hover:opacity-80 transition"
>
<img
src={img}
alt={`Amenities ${index+1}`}
className="w-full h-24 object-cover"
/>
</button>
))}

</div>

</div>



{/* CONTENIDO */}
<div>

<h2 className="text-3xl font-semibold mb-4 text-[#d4af37]">
Colección de Amenities
</h2>


<p className="text-gray-500 mb-8 leading-7">
Amenities diseñados para hoteles, clínicas e instituciones públicas.
</p>


{/* CARACTERÍSTICAS */}
<div className="space-y-3 mb-8 text-gray-600">

<div className="border-b border-gray-200 pb-3">
✔ Calidad premium
</div>

<div className="border-b border-gray-200 pb-3">
✔ Presentación institucional
</div>

<div className="border-b border-gray-200 pb-3">
✔ Uso hotelero y clínico
</div>

</div>


{/* PRESENTACIÓN */}
<div className="
border border-gray-200
rounded-xl
p-5
mb-6
hover:shadow-md
transition
">

<h3 className="text-lg font-semibold text-[#0f766e] mb-3">
Presentación
</h3>

<ul className="text-gray-600 space-y-2">

<li>• Jabón en cajita: 10gr, 15gr y 20gr</li>
<li>• Shampoo en sachet: 10gr, 15gr y 20gr</li>
<li>• Jabón plisado: 15gr y 20gr</li>
<li>• Jabón y shampoo en frasco: 20gr y 30gr</li>

</ul>

</div>


{/* PERSONALIZACIÓN */}
<div className="
border border-gray-200
rounded-xl
p-5
mb-8
hover:shadow-md
transition
">

<h3 className="text-lg font-semibold text-[#0f766e] mb-2">
Personalización
</h3>

<p className="text-gray-500">
Todos los productos pueden incluir el logo de su empresa.
</p>

</div>


{/* BOTÓN */}
<a
href="https://wa.me/51977602419?text=Hola,%20quiero%20cotizar%20Amenities"
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

export default Amenities;