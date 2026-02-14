import '../styles/portfolio.scss'


export default function Portfolio() {
  return (

    <div className="min-h-screen flex items-center justify-around p-22">
      
    <div className="space-y3 max-w-4xl">


        <h1 className="text-5xl font-semibold text-center text-shadow-lg/20">Okładki:</h1>




      <p className="mt-2 text-lg/8 text-center text-gray-600">Przykładowe książki, w których tworzeniu brałam udział.</p>

<div className="column">
     <img src="./szymanski.png" alt="" />
           <img src="./dzwiekoterapia.jpg" alt="" />
              <img src="./rose.jpg" alt="" />
                    <img src="./zacznij.jpg" alt="" />
                       <img src="./galopem.jpg" alt="" />

</div>
    </div>
  </div>
  );
}
