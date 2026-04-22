import { FaWhatsapp } from "react-icons/fa";

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/51977602419"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full text-3xl shadow-xl z-50 animate-bounce"
    >
      <FaWhatsapp />
    </a>
  );
}

export default WhatsAppButton;