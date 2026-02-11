import Review from "./Review";
import './styles/products.scss'
import CookieConsentBanner from './CookieConsentBanner'
export default function Home() {
  return (


    
  
  <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black text-black dark:text-white transition-all duration-300">
    <div className="space-y3 max-w-5xl">
      
       <section>
        <h2 className="text-3xl font-semibold text-center">Szukasz profesjonalnej korekty lub składu tekstu? Chcesz, aby tworzone przez Ciebie treści były dopracowane i przyjemne w odbiorze? Jestem tu, aby Ci w tym pomóc!</h2>

<p className="text-grey-500 m-5">
         Niezależnie od tego, czy piszesz książki, artykuły, prace dyplomowe, czy inne rodzaje tekstów, zadbam o to, aby były one poprawne, spójne i zgodne z zasadami języka polskiego. Dodatkowo oferuję pomoc w przygotowaniu publikacji do druku. Zajmę się odpowiednim ułożeniem tekstu na stronie, doborem fontów, odstępów i marginesów, aby tekst był atrakcyjny i czytelny.
Jeśli chcesz dowiedzieć się więcej o mojej ofercie, zapraszam do kontaktu. Z przyjemnością odpowiem na Twoje pytania i przedstawię szczegóły współpracy. 
  </p>
       </section>
                  <CookieConsentBanner />
    <Review></Review>
    </div>
</div>


  );
}
