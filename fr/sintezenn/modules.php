<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Porched niverel ar brezhoneg</title>
  <script src="https://cdn.jsdelivr.net/npm/jquery@3.3.1/dist/jquery.min.js"></script>
  <link rel="stylesheet" type="text/css" href="../../semantic/dist/semantic.min.css">
  <link rel="stylesheet" type="text/css" href="../../mystyle.css">
  <script src="../../semantic/dist/semantic.min.js"></script>
</head>

<body>

  <!-- header -->
  <div class="ui inverted stackable borderless menu topbar">
    <div class="ui container">
      <a class="item" href="../index.html">
        <h1 class="ui inverted header"><img src="../images/LogoOPLB.svg">
          <div class="content">Portail numérique pour la langue bretonne<div class="ui sub header">Office public de la langue bretonne</div>
          </div>
        </h1>
      </a>
      <div class="right menu">
        <div class="ui item">
          <div class="ui dropdown inverted button">
            <i class="globe icon"></i>
            français
            <i class="dropdown icon"></i>
            <div class="menu">
              <a href="#" class="disabled item">brezhoneg</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


  <div class="ui doubling stackable grid container main">
    <div class="four wide column">
      <?php include("../includes/menu.html") ?>
    </div>


    <div class="twelve wide column">

      <div class="ui breadcrumb">
        <a class="section">Accueil</a>
        <div class="divider"> / </div>
        <a class="section">Synthèse vocale</a>
        <div class="divider"> / </div>
        <a class="active section">Modules de pré-traitements</a>
      </div>

      <div class="ui padded segment">
        <h1 class="ui header">Modules de pré-traitement</h1>
        <div class="ui form">
          <div class="ui warning message">
            Attention, le fichier texte chargé doit être au format .txt, et chaque phrase du texte doit être sur une ligne différente.
          </div>
          <div class="field">
            <label for="input">Charger un fichier</label>
            <input type="file" id="input">
          </div>
          <div class="field">
            <button class="ui button" name="button" onclick="OnAlert()">Envoyer</button>
          </div>
        </div>


      </div>
      <p></p>
    </div>
  </div>
  <div class="ui basic segment">
    <p></p>
  </div>
  <div class="footer">
    <div class="ui container">
      <div class="ui grid">
        <div class="ui four wide column">
          <p></p>
          <h4 class="ui inverted header">Réseaux sociaux</h4>
          <div class="ui inverted link list">
            <a class="item">
              <i class="twitter icon"></i>
              <div class="content">Twitter</div>
            </a>
            <a class="item">
              <i class="facebook icon"></i>
              <div class="content">Facebook</div>
            </a>
          </div>
        </div>
        <div class="eight wide column">
          <p></p>
          <h4 class="ui inverted header">L'Office public de la langue bretonne</h4>
          <div class="ui inverted link list">
            <a href="#" class="item">
              <i class="external alternate icon"></i>
              <div class="content">Site internet</div>
            </a>
            <a class="item">
              <i class="envelope icon"></i>
              <div class="content">Contact</div>
            </a>
          </div>
        </div>
        <div class="ui four wide column">
          <p></p>
          <h4></h4>
          <div class="ui inverted link list">
            <a class="item">
              Mentions légales
            </a>
            <a href="#" class="item">
              Crédit
            </a>
          </div>
          <div class="ui white text">
            <p>Ofis publik ar brezhoneg - Office public de la langue bretonne</p>
            <p>Copyright 2020</p>
          </div>
        </div>

      </div>
    </div>
  </div>


  <!-- JAVASCRIPT -->
  <script type="text/javascript" src="scripts.js"></script>
  <script>

    $('.ui.dropdown')
      .dropdown();

    $('.label')
      .popup();
    $('.ui.sticky')
      .sticky();
  </script>


</body>

</html>
