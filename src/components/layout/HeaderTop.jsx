import {
  MapPin,
  Phone
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaTiktok
} from "react-icons/fa";

function HeaderTop() {

return(

<div className="
bg-[#0f766e]
text-white
text-sm
border-b
border-white/20
">

<div className="
max-w-7xl
mx-auto
px-6
py-3
flex
flex-col
md:flex-row
justify-between
items-center
gap-4
">


{/* IZQUIERDA */}
<div className="flex flex-wrap items-center gap-6">

<div className="flex items-center gap-2">
<MapPin size={16}/>
<span>Jr. Alexander Von Humboldt 1206 - La Victoria</span>
</div>

<a
href="https://wa.me/51977602419"
target="_blank"
rel="noopener noreferrer"
className="flex items-center gap-2"
>
<Phone size={16}/>
<span>+51 977 602 419</span>
</a>

</div>



{/* REDES */}
<div className="flex items-center gap-4">

{/* FACEBOOK */}
<a
href="https://www.facebook.com/share/1CGUAwpfiS/?mibextid=wwXIfr"
target="_blank"
rel="noopener noreferrer"
className="
bg-white/20
p-2
rounded-full
hover:bg-[#1877f2]
hover:text-white
hover:scale-110
transition
"
>
<FaFacebookF size={14}/>
</a>


{/* INSTAGRAM */}
<a
href="https://www.instagram.com/qorichaskaa?igsh=ODJsb2d4NDJ3NHY0"
target="_blank"
rel="noopener noreferrer"
className="
bg-white/20
p-2
rounded-full
hover:bg-gradient-to-tr hover:from-pink-500 hover:via-red-500 hover:to-yellow-500
hover:text-white
hover:scale-110
transition
"
>
<FaInstagram size={14}/>
</a>


{/* TIKTOK */}
<a
href="https://www.tiktok.com/@qorichaskaperu?_r=1&_t=ZS-95kvmBYQxa0"
target="_blank"
rel="noopener noreferrer"
className="
bg-white/20
p-2
rounded-full
hover:bg-black
hover:text-white
hover:scale-110
transition
"
>
<FaTiktok size={14}/>
</a>


{/* WHATSAPP */}
<a
href="https://wa.me/51977602419"
target="_blank"
rel="noopener noreferrer"
className="
bg-white
text-[#0f766e]
px-4
py-2
rounded-full
font-medium
flex
items-center
gap-2
hover:bg-green-500
hover:text-white
hover:scale-105
transition
"
>
<FaWhatsapp/>
WhatsApp
</a>

</div>

</div>

</div>

);

}

export default HeaderTop;