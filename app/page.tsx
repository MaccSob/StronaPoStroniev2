import Review from "./Review";
import './styles/homestyle.scss'

export default function Home() {
  return (
  
  <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black text-black dark:text-white transition-all duration-300">
    <div className="space-y3 max-w-3xl">
      <h1 className="text-5xl font-bold text-center">Strona po stronie</h1>
       <h2 className="text-2xl font-semibold text-center">Korekta, redakcja, Skład DTP</h2>
  
    <Review></Review>
    </div>
</div>


  );
}
