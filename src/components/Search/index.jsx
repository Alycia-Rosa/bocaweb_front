export const Search =({busca, buscaODA}) => {
      return(
          <html>
          <head>
              <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet"></link>
              <link href="https://getbootstrap.com/docs/5.2/assets/css/docs.css" rel="stylesheet"></link>
              <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"></script>
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
          </head>
          <body>
                <form class="d-flex justify-content-center" role="search">
                    <div>
                        <div class="input-group">
                            <input name="busca" type="text" value={busca} placeholder="O que deseja buscar?" aria-label="Search" aria-describedby="search-addon1" onChange={buscaODA}></input>
                            <span class="input-group-text" id="basic-addon1"><i class="fa fa-search"></i></span>
                        </div>
                    </div>
                </form>
          </body>
          </html>
      )
  }