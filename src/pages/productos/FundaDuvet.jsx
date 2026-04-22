import { useState } from "react";

import img1 from "../../../assets/images/funda/funda1.jpg";
import img2 from "../../../assets/images/funda/funda2.jpg";
import img3 from "../../../assets/images/funda/funda3.jpg";
import img4 from "../../../assets/images/funda/funda4.jpg";
import img5 from "../../../assets/images/funda/funda5.jpg";
import img6 from "../../../assets/images/funda/funda6.jpg";
import img7 from "../../../assets/images/funda/funda7.jpg";
import img8 from "../../../assets/images/funda/funda8.jpg";
import img9 from "../../../assets/images/funda/funda9.jpg";

function FundaDuvet() {

const images = [
img1, img2, img3,
img4, img5, img6,
img7, img8, img9
];

const [mainImage, setMainImage] = useState(img1);

return (

<section className="py-20 bg-white min-h-screen">

<div className="max-w-7xl mx-auto px-6">

{/* TITULO */}
<h1 className="text-5xl font-serif text-[#0f766e] mb-12">
Funda Duvet
</h1>


<div className="grid md:grid-cols-2 gap-14 items-start">


{/* IMÁGENES */}
<div>

<div className="bg-gray-100 rounded-3xl overflow-hidden mb-6">

<img
src={mainImage}
alt="Funda Duvet"
className="w-full h-[450px] object-cover"
/>

</div>


<div className="grid grid-cols-3 gap-3">

{images.map((img, index) => (

<button
key={index}
onClick={() => setMainImage(img)}
className="rounded-xl overflow-hidden border hover:opacity-80 transition"
>

<img
src={img}
alt={`Funda ${index + 1}`}
className="w-full h-24 object-cover"
/>

</button>

))}

</div>

</div>



{/* CONTENIDO */}
<div>

<h2 className="text-3xl font-semibold mb-4 text-[#0f766e]">
Colección Funda Duvet
</h2>

<p className="text-gray-600 mb-8 leading-7">
Fundas duvet diseñadas para brindar elegancia, protección y confort en hotelería e instituciones.
</p>


{/* CARACTERÍSTICAS */}
<div className="space-y-3 mb-8 text-gray-600">

<div className="border-b pb-3">
✔ Alta calidad textil
</div>

<div className="border-b pb-3">
✔ Uso hotelero e institucional
</div>

<div className="border-b pb-3">
✔ Acabados profesionales
</div>

</div>


{/* ESPECIFICACIONES */}
<div className="
border
border-gray-200
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
<strong>Presentación:</strong>
<ul className="ml-4 list-disc">
<li>Con botones</li>
<li>Con cierre</li>
</ul>
</div>

<div>
<strong>Material:</strong> Perú Pima
</div>

</div>

</div>


{/* BOTÓN */}
<a
href="https://wa.me/51977602419?text=Hola,%20quiero%20cotizar%20Funda%20Duvet"
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

export default FundaDuvet;