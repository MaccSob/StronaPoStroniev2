import Review from "./Review";
import './styles/products.scss'
import CookieConsentBanner from './CookieConsentBanner'
import Link from "next/link";
export default function Home() {
  return (


    
  
<div className="min-h-screen flex items-center justify-center bg-white dark:text-white dark:bg-[#1c1b22] transition-all duration-300 py-12 px-4">
  <div className="space-y-12 max-w-5xl w-full">
    
    <section className="text-center space-y-8">
      <div className="space-y-4 max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          Profesjonalna korekta i estetyczny skład tekstu
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Chcesz, aby Twoje treści były dopracowane, bezbłędne i przyjemne w odbiorze? Jestem tu, aby Ci w tym pomóc.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left my-8">
        <div className="p-6 rounded-xl bg-gray-50 dark:bg-[#1c202b] border border-gray-100 dark:border-gray-800">
          <h2 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">Korekta i redakcja</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Zadbam o poprawność językową, ortograficzną i spójność Twoich książek, artykułów oraz prac dyplomowych.
          </p>
        </div>
        
        <div className="p-6 rounded-xl bg-gray-50 dark:bg-[#1c202b] border border-gray-100 dark:border-gray-800">
          <h2 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">Skład do druku</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Odpowiednio ułożę tekst na stronie, dobiorę fonty, marginesy i odstępy, gwarantując profesjonalny wygląd publikacji.
          </p>
        </div>

        <div className="p-6 rounded-xl bg-gray-50 dark:bg-[#1c202b] border border-gray-100 dark:border-gray-800">
          <h2 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">E-booki i cyfra</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Przygotuję Twoją publikację do formatów cyfrowych (EPUB, MOBI), dając gwarancję wygody czytania na każdym urządzeniu.
          </p>
        </div>
      </div>

      <div className="pt-2">
        <Link
          href="/contact"
          className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-[#016630] hover:bg-green-700 rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
        >
          Skontaktuj się ze mną
        </Link>
      </div>
    </section>
    <Review />
    <CookieConsentBanner />
  </div>
</div>

  );
}
