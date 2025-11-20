import './navbar.scss';
import Link from 'next/link';

export default function Navbar() {
  return (
  
    <>
    <nav className='fixed top-0 w-full flex items-center justify-around py-5 px-24 border-b border-gray-700 bg-white'>

<a className="group text-black-500 transition-all duration-300 ease-in-out">
  <span className="bg-left-bottom bg-gradient-to-r from-black-500 to-green-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">

    <Link href='/' className='transition duration-300 hover:scale:-120'>
    Home 
    </Link>
  </span>
</a>

    <ul className='flex gap-10 text-lg'>

<a className="group text-black-500 transition-all duration-300 ease-in-out">
  <span className="bg-left-bottom bg-gradient-to-r from-black-500 to-green-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">

    <Link href='/about' className='text-black-300 hover:text-green transition-colors'>
        O mnie
    </Link>

  </span>
</a>

<a className="group text-black-500 transition-all duration-300 ease-in-out">
  <span className="bg-left-bottom bg-gradient-to-r from-black-500 to-green-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">

     <Link href='/portfolio' className='text-black-300 hover:text-green transition-colors'>
        Portfolio
    </Link>

  </span>
</a>
<a className="group text-black-500 transition-all duration-300 ease-in-out">
  <span className="bg-left-bottom bg-gradient-to-r from-black-500 to-green-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">

     <Link href='/contact' className='text-black-300 hover:text-green transition-colors'>
        Kontakt
    </Link>

  </span>
</a>
<a className="group text-black-500 transition-all duration-300 ease-in-out">
  <span className="bg-left-bottom bg-gradient-to-r from-black-500 to-green-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">


        <Link href='/products' className='text-black-300 hover:text-green transition-colors'>
        Oferta
    </Link>
  </span>
</a>


    </ul>


    </nav>



    </>

  );
}
