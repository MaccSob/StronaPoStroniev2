import '../styles/portfolio.scss'

export default function Portfolio() {
  return (

    <div className="min-h-screen flex items-center justify-center p-24">
    <div className="space-y3 max-w-5xl">






        <h1 className="text-5xl font-semibold text-center">Okładki:</h1>
      
      <div className="imgcontainer">
        <img src="./szymanski.png" alt="" />
           <img src="./dzwiekoterapia.jpg" alt="" />
              <img src="./rose.jpg" alt="" />
                 <img src="./szymanski.jpg" alt="" />
                    <img src="./zacznij.jpg" alt="" />
                       <img src="./galopem.jpg" alt="" />
</div>

 <h1 className="text-5xl font-semibold text-center">Przykładowe strony:</h1>
<div className="container">
  <img className='photo'  src="./dzwiekstrona1.jpg" alt="" />
  <img className='photo'  src="./dzwiekstrona2.jpg" alt="" />
  <img className='photo'  src="/galopstrona.jpg" alt="" />
 <img className='photo'  src="./szymanskistrona.jpg" alt="" />
  <img className='photo'  src="./rosestrona.jpg" alt="" />
  <img className='photo'  src="/zacznijstrona1.jpg" alt="" />
    <img className='photo'  src="/zacznijstrona2.jpg" alt="" />

</div>
    </div>
  </div>
  );
}
