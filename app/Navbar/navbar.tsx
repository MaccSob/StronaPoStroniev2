
import Link from 'next/link';
import { ThemeToggle } from '../theme-toggle';

export default function Navbar() {
  return (
  
    <>
    <nav className='fixed top-0 w-full flex items-center justify-around py-5 px-24 border-b border-gray-700 bg-white dark:bg-black text-black dark:text-white transition-all duration-750 ease-out'>


    <Link href='/' className='text-black-300 hover:text-green transition-colors text-1xm font-medium '>
    Logo 
    </Link>

    <ul className='flex gap-10 text-lg'>


    <Link href='/about' className='text-black-300 hover:text-green transition-colors text-1xm font-medium relative after:bg-green-400 after:absolute after:h-1 after:w-0 after:bottom-2 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer'>
        O mnie
    </Link>





     <Link href='/portfolio' className='text-black-300 hover:text-green transition-colors text-1xm font-medium relative after:bg-green-400 after:absolute after:h-1 after:w-0 after:bottom-2 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer' >
        Portfolio
    </Link>


     <Link href='/contact' className='text-black-300 hover:text-green transition-colors text-1xm font-medium relative after:bg-green-400 after:absolute after:h-1 after:w-0 after:bottom-2 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer'>
        Kontakt
    </Link>




        <Link href='/products' className='text-black-300 hover:text-green transition-colors text-1xm font-medium relative after:bg-green-400 after:absolute after:h-1 after:w-0 after:bottom-2 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer'>
        Oferta
    </Link>
 
     <div className="space-x-2">
     </div>
     <ThemeToggle></ThemeToggle>
    </ul>


    </nav>



    </>

  );
}
