import '../styles/portfolio.scss'


export default function Portfolio() {
  return (

    <div className="min-h-screen flex items-center justify-center p-24">
    <div className="space-y3 max-w-5xl">






        <h1 className="text-5xl font-semibold text-center text-shadow-lg/20">Okładki:</h1>
      <p className="mt-2 text-lg/8 text-center text-gray-600">kliknij w tytuły aby zobaczyć przykładowe strony!</p>
    <div className="row">
        <div className="column">
     <img src="./szymanski.png" alt="" />
    <a  className='mt-2 text-lg/8 text-center m-8 p-6 ' href="/szymanski">U szymańskich</a>
           <img src="./dzwiekoterapia.jpg" alt="" />
               <a  className='mt-2 text-lg/8 text-center m-8 p-6 ' href="/dzwiekoterapia">Dźwiękoterapia</a>
              <img src="./rose.jpg" alt="" />
               <a  className='mt-2 text-lg/8 text-center m-8 p-6 ' href="/rose">W oczach rose</a>
                    <img src="./zacznij.jpg" alt="" />
                     <a  className='mt-2 text-lg/8 text-center m-8 p-6 ' href="/zacznij">Zacznij działać</a>
                       <img src="./galopem.jpg" alt="" />
                        <a  className='mt-2 text-lg/8 text-center m-2 p-6 ' href="/galopem">Galopem do marzeń</a>
</div>
</div>


    </div>
  </div>
  );
}
