import { useState } from "react";

function History() {
  const [historia, updateHistoria] = useState([
    "Lorem ipsum",
    "Matołek raz zwiedzał zoo I wołał co chwila: O-o! Jaka brzydka papuga! Żyrafa jest za długa! Słoń za wysoki! A po co komu te foki? Zebra ma farbowane żebra!TygrysChętnie by mnie stąd wygryzł!Na, a zajrzyjmy pod daszek:Żółw - tuś, bratku, tuś!A to? Ptaszek.Niezły ptaszek -Struś!Wreszcie zbliża się do wielbłąda,Uważnie mu się przyglądaI powiada wskazując na niego przez kraty:Owszem, niezły. Niczego! Szkoda tylko, że garbaty!",
    "Co słychać, panie tygrysie? A nic. Nudzi mi się. Czy chciałby pan wyjść zza tych krat? Pewnie. Przynajmniej bym pana zjadł.",
    "Struś ze strachu Ciągle głowę chowa w piachu, Więc ma opinię mazgaja. A nadto znosi jaja wielkości strusiego jaja.",
  ]);
  return (
    <div>
      {historia.map((element) => (
        <div className="card mb-3">{element}</div>
      ))}
    </div>
  );
}

export default History;
