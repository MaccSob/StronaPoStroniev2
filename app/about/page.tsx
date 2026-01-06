import '../styles/about.scss'


export default function About() {
  return (
  
 <div className="min-h-screen flex items-center justify-center">

<section className="py-24 relative">
        <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
            <div className="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
                <div className="w-full flex-col justify-start lg:items-start items-center gap-10 inline-flex">
                    <div className="w-full flex-col justify-start lg:items-start items-center gap-4 flex">
                      <div className="container">
                     <h1 className="text-gray-800 font-bold font-manrope leading-normal lg:text-start text-center dark:text-white"> Cześć, nazywam się <span className="text-green-800"> Izabela Sobolewska. </span></h1>
                     </div>
                     <div className="wrapper">
                        <h2 className="text-gray-900 text-2xl font-bold font-manrope leading-normal lg:text-start text-center dark:text-white"> i zajmuję się korektą, redakcją i składem tekstów. Uwielbiam pracować ze słowami i dbać o to, aby każdy tekst był poprawny, czytelny i atrakcyjny. </h2>
                        <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center dark:text-white"> W wolnych chwilach zajmuję się moją kolekcją roślin doniczkowych, która liczy już ponad 50 egzemplarzy. To moja pasja i sposób na relaks. Lubię też czytać książki i grać w gry planszowe, co pozwala mi przeżywać przygody, poznawać nowe historie, a także rozwijać umiejętność logicznego myślenia i strategii. A gdy mam ochotę na coś słodkiego, piekę ciasta i dzielę się nimi z rodziną – znikają w mgnieniu oka.</p>
                   <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center  dark:text-white">Nieważne, czy piszesz książki, e-booki, prace dyplomowe (doktorskie, magisterskie, licencjackie), tworzysz teksty na strony internetowe, blogi, do social mediów – zawsze warto dbać o poprawność językową, a ja chętnie Ci w tym pomogę. Skontaktuj się ze mną, aby omówić szczegóły i poznać indywidualną ofertę. </p>
                    </div>
                    </div>
                </div>
                <img className="lg:mx-12 mx-auto h-full rounded-3xl object-cover" src="https://stronapostronie.pl/assets/image/Izabela.jpg" alt="pic" />
            </div>
        </div>
    </section>
  </div>
  );
}
