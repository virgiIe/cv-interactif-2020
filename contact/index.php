<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="utf-8">
    <title>virgile.men — contact</title>
  <link rel="icon" type="image/png" href="../assets/img/icone.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&family=Roboto+Mono:wght@400;500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../assets/css/style.css">
    <link rel="stylesheet" href="../assets/css/terminal.css">
    <link rel="stylesheet" href="../assets/css/keyboard.css">
    <link rel="stylesheet" href="../assets/css/responsive.css">

    <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
    <script  src="../assets/js/script.js"></script>
</head>
<body>

<div class="container">


<div class="partie-terminal">
    <!-- Entete de la fenêtre du terminal -->
    <div class="terminal-barre">
        <span class="boutons">
          <span class="rond fermer"></span>
          <span class="rond reduire"></span>
          <span class="rond agrandir"></span>
        </span>
        <h1><a href="../" >virgile.men</a> － contact</h1>
        <span class="reseaux-sociaux">
          <a href="https://www.linkedin.com/in/virgile-men"><img src="../assets/img/linkedin.png" alt="logo du réseau social Linkedin"></a>
          <a href="https://github.com/virgile-men"><img src="../assets/img/github.png" alt="logo du service web Github"></a>
          <a href="https://www.behance.net/virgile-men"><img src="../assets/img/behance.png" alt="logo du réseau social Behance"></a>
        </span>
    </div>
    <!-- Intérieur de la fenêtre du terminal -->
    <div class="terminal-fenetre formulaire">

      <!-- Première ligne -->
      <div class="terminal-line">
        <p>Un projet ? Une recommandation ? Vous pouvez me contacter par ce formulaire, je serai ravie de vous répondre !</p>
      </div>
      
      <!-- Message de success -->
      <?php if (isset($_GET['success'])): ?>
      <div class="" role="alert">
          Message bien envoyé!
      </div>
      <?php endif; ?>
      
        <!-- Formulaire -->
        <form action="../controllers/contact_form.php" method="POST">
            <div class="terminal-insert">
                <label for="first_name" class="profil">Nom complet ou société<span class="repertoire">~</span></label>
                <input required type="text" name="full_name_or_company" placeholder="___ ___">
            </div>
            <div class="terminal-insert">
                <label for="email" class="profil">email<span class="repertoire">~</span></label>
                <input required type="email" id="email" name="email" placeholder="_@_">
            </div>
            <textarea required name="comment" rows="1" placeholder="Votre message"></textarea>

            <button type="submit">Envoyer</button>
        </form>


    </div>
</div>


<?php include('../views/keyboard.php'); ?>

</div>
</body>
</html>