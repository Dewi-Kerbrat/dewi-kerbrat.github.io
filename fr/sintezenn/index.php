<!DOCTYPE html>
<html lang="fr">

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
      <?php include("../includes/menu.html"); ?>
    </div>


    <div class="twelve wide column">

      <div class="ui breadcrumb">
        <a class="section">Accueil</a>
        <div class="divider"> / </div>
        <a class="active section">Synthèse vocale</a>
      </div>

      <div class="ui padded segment">
        <h1 class="ui header">Synthèse vocale du breton</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus porttitor odio et magna convallis, vel hendrerit nisi pretium. Sed vehicula arcu tortor, ut dapibus risus consectetur non. Nullam fermentum risus nec nulla condimentum
          faucibus. Pellentesque a libero mattis, semper metus at, tincidunt nisl. Ut porta nisi quis orci porta, et mollis magna malesuada.</p>

        <h2 class="ui header">Modules de pré-traitements<div class="sub header">Normalisation, phonétisation, syllabisation...</div>
        </h2>
        <p>Sed ornare neque a nibh laoreet dignissim. Integer feugiat, sem id elementum viverra, purus orci porttitor lorem, non scelerisque ligula lorem nec nulla. Cras mollis eget nulla quis luctus. In bibendum lectus vitae tellus interdum, vel
          condimentum nisl gravida.</p>
        <button class="ui button" name="button">Accéder aux modules</button>

        <h2 class="ui header">Moteur de synthèse vocale</h2>
        <p>Sed ornare neque a nibh laoreet dignissim. Integer feugiat, sem id elementum viverra, purus orci porttitor lorem, non scelerisque ligula lorem nec nulla. Cras mollis eget nulla quis luctus. In bibendum lectus vitae tellus interdum, vel
          condimentum nisl gravida.</p>
        <button class="ui button" name="button">Accéder au moteur de synthèse vocale du breton</button>

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
