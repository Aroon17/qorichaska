import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
FaChevronLeft,
FaChevronRight
} from "react-icons/fa";

import hero1 from "../../assets/images/hero1.jpg";
import hero2 from "../../assets/images/hero2.jpg";
import hero3 from "../../assets/images/hero3.jpg";

const slides = [hero1, hero2, hero3];

function HeroSlider() {

const [current,setCurrent]=useState(0);

const nextSlide=()=>{
setCurrent((prev)=>(prev+1)%slides.length);
};

const prevSlide=()=>{
setCurrent((prev)=>(prev-1+slides.length)%slides.length);
};

useEffect(()=>{
const interval=setInterval(nextSlide,5000);
return()=>clearInterval(interval);
},[]);

return(

<section className="relative h-screen overflow-hidden">

{slides.map((slide,index)=>(

<div
key={index}
className={`
absolute inset-0 transition-all duration-1000
${index===current ? "opacity-100 scale-100" : "opacity-0 scale-110"}
`}
>

<img
src={slide}
alt="Hero"
className="w-full h-full object-cover"
/>

{/* OVERLAY PREMIUM */}
<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

</div>

))}



{/* CONTENIDO */}
<div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-4">

<h1 className="text-5xl md:text-6xl font-serif font-semibold mb-4 tracking-wide">
Elegancia para tu Hogar
</h1>

<p className="text-lg md:text-xl max-w-2xl mb-8 text-gray-200">
Textiles premium diseñados para brindar confort, lujo y estilo.
</p>


<Link
to="/catalogo"
className="
bg-[#0f766e]
hover:bg-[#115e59]
px-8
py-4
rounded-full
text-lg
font-semibold
shadow-lg
hover:shadow-xl
transition
"
>
Ver Catálogo
</Link>

</div>



{/* FLECHA IZQUIERDA */}
<button
onClick={prevSlide}
className="
absolute left-5 top-1/2 -translate-y-1/2 z-20
bg-white/10 backdrop-blur-md
p-3 rounded-full text-white
hover:bg-white/20 transition
"
>
<FaChevronLeft/>
</button>



{/* FLECHA DERECHA */}
<button
onClick={nextSlide}
className="
absolute right-5 top-1/2 -translate-y-1/2 z-20
bg-white/10 backdrop-blur-md
p-3 rounded-full text-white
hover:bg-white/20 transition
"
>
<FaChevronRight/>
</button>



{/* DOTS */}
<div className="absolute bottom-8 w-full flex justify-center gap-3 z-20">

{slides.map((_,index)=>(

<button
key={index}
onClick={()=>setCurrent(index)}
className={`
w-3 h-3 rounded-full transition

${current===index
? "bg-[#0f766e] scale-110"
: "bg-white/70"
}
`}
/>

))}

</div>

</section>

);

}

export default HeroSlider;