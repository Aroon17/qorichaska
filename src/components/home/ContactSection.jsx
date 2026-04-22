import { useState } from "react";

import {
  MapPin,
  Mail,
  Phone,
  Clock3,
  ShieldCheck,
  Truck,
  HeartHandshake
} from "lucide-react";

function ContactSection() {

const [form,setForm]=useState({
  nombre:"",
  email:"",
  telefono:"",
  asunto:"",
  mensaje:""
});

const [errors,setErrors]=useState({});


/* =========================
   VALIDACIÓN ESTRICTA
========================= */
const validateForm = () => {

let newErrors = {};

if(form.nombre.trim().length < 3){
  newErrors.nombre = "Ingresa un nombre válido";
}

if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)){
  newErrors.email = "Correo inválido";
}

// Perú: 9 dígitos empezando en 9
if(!/^9\d{8}$/.test(form.telefono)){
  newErrors.telefono = "Debe ser un número válido (9 dígitos)";
}

if(form.asunto.trim().length < 5){
  newErrors.asunto = "Describe mejor el asunto";
}

if(form.mensaje.trim().length < 10){
  newErrors.mensaje = "El mensaje es muy corto";
}

setErrors(newErrors);

return Object.keys(newErrors).length === 0;
};


/* =========================
   WHATSAPP
========================= */
const handleSubmit=(e)=>{
  e.preventDefault();

  if(!validateForm()) return;

  const mensaje = `
Hola 👋, quiero información:

👤 Nombre: ${form.nombre}
📧 Email: ${form.email}
📱 Teléfono: ${form.telefono}

📌 Asunto:
${form.asunto}

📝 Mensaje:
${form.mensaje}
  `;

  const url = `https://wa.me/51977602419?text=${encodeURIComponent(mensaje)}`;

  // 🔥 REDIRECCIÓN SEGURA (SIEMPRE FUNCIONA)
  window.location.href = url;
};


return(

<section className="py-28 bg-gradient-to-b from-[#f0fdfa] to-white">

<div className="max-w-7xl mx-auto px-6">

{/* TITULO */}
<div className="text-center mb-16">

<h2 className="text-5xl font-serif text-[#0f766e] mb-5">
Cotiza por WhatsApp
</h2>

<p className="text-gray-600 text-lg">
Completa el formulario y serás redirigido 📲
</p>

</div>


<div className="grid lg:grid-cols-2 gap-14 items-start">


{/* INFO */}
<div className="space-y-8">

<div className="bg-white rounded-3xl shadow-xl p-8 space-y-6">

<div className="flex gap-4">
<MapPin className="text-[#0f766e]"/>
<p>Jr. Alexander Von Humboldt 1206, La Victoria</p>
</div>

<div className="flex gap-4">
<Mail className="text-[#0f766e]"/>
<p>ventas@qorichaska.com</p>
</div>

<div className="flex gap-4">
<Phone className="text-[#0f766e]"/>
<p>+51 977 602 419</p>
</div>

<div className="flex gap-4">
<Clock3 className="text-[#0f766e]"/>
<p>Lun - Vie 9:00 am a 6:00 pm</p>
</div>

</div>


<div className="grid md:grid-cols-3 gap-5">

<div className="bg-white rounded-2xl shadow-md p-6 text-center">
<Truck className="mx-auto text-[#0f766e] mb-4"/>
<h4 className="font-semibold">Envíos nacionales</h4>
<p className="text-sm text-gray-500">Todo el Perú</p>
</div>

<div className="bg-white rounded-2xl shadow-md p-6 text-center">
<ShieldCheck className="mx-auto text-[#0f766e] mb-4"/>
<h4 className="font-semibold">Compra segura</h4>
<p className="text-sm text-gray-500">Pagos protegidos</p>
</div>

<div className="bg-white rounded-2xl shadow-md p-6 text-center">
<HeartHandshake className="mx-auto text-[#0f766e] mb-4"/>
<h4 className="font-semibold">Calidad premium</h4>
<p className="text-sm text-gray-500">Altos estándares</p>
</div>

</div>

</div>



{/* FORM */}
<div className="bg-white shadow-xl rounded-3xl p-10 border">

<form onSubmit={handleSubmit} className="space-y-5">

{/* NOMBRE */}
<input
placeholder="Nombre completo"
value={form.nombre}
onChange={(e)=>setForm({...form,nombre:e.target.value})}
className="w-full border rounded-xl p-4"
/>
{errors.nombre && <p className="text-red-500 text-sm">{errors.nombre}</p>}


{/* EMAIL */}
<input
placeholder="Correo electrónico"
value={form.email}
onChange={(e)=>setForm({...form,email:e.target.value})}
className="w-full border rounded-xl p-4"
/>
{errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}


{/* TELÉFONO */}
<input
type="tel"
placeholder="Teléfono (Ej: 977602419)"
value={form.telefono}
onChange={(e)=>{
  const value = e.target.value.replace(/\D/g,"");
  setForm({...form,telefono:value});
}}
className="w-full border rounded-xl p-4"
/>
{errors.telefono && <p className="text-red-500 text-sm">{errors.telefono}</p>}


{/* ASUNTO */}
<input
placeholder="Asunto"
value={form.asunto}
onChange={(e)=>setForm({...form,asunto:e.target.value})}
className="w-full border rounded-xl p-4"
/>
{errors.asunto && <p className="text-red-500 text-sm">{errors.asunto}</p>}


{/* MENSAJE */}
<textarea
rows="5"
placeholder="Escribe tu consulta..."
value={form.mensaje}
onChange={(e)=>setForm({...form,mensaje:e.target.value})}
className="w-full border rounded-xl p-4"
/>
{errors.mensaje && <p className="text-red-500 text-sm">{errors.mensaje}</p>}


{/* BOTÓN */}
<button
className="w-full bg-[#0f766e] hover:bg-[#115e59] text-white py-4 rounded-full font-semibold"
>
ENVIAR Y ABRIR WHATSAPP
</button>

</form>

</div>

</div>

</div>

</section>

);

}

export default ContactSection;