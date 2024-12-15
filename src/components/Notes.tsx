import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useState } from "react";

function Notes() {
  const [notatki, updateNotatki] = useState([
    "Lorem ipsum",
    "Matołek raz zwiedzał zoo I wołał co chwila: O-o! Jaka brzydka papuga! Żyrafa jest za długa! Słoń za wysoki! A po co komu te foki? Zebra ma farbowane żebra!TygrysChętnie by mnie stąd wygryzł!Na, a zajrzyjmy pod daszek:Żółw - tuś, bratku, tuś!A to? Ptaszek.Niezły ptaszek -Struś!Wreszcie zbliża się do wielbłąda,Uważnie mu się przyglądaI powiada wskazując na niego przez kraty:Owszem, niezły. Niczego! Szkoda tylko, że garbaty!",
    "Co słychać, panie tygrysie? A nic. Nudzi mi się. Czy chciałby pan wyjść zza tych krat? Pewnie. Przynajmniej bym pana zjadł.",
    "Struś ze strachu Ciągle głowę chowa w piachu, Więc ma opinię mazgaja. A nadto znosi jaja wielkości strusiego jaja.",
    "Posłał kozioł koziołeczka Po bułeczki do miasteczka.Koziołeczek ruszył w drogę,Wtem się natknął na stonogę.Zadrżał z trwogi, no i w nogi —Gaik, steczka, mostek, rzeczka,A tam czekał ojciec srogiI ukarał koziołeczka:— Taki tchórz! Taki tchórz!Ledwo wyszedł, wrócił już!Ładne rzeczy! Ładne rzeczy!A koziołek tylko beczy:— Jak nie uciec, ojcze drogi,Przecież sam rozumiesz to:Ja mam tylko cztery nogi,A stonoga ma ich sto!Posłał kozioł koziołeczkaPo ciasteczka do miasteczka.",
  ]);
  return (
    <>
      <button
        className="btn btn-primary"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasWithBothOptions"
        aria-controls="offcanvasWithBothOptions"
      >
        Notes
      </button>
      <div
        className="offcanvas offcanvas-start"
        data-bs-scroll="true"
        tabIndex={-1}
        id="offcanvasWithBothOptions"
        aria-labelledby="offcanvasWithBothOptionsLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">
            Notes
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <button
            className="btn btn-primary mb-4"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            Dodaj
          </button>
          {notatki.map((note, index) => (
            <div key={index} className="card mb-2">
              <div className="card-body d-flex justify-content-between align-items-center">
                <span>{note}</span>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => {
                    updateNotatki((prevNotatki) =>
                      prevNotatki.filter((_, i) => i !== index)
                    );
                  }}
                >
                  Usuń
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <form>
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="staticBackdropLabel">
                  Add Note
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label htmlFor="NotatekId" className="form-label">
                    Notatka
                  </label>
                  <textarea
                    className="form-control"
                    id="NotatekId"
                    rows={10}
                  ></textarea>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => {
                    const inputValue = (
                      document.getElementById(
                        "NotatekId"
                      ) as HTMLTextAreaElement
                    ).value;
                    if (inputValue.trim()) {
                      updateNotatki((prevNotatki) => [
                        ...prevNotatki,
                        inputValue,
                      ]);
                    }
                  }}
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Notes;
