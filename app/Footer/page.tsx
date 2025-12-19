import Link from 'next/link'
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="bg-white text-black p-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h3 className="font-bold mb-3">Sklep</h3>
          <ul>
            <li>
              <Link href="#">
                <span className="cursor-pointer hover:underline">loor</span>
              </Link>
            </li>
            <li>
              <Link href="#">
                <span className="cursor-pointer hover:underline">loor</span>
              </Link>
            </li>
            <li>
              <Link href="#">
                <span className="cursor-pointer hover:underline">loor</span>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-3">Informacje</h3>
          <ul>
            <li>
              <Link href="/about">
                <span className="cursor-pointer hover:underline">O mnie</span>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <span className="cursor-pointer hover:underline">Kontakt</span>
              </Link>
            </li>
            <li>
              <Link href="/policy">
                <span className="cursor-pointer hover:underline">Polityka prywatności</span>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-3">Social media</h3>
          <ul>
            <li>
              <Link href="/account/orders">
                <span className="cursor-pointer hover:underline"> <FaInstagram size={25}/> </span>
              </Link>
            </li>
            <li>
              <Link href="/account/settings">
                <span className="cursor-pointer hover:underline"> <FaFacebook size={25}/> </span>
              </Link>
            </li>
            <li>
              <Link href="/account/help">
                <span className="cursor-pointer hover:underline">?</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center pt-8 border-t border-gray-700 mt-8">
        <p>&copy; {new Date().getFullYear()} Strona po Stronie Wszelkie prawa zastrzeżone.</p>
      </div>
    </footer>
  );
};

export default Footer;