function Home() {
  return (
    <div className="container mt-5">

      <h1 className="display-4 fw-bold">
        Trouve ton artisan
      </h1>

      <p className="lead mt-3">
        La plateforme qui vous permet de trouver facilement un artisan
        qualifié dans votre région.
      </p>

      <hr className="my-5" />

      <h2>Comment trouver mon artisan ?</h2>

      <div className="row mt-4">

        <div className="col-md-3">
          <div className="card text-center p-3">
            <h1>1</h1>
            <p>Choisir une catégorie.</p>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card text-center p-3">
            <h1>2</h1>
            <p>Sélectionner un artisan.</p>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card text-center p-3">
            <h1>3</h1>
            <p>Envoyer une demande.</p>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card text-center p-3">
            <h1>4</h1>
            <p>Recevoir une réponse sous 48 h.</p>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Home;
