export const Header=() => {
    var bocaweb=require('./img/logo.png');
        return(
            <html>
            <head>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet"></link>
                <link href="https://getbootstrap.com/docs/5.2/assets/css/docs.css" rel="stylesheet"></link>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"></script>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
            </head>
            <body>
                <nav class="navbar navbar-expand-lg bg-dark text-white">
                    <div class="container-fluid">
                        <a class="navbar-brand text-white" href="#"><img src={bocaweb} alt='Logo BocaWeb' class="d-inline-block"></img>BocaWeb Front</a>
                            <button class="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                                    <li class="nav-item">
                                        <a href="#" class="nav-link btn-dark"> <i class="fas fa-info-circle"></i> Conheça o BocaWeb </a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="#" class="nav-link btn-dark"> <i class="fa fa-address-card"></i>  Administração </a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="#" class="nav-link btn-dark"> <i class="fas fa-envelope"></i> Contato </a>                  
                                    </li>
                                </ul>
                            </div>
                    </div>
            </nav>
            </body>
            </html>
    )
}