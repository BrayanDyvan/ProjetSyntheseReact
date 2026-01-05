export default function Connexion() {
  return (
    <>
      <div
        className="container-fluid vh-100  d-flex  align-items-center justify-content-center"
        style={{
          backgroundColor: "black",
        }}
      >
        <div className="container ">
          <div id="conteneurFormulaire" className="text-white ">
            <h2 className="mx-auto">Inscrit-toi</h2>
            {/* <!-- Compléter les champs du formulaire ici --> */}
            <form
              action="#"
              method="get"
              id="formulaire"
              className="needs-validation"
              noValidate
            >
              <fieldset className="my-3">
                <div className="row">
                  <div className="form-group col-6">
                    <label htmlFor="prenom">Prénom</label>
                    <input
                      type="text"
                      name="prenom"
                      id="prenom"
                      className="form-control"
                      required
                      placeholder="Ex: Brayan"
                      onChange={soumission}
                    />
                    <div className="invalid-feedback">
                      Un prenom est requis.
                    </div>
                  </div>
                  <div className="form-group col-6 ">
                    <label htmlFor="nom">Nom</label>
                    <input
                      type="text"
                      name="nom"
                      id="nom"
                      className="form-control"
                      required
                      placeholder="Ex: MOCKO"
                      onChange={soumission}
                    />
                    <div className="invalid-feedback">Un nom est requis.</div>
                  </div>
                  <div className="form-group col-6">
                    <label htmlFor="courriel">Courriel</label>
                    <input
                      type="email"
                      name="courriel"
                      id="courriel"
                      className="form-control"
                      required
                      placeholder="Ex: lawid@gmail.com"
                    />
                    <div className="invalid-feedback ">
                      Un courriel est requis
                    </div>
                  </div>
                  <div className="form-group col-6">
                    <label htmlFor="telephone">Téléphone</label>
                    <input
                      type="tel"
                      name="telephone"
                      id="telephone"
                      className="form-control"
                      required
                      placeholder="Ex: 4386221665"
                      maxLength="10"
                      minLength="10"
                      pattern="[0-9]{10}"
                    />
                    <div className="invalid-feedback ">
                      Un numéro de téléphoneau format 9999999999
                    </div>
                  </div>
                </div>
              </fieldset>

              <div className="my-3 d-flex  align-items-center justify-content-center">
                <div>
                  <button
                    type="reset"
                    onClick={reset}
                    className="btn btn-danger m-2"
                  >
                    Annuler
                  </button>

                  <button
                    type="submit"
                    onClick={soumission}
                    className="btn btn-primary m-2"
                  >
                    Soumettre
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

function reset() {
  const formulaire = document.querySelector("form");
  const prenom = formulaire.querySelector('input[name="prenom"]');
  const nom = formulaire.querySelector('input[name="nom"]');
  const courriel = formulaire.querySelector('input[name="courriel"]');
  const tel = formulaire.querySelector('input[name="telephone"]');
  formulaire.classList.remove("was-validated");
  prenom.value = "";
  prenom.classList.remove("is-invalid");
  nom.value = "";
  nom.classList.remove("is-invalid");
  courriel.value = "";
  courriel.classList.remove("is-invalid");
  tel.value = "";
  courriel.classList.remove("is-invalid");
}

function soumission() {
  const formulaire = document.querySelector("form");
  const prenom = formulaire.querySelector('input[name="prenom"]');
  const nom = formulaire.querySelector('input[name="nom"]');

  formulaire.classList.add("was-validated");

  if (prenom.value === "") {
    prenom.classList.add("is-invalid");
  } else {
    prenom.classList.remove("is-invalid");
  }
  if (nom.value === "") {
    nom.classList.add("is-invalid");
  } else {
    nom.classList.remove("is-invalid");
  }
}
