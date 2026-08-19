import Link from 'next/link'
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-white text-black p-10 dark:bg-black dark:text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        
        <div>
          <h3 className="font-bold mb-3">Strona Po Stronie</h3>
          <ul className="space-y-2">
            <li><Link href="/"><span className="cursor-pointer hover:underline">Strona główna</span></Link></li>
            <li><Link href="/products"><span className="cursor-pointer hover:underline">Cennik</span></Link></li>
            <li><Link href="/portfolio"><span className="cursor-pointer hover:underline">Portfolio</span></Link></li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-bold mb-3">Informacje</h3>
          <ul className="space-y-2">
            <li><Link href="/about"><span className="cursor-pointer hover:underline">O mnie</span></Link></li>
            <li><Link href="/contact"><span className="cursor-pointer hover:underline">Kontakt</span></Link></li>
            <li><Link href="/policy"><span className="cursor-pointer hover:underline">Polityka prywatności</span></Link></li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-bold mb-3">Social media</h3>
          <ul className="flex flex-col gap-2 pl-0 sm:pl-8">
            <li>
              <Link href="https://instagram.com/izabela_stronapostronie" target="_blank" rel="noopener noreferrer">
                <span className="inline-block cursor-pointer hover:text-green-600 transition-colors"> 
                  <FaInstagram size={26}/> 
                </span>
              </Link>
            </li>
            <li>
              <Link href="https://facebook.com/people/Strona-po-stronie/61555588812737/" target="_blank" rel="noopener noreferrer">
                <span className="inline-block cursor-pointer hover:text-green-600 transition-colors"> 
                  <FaFacebook size={26}/> 
                </span>
              </Link>
            </li>
             <li>
              <Link href="https://linkedin.com/in/izabela-sobolewska-3407a3290" target="_blank" rel="noopener noreferrer">
                <span className="inline-block cursor-pointer hover:text-green-600 transition-colors"> 
                  <FaLinkedin size={26}/> 
                </span>
              </Link>
            </li>
          </ul>
        </div>
        
      </div>
      
      <div className="text-center pt-8 border-t border-gray-200 dark:border-gray-800 mt-8">
        <p>&copy; {new Date().getFullYear()} Strona po Stronie. Wszelkie prawa zastrzeżone.</p>
      </div>
    </footer>
  );
};

export default Footer;