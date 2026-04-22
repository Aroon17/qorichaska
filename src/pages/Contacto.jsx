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

  const [form, setForm] = useState({
    nombre: "",
    email: "",
    telefono: "",
    asunto: "",
    mensaje: ""
  });

  const [errors, setErrors] = useState({});

  /* =========================
     VALIDACIÓN
  ========================= */
  const validateForm = () => {

    let newErrors = {};

    if (form.nombre.trim().length < 3) {
      newErrors.nombre = "Nombre inválido";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Email inválido";
    }

    if (!/^9\d{8}$/.test(form.telefono)) {
      newErrors.telefono = "Debe ser un número válido (9 dígitos)";
    }

    if (form.asunto.trim().length < 5) {
      newErrors.asunto = "Asunto muy corto";
    }

    if (form.mensaje.trim().length < 10) {
      newErrors.mensaje = "Mensaje muy corto";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };


  /* =========================
     WHATSAPP
  ========================= */
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

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

    // 🔥 SIEMPRE FUNCIONA
    window.location.href = url;
  };


  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-serif text-[#0f766e] font-semibold tracking-wide mb-2">
            ¿Quieres una cotización personalizada?
          </h2>

          <p className="max-w-3xl mx-auto text-gray-400 text-lg">
            Nuestro equipo puede ayudarte con soluciones textiles premium.
          </p>
        </div>


        <div className="grid lg:grid-cols-2 gap-14 items-start">


          {/* INFO */}
          <div className="space-y-8">

            <div className="bg-white border border-gray-100 rounded-3xl p-8 space-y-6 shadow-sm">

              <div className="flex gap-4 p-4 rounded-xl hover:bg-[#f0fdfa] transition">
                <MapPin className="text-[#0f766e] mt-1" />
                <div>
                  <h4 className="font-semibold text-lg">Dirección</h4>
                  <p className="text-gray-500">
                    Jr. Alexander Von Humboldt 1206, La Victoria
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-4 rounded-xl hover:bg-[#f0fdfa] transition">
                <Mail className="text-[#0f766e] mt-1" />
                <div>
                  <h4 className="font-semibold text-lg">Correo</h4>
                  <p className="text-gray-500">
                    qorichaskaperu@hotmail.com
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-4 rounded-xl hover:bg-[#f0fdfa] transition">
                <Phone className="text-[#0f766e] mt-1" />
                <div>
                  <h4 className="font-semibold text-lg">WhatsApp</h4>
                  <a
                    href="https://wa.me/51977602419"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-[#0f766e]"
                  >
                    +51 977 602 419
                  </a>
                </div>
              </div>

              <div className="flex gap-4 p-4 rounded-xl hover:bg-[#f0fdfa] transition">
                <Clock3 className="text-[#0f766e] mt-1" />
                <div>
                  <h4 className="font-semibold text-lg">Horario</h4>
                  <p className="text-gray-500">
                    Lun - Sab: 11:00 am a 7:30 pm
                  </p>
                </div>
              </div>

            </div>


            {/* BENEFICIOS */}
            <div className="grid md:grid-cols-3 gap-5">

              <div className="border border-gray-200 rounded-xl p-6 text-center bg-white hover:shadow-md hover:-translate-y-1 transition">
                <Truck className="mx-auto text-[#0f766e] mb-3" />
                <h4 className="font-semibold mb-1">Envíos nacionales</h4>
                <p className="text-sm text-gray-500">Cobertura a todo el Perú</p>
              </div>

              <div className="border border-gray-200 rounded-xl p-6 text-center bg-white hover:shadow-md hover:-translate-y-1 transition">
                <ShieldCheck className="mx-auto text-[#0f766e] mb-3" />
                <h4 className="font-semibold mb-1">Compra segura</h4>
                <p className="text-sm text-gray-500">Pagos protegidos</p>
              </div>

              <div className="border border-gray-200 rounded-xl p-6 text-center bg-white hover:shadow-md hover:-translate-y-1 transition">
                <HeartHandshake className="mx-auto text-[#0f766e] mb-3" />
                <h4 className="font-semibold mb-1">Calidad premium</h4>
                <p className="text-sm text-gray-500">Altos estándares</p>
              </div>

            </div>

          </div>



          {/* FORM */}
          <div className="bg-white border border-gray-100 rounded-3xl p-10 shadow-sm">

            <h3 className="text-2xl font-semibold text-[#0f766e] mb-6">
              Envíanos un mensaje
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">

              <input
                name="nombre"
                value={form.nombre}
                onChange={(e)=>setForm({...form,nombre:e.target.value})}
                placeholder="Nombre *"
                className="w-full border border-gray-200 rounded-xl p-4 bg-gray-50"
              />
              {errors.nombre && <p className="text-red-500 text-sm">{errors.nombre}</p>}

              <input
                name="email"
                value={form.email}
                onChange={(e)=>setForm({...form,email:e.target.value})}
                placeholder="Email *"
                className="w-full border border-gray-200 rounded-xl p-4 bg-gray-50"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

              <input
                name="telefono"
                value={form.telefono}
                onChange={(e)=>{
                  const value = e.target.value.replace(/\D/g,"");
                  setForm({...form,telefono:value});
                }}
                placeholder="Teléfono *"
                className="w-full border border-gray-200 rounded-xl p-4 bg-gray-50"
              />
              {errors.telefono && <p className="text-red-500 text-sm">{errors.telefono}</p>}

              <input
                name="asunto"
                value={form.asunto}
                onChange={(e)=>setForm({...form,asunto:e.target.value})}
                placeholder="Asunto *"
                className="w-full border border-gray-200 rounded-xl p-4 bg-gray-50"
              />
              {errors.asunto && <p className="text-red-500 text-sm">{errors.asunto}</p>}

              <textarea
                name="mensaje"
                rows="5"
                value={form.mensaje}
                onChange={(e)=>setForm({...form,mensaje:e.target.value})}
                placeholder="Mensaje *"
                className="w-full border border-gray-200 rounded-xl p-4 bg-gray-50"
              />
              {errors.mensaje && <p className="text-red-500 text-sm">{errors.mensaje}</p>}

              <button
                className="w-full bg-[#0f766e] hover:bg-[#115e59] text-white py-4 rounded-full font-semibold"
              >
                ENVIAR POR WHATSAPP
              </button>

            </form>

          </div>

        </div>

      </div>

    </section>
  );
}

export default ContactSection;