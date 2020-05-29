<html>
<head>
    <meta charset="utf-8">
    <title>virgile.men — contact</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&family=Roboto+Mono:wght@400;500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../assets/css/style.css">
    <link rel="stylesheet" href="../assets/css/terminal.css">
    <link rel="stylesheet" href="../assets/css/keyboard.css">

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
        <h1>virgile.men － contact</h1>
    </div>
    <!-- Intérieur de la fenêtre du terminal -->
    <div class="terminal-fenetre formulaire">

        <!-- Message de success -->
        <?php if (isset($_GET['success'])): ?>
        <div class="" role="alert">
            Message bien envoyé!
        </div>
        <?php endif; ?>

        <!-- Première ligne -->
        <div class="terminal-line">
            <p>Un projet ? Une recommandation ? Vous pouvez me contacter par ce formulaire, je serai ravie de vous répondre !</p>
        </div>
    
        <!-- Formulaire -->
        <form action="controllers/contact_form.php" method="POST">
            <div class="terminal-insert">
                <label for="first_name" class="profil">Nom complet ou société<span class="repertoire">~</span></label>
                <input required type="text" name="full_name_or_company" placeholder="___ ___">
            </div>
            <div class="terminal-insert">
                <label for="email" class="profil">email<span class="repertoire">~</span></label>
                <input required type="email" id="email" name="email" placeholder="_@_">
            </div>
            <textarea required name="comment" rows="1" placeholder="Votre message"></textarea>

            <button type="submit">> Envoyer</button>
        </form>


    </div>
</div>



<div class="partie-keyboard">
    <div class='kb-row'>
      <div class='k k-tld' id='kc-192' pre='#' suf='@'></div>
      <div class='k k-1' id='kc-49' pre='1' suf='&amp;'></div>
      <div class='k k-2' id='kc-50' pre='2' suf='é'></div>
      <div class='k k-3' id='kc-51' pre='3' suf='"'></div>
      <div class='k k-4' id='kc-52' pre='4' suf="'"></div>
      <div class='k k-5' id='kc-53' pre='5' suf='('></div>
      <div class='k k-6' id='kc-54' pre='6' suf='§'></div>
      <div class='k k-7' id='kc-55' pre='7' suf='è'></div>
      <div class='k k-8' id='kc-56' pre='8' suf='!'></div>
      <div class='k k-9' id='kc-57' pre='9' suf='ç'></div>
      <div class='k k-0' id='kc-48' pre='0' suf='à'></div>
      <div class='k k-min' id='kc-189' pre='°' suf=')'></div>
      <div class='k k-eq' id='kc-189' pre='_' suf='-'></div>
      <div class='k k-del k-txt' id='kc-8' suf='←'></div>
    </div>
    <div class='kb-row'>
      <div class='k k-tab k-txt' id='kc-9' suf='⇥'></div>
      <div class='k k-a' id='kc-65' pre='A'></div>
      <div class='k k-z' id='kc-90' pre='Z'></div>
      <div class='k k-e' id='kc-69' pre='E'></div>
      <div class='k k-r' id='kc-82' pre='R'></div>
      <div class='k k-t' id='kc-84' pre='T'></div>
      <div class='k k-y' id='kc-89' pre='Y'></div>
      <div class='k k-u' id='kc-85' pre='U'></div>
      <div class='k k-i' id='kc-73' pre='I'></div>
      <div class='k k-o' id='kc-79' pre='O'></div>
      <div class='k k-p' id='kc-80' pre='P'></div>
      <div class='k k-obrace' id='kc-219' pre='¨' suf='^'></div>
      <div class='k k-cbrace' id='kc-221' pre='*' suf='$'></div>
      <div class='k k-returnt' id='kc-13R' pre='' suf='↩︎'></div>
    </div>
    <div class='kb-row'>
      <div class='k k-caps k-txt' id='kc-20' pre='•' suf='⇪'></div>
      <div class='k k-q' id='kc-81' pre='Q'></div>
      <div class='k k-s' id='kc-83' pre='S'></div>
      <div class='k k-d' id='kc-68' pre='D'></div>
      <div class='k k-f' id='kc-70' pre='F'></div>
      <div class='k k-g' id='kc-71' pre='G'></div>
      <div class='k k-h' id='kc-72' pre='H'></div>
      <div class='k k-j' id='kc-74' pre='J'></div>
      <div class='k k-k' id='kc-75' pre='K'></div>
      <div class='k k-l' id='kc-76' pre='L'></div>
      <div class='k k-m' id='kc-77' pre='M'></div>
      <div class='k k-quot' id='kc-222' pre='%' suf="ù"></div>
      <div class='k k-quot' id='kc-220' pre='£' suf="`"></div>
      <div class='k k-returnb k-txt' id='kc-13L' pre='' suf=''></div>
    </div>
    <div class='kb-row'>
      <div class='k k-lshift k-txt' id='kc-16L' suf='⇧'></div>
      <div class='k k-comma' id='kc-188' pre='&gt;' suf='&lt;'></div>
      <div class='k k-w' id='kc-87' pre='W'></div>
      <div class='k k-x' id='kc-88' pre='X'></div>
      <div class='k k-c' id='kc-67' pre='C'></div>
      <div class='k k-v' id='kc-86' pre='V'></div>
      <div class='k k-b' id='kc-66' pre='B'></div>
      <div class='k k-n' id='kc-78' pre='N'></div>
      <div class='k k-comma' id='kc-188' pre='?' suf=','></div>
      <div class='k k-period' id='kc-186' pre='.' suf=';'></div>
      <div class='k k-fslash' id='kc-58' pre='/' suf=':'></div>
      <div class='k k-plus' id='kc-187' pre='+' suf='='></div>
      <div class='k k-rshift k-txt' id='kc-16R' suf='⇧'></div>
    </div>
    <div class='kb-row'>
      <div class='k k-func k-txt' suf='fn'></div>
      <div class='k k-ctrl k-txt' id='kc-17'  pre='^'suf='control'></div>
      <div class='k k-lopt k-txt' id='kc-18L' pre='alt' suf='option'></div>
      <div class='k k-lcmnd k-txt' id='kc-91L' pre='⌘' suf='command'></div>
      <div class='k k-space' id='kc-32'></div>
      <div class='k k-rcmnd k-txt' id='kc-93R' pre='⌘' suf='command'></div>
      <div class='k k-ropt k-txt' id='kc-18R' pre='alt' suf='option'></div>
      <div class='k k-larr' id='kc-37' pre='▸'></div>
      <div class='k k-arr-udarr'>
        <div class='k k-uarr' id='kc-38' pre='▾'></div>
        <div class='k k-darr' id='kc-40' pre='▾'></div>
      </div>
      <div class='k k-rarr' id='kc-39' pre='▸'></div>
    </div>
  </div>


</div>
</body>
</html>