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
            <a class="item" href="/porched/fr/apertium/">
              Traducteur
            </a>
            <a class="active item" href="/porched/fr/apertium/apropos.php">
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
            <p>
              Dans un premier temps, l'objectif de ce traducteur automatique n'est
              pas de proposer un texte parfait qui pourrait, par exemple, être utilisé
              tel quel pour l'édition. Nous nous attachons d'abord à produire un
              texte globalement compréhensible.</p>

            <p>Nous avons choisi de commencer à travailler sur un traducteur breton-français.
              Ultérieurement nous pensons proposer des traductions du breton vers
              d'autres langues également.</p>

            <p>Les mots précédés d'une astérisque * ne sont pas reconnus pour le
              moment. Vous pouvez demander à ce qu'ils soient rajoutés.</p>

            <p>La qualité de votre traduction sera d'autant plus grande que la langue
              du texte breton à traduire est soignée. Plus votre texte sera proche
              du breton écrit standard et moins il comportera de fautes d'orthographes,
              meilleure sera la traduction.</p>

            <p>Ecrivez les mots dans toute leur longueur, écrivez les particules verbales et les formes verbales complètes (am eus, az poa…).</p>
            <p>Attention : pour le moment les formes verbales de l'impératif ne sont pas supportées (grit se, deuit amañ…).</p>

            <p>
              Ce traducteur est amélioré en continu.
            </p>

            <h3 class="ui header">Prendre part au projet</h3>

            <div class="ui link items">
              <div class="item">
                <i class="github big icon"></i>
                <div class="content">
                  <div class="header">apertium/apertium-br-fr</div>
                  <div class="meta">
                    Apertium translation pair for Breton and French
                  </div>
                </div>
              </div>
              <div class="item">
                <i class="github big icon"></i>
                <div class="content">
                  <div class="header">Apertium</div>
                  <div class="meta">
                    Free/open-source platform for developing rule-based machine translation systems and language technology
                  </div>
                  <div class="descrition">
                    Page GitHub du projet Apertium, regroupant l'ensemble des dépôts du système (moteur de traduction, paires de langues...)
                  </div>
                </div>
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
