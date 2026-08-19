import { FaPenFancy, FaCheck } from "react-icons/fa6";
import { PiEyeglasses } from "react-icons/pi";
import { MdOutlineComputer } from "react-icons/md";

export default function Products() {
  return (
    <div className="min-h-screen flex items-center justify-center mx-auto p-4 sm:p-6 md:p-12">
      <div className="space-y-12 max-w-7xl w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-left">
          
          <div className="bg-white dark:bg-gray-800/80 rounded-2xl border border-gray-200/80 dark:border-gray-700 p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-all">
            <div>
              <div className="w-12 h-12 rounded-xl bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-400 flex items-center justify-center mb-6">
                <PiEyeglasses size={28} />
              </div>
              <h2 className="text-gray-900 dark:text-white text-2xl font-bold mb-3">
                Redakcja
              </h2>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-6">
                Pierwsze, gruntowne czytanie. Skupienie na logice, stylu i atrakcyjności przekazu.
              </p>
              
              <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300 mb-8">
                <li className="flex items-start gap-3">
                  <FaCheck className="text-green-600 dark:text-green-400 shrink-0 mt-1 text-xs" />
                  <span>Korekta merytoryczna, logiczna i stylistyczna</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheck className="text-green-600 dark:text-green-400 shrink-0 mt-1 text-xs" />
                  <span>Sugerowanie zmian z perspektywy czytelnika</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheck className="text-green-600 dark:text-green-400 shrink-0 mt-1 text-xs" />
                  <span>Eliminacja powtórzeń, błędów i nieścisłości</span>
                </li>
              </ul>
            </div>

            <div className="pt-6 border-t border-gray-100 dark:border-gray-700/60 flex flex-col gap-2">
              <div className="flex items-baseline justify-between">
                <span className="text-xs text-gray-500 dark:text-gray-400">Strona znormalizowana*</span>
                <span className="text-base font-bold text-gray-900 dark:text-white">od 15 zł</span>
              </div>
              <div className="flex items-baseline justify-between">
                <span className="text-xs text-gray-500 dark:text-gray-400">Arkusz wydawniczy**</span>
                <span className="text-lg font-bold text-green-700 dark:text-green-400">od 180 zł</span>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800/80 rounded-2xl border border-gray-200/80 dark:border-gray-700 p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-all">
            <div>
              <div className="w-12 h-12 rounded-xl bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-400 flex items-center justify-center mb-6">
                <FaPenFancy size={22} />
              </div>
              <h2 className="text-gray-900 dark:text-white text-2xl font-bold mb-3">
                Korekta
              </h2>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-6">
                Drugie czytanie. Wyłapywanie szlifujących błędów językowych i składu.
              </p>

              <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300 mb-8">
                <li className="flex items-start gap-3">
                  <FaCheck className="text-green-600 dark:text-green-400 shrink-0 mt-1 text-xs" />
                  <span>Poprawa interpunkcji, leksyki i składni</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheck className="text-green-600 dark:text-green-400 shrink-0 mt-1 text-xs" />
                  <span>Wyłapywanie błędów DTP (bękarty, szewce, wdowy)</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheck className="text-green-600 dark:text-green-400 shrink-0 mt-1 text-xs" />
                  <span>Weryfikacja prawidłowej paginacji stron</span>
                </li>
              </ul>
            </div>

            <div className="pt-6 border-t border-gray-100 dark:border-gray-700/60 flex flex-col gap-2">
              <div className="flex items-baseline justify-between">
                <span className="text-xs text-gray-500 dark:text-gray-400">Strona znormalizowana*</span>
                <span className="text-base font-bold text-gray-900 dark:text-white">od 10 zł</span>
              </div>
              <div className="flex items-baseline justify-between">
                <span className="text-xs text-gray-500 dark:text-gray-400">Arkusz wydawniczy**</span>
                <span className="text-lg font-bold text-green-700 dark:text-green-400">od 140 zł</span>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800/80 rounded-2xl border border-gray-200/80 dark:border-gray-700 p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-all">
            <div>
              <div className="w-12 h-12 rounded-xl bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-400 flex items-center justify-center mb-6">
                <MdOutlineComputer size={26} />
              </div>
              <h2 className="text-gray-900 dark:text-white text-2xl font-bold mb-3">
                Skład DTP
              </h2>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-6">
                Kompleksowe przygotowanie tekstu do druku oraz publikacji cyfrowych.
              </p>

              <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300 mb-8">
                <li className="flex items-start gap-3">
                  <FaCheck className="text-green-600 dark:text-green-400 shrink-0 mt-1 text-xs" />
                  <span>Dobór kroju, stopnia pisma i interlinii</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheck className="text-green-600 dark:text-green-400 shrink-0 mt-1 text-xs" />
                  <span>Ustalanie marginesów i układu kolumn</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheck className="text-green-600 dark:text-green-400 shrink-0 mt-1 text-xs" />
                  <span>Projektowanie elementów dodatkowych</span>
                </li>
              </ul>
            </div>

            <div className="pt-6 border-t border-gray-100 dark:border-gray-700/60 flex flex-col gap-2">
              <div className="flex items-baseline justify-between">
                <span className="text-xs text-gray-500 dark:text-gray-400">Arkusz wydawniczy**</span>
                <span className="text-lg font-bold text-green-700 dark:text-green-400">od 100 zł</span>
              </div>
            </div>
          </div>

        </div>

        {/* Dolna sekcja informacyjna */}
        <div className="bg-gray-50 dark:bg-gray-800/40 p-6 sm:p-8 rounded-2xl border border-gray-200/80 dark:border-gray-700/60 grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
          
          <div className="space-y-3 lg:border-r lg:border-gray-200 dark:lg:border-gray-700/60 lg:pr-6">
            <div>
              <span className="inline-block px-2.5 py-0.5 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-md text-xs font-semibold mb-1">
                * Strona znormalizowana
              </span>
              <p className="text-xs text-gray-500 dark:text-gray-400">1 800 znaków ze spacjami</p>
            </div>

            <div>
              <span className="inline-block px-2.5 py-0.5 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-md text-xs font-semibold mb-1">
                ** Arkusz wydawniczy
              </span>
              <p className="text-xs text-gray-500 dark:text-gray-400">40 000 znaków ze spacjami</p>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-2 text-sm text-gray-600 dark:text-gray-300">
            <h4 className="text-base font-semibold text-gray-900 dark:text-white">Jak wygląda wycena indywidualna?</h4>
            <p className="leading-relaxed text-xs sm:text-sm">
              Podane ceny są orientacyjne. Do przygotowania dokładnej wyceny potrzebuję informacji o rodzaju treści, liczbie znaków oraz terminie. 
            </p>
            <p className="text-xs text-green-700 dark:text-green-400 font-medium">
               Możesz przesłać próbkę tekstu (3000–5000 znaków), aby bezpłatnie poznać wycenę oraz zakres prac.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}