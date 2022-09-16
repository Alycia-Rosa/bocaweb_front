export const RodaPe =() => {
    return(
      <html>
      <head>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet"></link>
          <link href="https://getbootstrap.com/docs/5.2/assets/css/docs.css" rel="stylesheet"></link>
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"></script>
      </head>
      <body>
        {/*Footer*/}
        <footer class="text-center text-lg-start text-muted bg-dark">
          {/*Section: Social media*/}
            <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
              {/*Left*/}
                <div class="me-5 d-none d-lg-block text-white">
                  <span>IFMS Dourados – Trabalho de Frameworks2 – Alycia Rosa e Ana Beatriz</span>
                </div>
                  {/*Left*/}

                  {/*Right*/}
                  <div>
                    <a href="#" class="me-4 link-secondary text-white">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" class="me-4 link-secondary text-white">
                      <i class="fab fa-twitter"></i>
                    </a>
                    <a href="http://www.bocaweb.com.br/" target="_blank" class="me-4 link-secondary text-white">
                      <i class="fab fa-google"></i>
                    </a>
                    <a href="#" class="me-4 link-secondary text-white">
                      <i class="fab fa-instagram"></i>
                    </a>
                    <a href="#" class="me-4 link-secondary text-white">
                      <i class="fab fa-linkedin"></i>
                    </a>
                    <a href="#" class="me-4 link-secondary text-white">
                      <i class="fab fa-github"></i>
                    </a>
                  </div>
                  {/*Right*/}
            </section>
                {/*Section: Social media*/}
                {/*Copyright*/}
                <div class="text-center p-4 text-white">
                  © 2022 Copyright: 2019 - 2022 BocaWeb - Desenvolvido por Ricardo Nascimento - UFGD / IFMS - Todos os direitos reservados
                </div>
                {/*Copyright*/}
        </footer>      
              {/*Fim Footer*/}
      </body>
      </html>
    )
}