import Image from 'next/image'

export default function Portfolio() {
  return (
  
    <div className="min-h-screen flex items-center justify-center">
    <div className="space-y3 max-w-3xl">
      <h1 className="text-5xl font-semibold text-center">Portfolio:</h1>
      <p className="text-black-200">
        "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
      </p>
    </div>
     <div>
        <Image
          className="hidden dark:block"
          src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwiTMAB4dWLxS1B4SALiS3fu5FJaaTrOlAUg&s'}
          alt="dark-mode-image"
          width={40}
          height={40}
        />
        <Image
          className="mb-4 block dark:hidden"
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwiTMAB4dWLxS1B4SALiS3fu5FJaaTrOlAUg&s'
          alt="light-mode-image"
          width={40}
          height={40}
        />
  </div>
  </div>
  );
}
