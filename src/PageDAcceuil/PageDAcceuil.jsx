export default function PageDAcceuil() {
  return (
    <>
      <div
        className="container-fluid vh-100 d-flex  align-items-center justify-content-center"
        style={{
          backgroundImage: 'url("luffy-6877426_640.png")',
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundColor: "black",
        }}
      >
        <div>

        <h1 className="h1 pt-2 " style={{ color: "yellow" }}>
         API ONE PIECE & NARUTO
        </h1>
        </div>
      </div>
      <div
        className="container-fluid vh-100 d-flex  align-items-center justify-content-center"
        style={{
          backgroundImage: 'url("acceuil.jpg")',
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundColor: "black",
        }}
      >
         <img
            src={"onePieceTtre.jpeg"}
            className="card-img-top "
            style={{ height: "15rem" }}
          />
        </div>
      <div
        className="container-fluid vh-100 d-flex  align-items-center justify-content-center"
        style={{
          backgroundImage: 'url("back1Naruto.jpg")',
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundColor: "black",
        }}
      >
         <img
            src={"titleNaruto.png"}
            className="card-img-top "
            style={{ height: "15rem" }}
          />
        </div>
    </>
  );
}
