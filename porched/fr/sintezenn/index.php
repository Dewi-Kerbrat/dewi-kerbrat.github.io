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
          <div class="ui breadcrumb">
            <a class="section" href="/porched/fr/">Accueil</a>
            <i class="right angle icon divider"></i>
            <div class="section">Outils linguistiques</div>
            <i class="right angle icon divider"></i>
            <div class="section">Parole</div>
            <i class="right angle icon divider"></i>
            <div class="active section">Synthèse vocale</div>
          </div>
          <div class="ui three item pointing menu">
            <a href="#" class="item active">Synthèse vocale</a>
            <a href="#" class="item">Modules de pré-traitement</a>
            <a href="#" class="item">A propos</a>
          </div>
          <div class="ui segment">
            <h1 class="ui header">
              <i class="comment icon"></i>
              <div class="content">
                MouezhOfis
                <div class="sub header">
                  Synthèse vocale du breton
                </div>
              </div>
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis
              aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div class="ui form">
              <div class="field">
                <textarea name="name" rows="8" cols="80"></textarea>
              </div>
              <div class="field">
                <button class="ui button" name="button">Synthétiser</button>
              </div>
            </div>
          </div>
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
