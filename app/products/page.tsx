
import '../styles/products.scss'

export default function Products() {
  return (
  
   <div className="min-h-screen flex items-center justify-center m-auto">
    <div className="space-y3 max-w-3xl">
           <div className="grid grid-cols-3 divide-x-3  gap-12 text-center sm:text-left ">
<div className="div1"> 
            <h2 className="text-3xl font-semibold text-left">Redakcja:</h2>
  Podczas redakcji, czyli pierwszego czytania, sprawdzam i poprawiam tekst pod względem merytorycznym, logicznym, stylistycznym i językowym. Analizuję tekst z perspektywy potencjalnego czytelnika i wskazuję, co można w nim ulepszyć. Dbam o to, aby tekst był poprawny, spójny i atrakcyjny. Sugeruję zmiany, które pomogą udoskonalić tekst, eliminuję błędy, nieścisłości, powtórzenia i zbędne informacje. 
  </div>
<div className="div2">
   <h2 className="text-3xl font-semibold text-left">Korekta:</h2>
   Podczas korekty, czyli drugiego czytania, zaznaczam błędy językowe: interpunkcyjne, leksykalne, fleksyjne, składniowe, stylistyczne, a także błędy składu, takie jak bękarty, szewce, wdowy, nieprawidłowa paginacja stron i inne. </div>
<div className="div3">
     <h2 className="text-3xl font-semibold text-left">Skład DTP:</h2>
  Jako grafik DTP dobieram krój i stopień pisma, ustalam szerokość marginesów i wielkość interlinii, a także planuję wygląd wszystkich dodatkowych elementów publikacji. Celem składu jest ułatwienie czytania tekstu i zwiększenie jego atrakcyjności. </div>
</div>
    </div>
  

  </div>
  );
}
