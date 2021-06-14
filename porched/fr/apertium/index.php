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
            <a class="item active" href="/porched/fr/apertium/">
              Traducteur
            </a>
            <a class="item" href="/porched/fr/apertium/apropos.php">
              A propos d'Apertium
            </a>
          </div>

          <div class="ui very padded segment">
            <h1 class="ui header">
              <i class="language icon"></i>
              <div class="content">Apertium
                <div class="sub header">Traducteur automatique breton - français</div>
              </div>
            </h1>


            <div class="ui form">
              <div class="field">
                <label>Texte breton à traduire</label>
                <textarea name="name" rows="8" cols="80" placeholder="Entrez ici le texte à traduire"></textarea>
              </div>

              <div class="field">
                <button type="button" name="button" class="ui button">
                  Traduire
                </button>
              </div>

              <div class="field">
                <textarea name="name" rows="8" cols="80" readonly=""></textarea>
              </div>
            </div>



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
