<!DOCTYPE html>
<html lang="fr" >
<head>
  <meta charset="UTF-8">
  <title>virgile.men — cv interactif</title>
  <link rel="icon" type="image/png" href="./assets/img/icone.png" />
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&family=Roboto+Mono:wght@400;500&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="./assets/css/style.css">
  <link rel="stylesheet" href="./assets/css/terminal.css">
  <link rel="stylesheet" href="./assets/css/keyboard.css">
  <link rel="stylesheet" href="./assets/css/responsive.css">

  <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
  
  <script type="text/javascript" src="./assets/js/commandes.js"></script>
  <script type="text/javascript" src="./assets/js/script.js"></script>

</head>
<body>
<div class="container">


  <div class="partie-terminal">
    
    <!-- Entete de la fenêtre du terminal -->
    <?php include('./views/terminal-entete.php'); ?>
    
    <!-- Intérieur de la fenêtre du terminal -->
    <div class="terminal-fenetre">
        <!-- Première ligne -->
        <div class="terminal-line">
          <p>Bienvenue dans le cv interactif de virgile.men — Tapez et entrez <span class="code">aide</span>
            pour avoir la liste des commandes.</p>
        </div>
        <!-- Historique de commande (voir script.js) -->
    </div>

      <!-- Ligne d'entrée de commande -->
      <div class="terminal-insert">
          <label class="profil">virgile.men<span class="repertoire">~</span></label>
          <input type="text" id="insertCommande" autofocus>
      </div>


  </div>

  <?php include('./views/keyboard.php'); ?>

</div>
</body>
</html>
