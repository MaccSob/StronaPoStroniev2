import '../styles/about.scss'
import Image from 'next/image';



export default function About() {
  return (
    <section className="min-h-screen flex items-center justify-center py-12 lg:py-24">
      <div className="w-full max-w-6xl px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-manrope text-gray-800 dark:text-white leading-tight">
              Cześć, nazywam się <span className="text-green-700 dark:text-green-500">Izabela Sobolewska.</span>
            </h2>
            
            <p className="text-lg sm:text-xl font-bold font-manrope text-gray-900 dark:text-gray-100 leading-snug">
              i zajmuję się korektą, redakcją i składem tekstów. Uwielbiam pracować ze słowami i dbać o to, aby każdy tekst był poprawny, czytelny i atrakcyjny.
            </p>
            
            <div className="space-y-4 text-gray-600 dark:text-gray-300 text-base leading-relaxed">
              <p>
                W wolnych chwilach zajmuję się moją kolekcją roślin doniczkowych, która liczy już ponad 50 egzemplarzy. To moja pasja i sposób na relaks. Lubię też czytać książki i grać w gry planszowe, co pozwala mi przeżywać przygody, poznawać nowe historie, a także rozwijać umiejętność logicznego myślenia i strategii. A gdy mam ochotę na coś słodkiego, piekę ciasta i dzielę się nimi z rodziną – znikają w mgnieniu oka.
              </p>
              <p>
                Nieważne, czy piszesz książki, e-booki, prace dyplomowe (doktorskie, magisterskie, licencjackie), tworzysz teksty na strony internetowe, blogi, do social mediów – zawsze warto dbać o poprawność językową, a ja chętnie Ci w tym pomogę. Skontaktuj się ze mną, aby omówić szczegóły i poznać indywidualną ofertę.
              </p>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end w-full">
            <div className="relative w-full max-w-md aspect-[3/4] overflow-hidden rounded-2xl shadow-xl">
              <Image 
                src="/iza.jpg" 
                alt="Izabela Sobolewska" 
                fill 
                className="object-cover" 
                priority 
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}