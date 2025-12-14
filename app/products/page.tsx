import { FaPenFancy } from "react-icons/fa6";
import '../styles/products.scss'
import { PiEyeglasses } from "react-icons/pi";
import { MdOutlineComputer } from "react-icons/md";

export default function Products() {
  return (
  
   <div className="min-h-screen flex items-center justify-center m-auto">
    <div className="space-y3 max-w-3xl">
           <div className="grid grid-cols-3 divide-x-3  gap-12 text-center sm:text-left ">
<div className="div1"> 
            <h2 className="text-green-800 text-3xl font-semibold text-left flex items-center gap-3">Redakcja <PiEyeglasses size={35} /></h2>
  Podczas redakcji, czyli pierwszego czytania, sprawdzam i poprawiam tekst pod względem merytorycznym, logicznym, stylistycznym i językowym. Analizuję tekst z perspektywy potencjalnego czytelnika i wskazuję, co można w nim ulepszyć. Dbam o to, aby tekst był poprawny, spójny i atrakcyjny. Sugeruję zmiany, które pomogą udoskonalić tekst, eliminuję błędy, nieścisłości, powtórzenia i zbędne informacje. 
  </div>
<div className="div2">
   <h2 className=" text-green-800 text-3xl font-semibold text-left flex items-center gap-3"> Korekta <FaPenFancy size={35}/>  </h2>
   
   Podczas korekty, czyli drugiego czytania, zaznaczam błędy językowe: interpunkcyjne, leksykalne, fleksyjne, składniowe, stylistyczne, a także błędy składu, takie jak bękarty, szewce, wdowy, nieprawidłowa paginacja stron i inne. </div>
<div className="div3">
     <h2 className="text-green-800 text-3xl font-semibold text-left flex items-center gap-3">Skład DTP <MdOutlineComputer size={35}/></h2>
  Jako grafik DTP dobieram krój i stopień pisma, ustalam szerokość marginesów i wielkość interlinii, a także planuję wygląd wszystkich dodatkowych elementów publikacji. Celem składu jest ułatwienie czytania tekstu i zwiększenie jego atrakcyjności. </div>
</div>

<div className="div4 m-3">
 <h3 className="text-green-800 text-2xm font-semibold text-left flex items-center gap-3">* strona znormalizowana – 1800 znaków ze spacjami
** arkusz wydawniczy – 40 000 znaków ze spacjami
</h3>
Podane ceny są orientacyjne, a każde zlecenie wyceniam indywidualnie. Do przygotowania wyceny potrzebuję od Ciebie kilku informacji: rodzaj treści, długość, czyli liczba znaków ze spacjami, termin realizacji, a także czy tekst był już wcześniej sprawdzany przez kogoś innego. Możesz od razu przesłać mi próbkę swojego tekstu o długości 3000–5000 znaków ze spacjami. Pozwoli mi ona ustalić, ile pracy będzie mnie czekało nad tekste

</div>
    </div>
  

  </div>
  );
}
