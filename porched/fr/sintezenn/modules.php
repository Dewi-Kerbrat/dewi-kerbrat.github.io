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
  <?php require("../includes/header.html") ?>


  <div class="ui doubling stackable grid container main">
    <div class="four wide column">
      <?php require("../includes/menu.html") ?>

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
        <p></p>
          <form class="ui form" action="index.html" method="post">
            <div class="field">
              <button class="ui button" name="button" onclick="OnAlert()">Envoyer</button>
            </div>
          </form>



      </div>
      <p></p>
    </div>
  </div>
  <div class="ui basic segment">
    <p></p>
  </div>



  <!-- JAVASCRIPT -->
  <script type="text/javascript">
  function OnAlert(){

  const fileInput = document.getElementById('input');
  fileInput.onchange = () => {
    const selectedFile = fileInput.files[0];
    console.log(selectedFile);
  }

  var myHeaders = new Headers();
  myHeaders.append("Authorization", "Token token=leQXX6fy3aOWMjb7IaKOEeJRqPwXcxpp");
  myHeaders.append('content-type', 'application/json');

  var formdata = new FormData();
  formdata.append("job[webapp_id]", "1054");
  formdata.append("job[param]", "");
  formdata.append("job[queue]", "standard");
  formdata.append("file[0]", fileInput.files[0], "[PROXY]");

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: formdata,
    redirect: 'follow'
  };

  fetch("https://allgo18.inria.fr/api/v1/jobs", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
  }
  </script>
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
