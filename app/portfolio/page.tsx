import '../styles/portfolio.scss'


export default function Portfolio() {
  return (

    <div className="min-h-screen flex items-center justify-center">
    <div className="space-y3 max-w-5xl">
        <h1 className="text-5xl font-semibold text-center">Portfolio:</h1>
      
      <div className="imgcontainer">
        <img src="./szymanski.png" alt="" />
           <img src="./dzwiekoterapia.jpg" alt="" />
              <img src="./rose.jpg" alt="" />
                 <img src="./szymanski.jpg" alt="" />
                    <img src="./zacznij.jpg" alt="" />
                       <img src="./galopem.jpg" alt="" />
</div>

    </div>

  </div>
  );
}
