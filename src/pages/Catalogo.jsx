import { useState } from "react";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";

// IMÁGENES
import almohadas from "../assets/images/almohadas/Almohadas1.jpg";
import amenities from "../assets/images/amenities/Amenities1.jpg";
import batas from "../assets/images/batas/Batas1.jpg";
import edredones from "../assets/images/edredones/Edredones1.jpg";
import manta from "../assets/images/manta/Manta1.jpg";
import piecama from "../assets/images/piecama/Pie1.jpg";
import piso from "../assets/images/piso/Piso1.jpg";
import protector from "../assets/images/protector/Proctetor1.jpg";
import sabanas from "../assets/images/sabanas/Sábanas1.jpg";
import toallas from "../assets/images/toallas/Toallas1.jpg";
import funda from "../assets/images/funda/Funda1.jpg"; // 👈 NUEVO

function Catalogo() {

  const [search, setSearch] = useState("");

  const productos = [

    { nombre: "Almohadas", img: almohadas, ruta: "/almohadas", desc: "Confort y durabilidad" },
    { nombre: "Amenities", img: amenities, ruta: "/amenities", desc: "Línea hotelera premium" },
    { nombre: "Batas de baño", img: batas, ruta: "/batas-bano", desc: "Suavidad y elegancia" },
    { nombre: "Edredones", img: edredones, ruta: "/edredones", desc: "Abrigo y confort" },
    { nombre: "Manta polar", img: manta, ruta: "/manta-polar", desc: "Calidez y suavidad" },
    { nombre: "Pie de cama", img: piecama, ruta: "/pie-de-cama", desc: "Diseño decorativo" },
    { nombre: "Piso de baño", img: piso, ruta: "/piso-de-bano", desc: "Alta absorción" },
    { nombre: "Protector de colchón", img: protector, ruta: "/protector-colchon", desc: "Protección e higiene" },
    { nombre: "Sábanas", img: sabanas, ruta: "/sabanas", desc: "Calidad hotelera" },
    { nombre: "Toallas", img: toallas, ruta: "/toallas", desc: "100% algodón" },
    { nombre: "Funda Duvet", img: funda, ruta: "/funda-duvet", desc: "Elegancia y protección premium" } // 👈 NUEVO

  ];

  return (

    <>

      {/* HERO */}
      <section className="py-20 bg-white text-center">

        <h1 className="text-5xl font-serif text-[#0f766e] mb-6">
          Nuestro Catálogo
        </h1>

        <p className="text-gray-500 text-lg mb-10">
          Explora nuestras líneas textiles premium
        </p>

        <div className="max-w-md mx-auto relative">

          <Search className="absolute left-4 top-4 text-gray-400" />

          <input
            type="text"
            placeholder="Buscar producto..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="
              w-full
              pl-12
              pr-4
              py-4
              border
              rounded-full
              outline-none
              focus:ring-2 focus:ring-[#0f766e]
            "
          />

        </div>

      </section>



      {/* GRID */}
      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

            {productos
              .filter((item) =>
                item.nombre.toLowerCase().includes(search.toLowerCase())
              )
              .map((item, index) => (

                <Link
                  key={index}
                  to={item.ruta}
                  className="
                    group
                    border
                    border-gray-200
                    rounded-2xl
                    overflow-hidden
                    hover:shadow-md
                    hover:-translate-y-1
                    transition
                  "
                >

                  {/* IMAGEN */}
                  <div className="bg-gray-100 overflow-hidden">

                    <img
                      src={item.img}
                      alt={item.nombre}
                      className="
                        w-full
                        h-[300px]
                        object-cover
                        group-hover:scale-105
                        transition
                        duration-500
                      "
                    />

                  </div>


                  {/* CONTENIDO */}
                  <div className="p-6 text-center">

                    <h2 className="text-xl font-semibold text-gray-800 mb-2">
                      {item.nombre}
                    </h2>

                    <p className="text-gray-500 mb-5 text-sm">
                      {item.desc}
                    </p>

                    <span className="
                      inline-block
                      bg-[#0f766e]
                      text-white
                      px-6
                      py-2
                      rounded-full
                      text-sm
                      hover:bg-[#115e59]
                      transition
                    ">
                      Ver colección
                    </span>

                  </div>

                </Link>

              ))}

          </div>

        </div>

      </section>

    </>

  );

}

export default Catalogo;