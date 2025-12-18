import Link from 'next/link'
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";


export default function Footer() {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
               <Link href="#">
            <FaInstagram />
          </Link>
                 <Link href="#">
            <FaFacebook />
          </Link>
        </div>
        <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">          <div>{` • `}</div>
          <div>{`© Strona po stronie ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
        </div>
        <div className="mb-8 text-sm text-gray-500 dark:text-gray-400">
        </div>
      </div>
    </footer>
  )
}