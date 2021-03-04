<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Portail numérique pour la langue bretonne</title>
  <script src="https://cdn.jsdelivr.net/npm/jquery@3.3.1/dist/jquery.min.js"></script>
  <link rel="stylesheet" type="text/css" href="/porched/semantic/dist/semantic.min.css">
  <link rel="stylesheet" type="text/css" href="/porched/style.css">

  <script src="https://twemoji.maxcdn.com/v/latest/twemoji.min.js" crossorigin="anonymous"></script>
  <script src="/porched/semantic/dist/semantic.min.js"></script>

</head>

<body>


  <!-- header -->
  <?php require("../includes/header.html") ?>

  <div class="full height">

    <!-- side menu -->
    <?php require("../includes/menu.html") ?>
    <!-- end side menu -->



    <div class="page">
      <div class="ui one column grid container main">
        <div class="column">

          <div class="ui two item pointing menu">
            <a class="item active" href="/porched/fr/strategie/">
              Présentation
            </a>
            <a class="item" href="/porched/fr/strategie/inventaire.php">
              Inventaire des ressources et outils disponibles
            </a>
          </div>

          <div class="ui segment">
            <h1 class="ui header">Le breton à l'ère du numérique
              <div class="sub header">Diagnostic et stratégie de développement</div>
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
              in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
              sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>

            <button type="button" name="button" class="ui labeled icon button">
              <i class="download icon"></i>
              Télécharger le dossier
            </button>


          </div>
          <p></p>
        </div>

      </div>

    </div>
    <?php require("../includes/footer.html") ?>



    <!-- JAVASCRIPT -->
    <script>
      $('.ui.accordion')
        .accordion();

      $('.ui.dropdown')
        .dropdown();

      $('.menu .item')
        .tab();

      $('.label')
        .popup();
      $('.ui.sticky')
        .sticky();
    </script>


</body>

</html>
