"use strict";

// déclarations des commandes - JSON
var commandes = {
'aide':
  "<p>Liste des commandes : <span class='code'>à propos</span>, <span class='code'>compétences</span>, <span class='code'>formations</span>, <span class='code'>diplomes</span>, <span class='code'>cv</span>, <span class='code'>expériences</span>, <span class='code'>portfolio</span>, <span class='code'>contact</span></p>",

'à propos':
  "<p>Je m’appelle Virgile Mendes, j’ai 18 ans et je suis actuellement étudiant en 1<sup>ère</sup> de DUT Métiers du Multimédia et de l’Internet à l’IUT de Champs-sur-Marne (composante de l’Université Gustave Eiffel). Intéressé par le milieu numérique depuis plusieurs années et grâce à cette formation, j’ai acquis une polyvalence entre des compétences en développement web et une créativité artistique dans ce domaine. En dehors de ça, j’aime les voyages, les musées, les documentaires et les parcs à thèmes 🎡!</p>",

'compétences': //faire pour aussi l'orthographe : competences
  "<legend>👨🏻‍💻 Développement web</legend> <progress id='html' max='100' value='50'>50%</progress><label for='html'>HTML</label><br><progress id='css' max='100' value='50'>50%</progress><label for='css'>CSS</label><br><progress id='js-jquery' max='100' value='50'>50%</progress><label for='js-jquery'>Javascript / jQuery</label><br><progress id='php-sql' max='100' value='50'>50%</progress><label for='php-sql'>PHP / SQL</label><br><legend>🎨 Design</legend> <progress id='ps' max='100' value='50'>50%</progress><label for='ps'>Photoshop</label><br><progress id='ai' max='100' value='50'>50%</progress><label for='ai'>Illustrator</label><br><progress id='id' max='100' value='50'>50%</progress><label for='id'>Indesign</label><br><progress id='xd' max='100' value='50'>50%</progress><label for='xd'>Adobe XD</label><br><legend>💻 Logiciels & Systèmes d'exploitation</legend> <progress id='git' max='100' value='50'>50%</progress><label for='html'>Git</label><br><progress id='gsuite' max='100' value='50'>50%</progress><label for='css'>Google Suite</label><br><progress id='windows' max='100' value='50'>50%</progress><label for='js-jquery'>Windows</label><br><progress id='mac-os' max='100' value='50'>50%</progress><label for='php-sql'>Mac OS</label>",

'formations':
  "<p>2019 / 2021 - DUT Métiers du Multimédia et de l’Internet<br><span class='formations-align'>IUT de Champs-sur-Marne ⎟ Université Gustave Eiffel</span><br>2019 / 2020 - Statut national étudiant-entrepreneur<br><span class='formations-align'>Pépite 3EF ⎟ Université Paris-Est</span><br>2016 / 2019 - Cursus général économique et social<br><span class='formations-align'>Lycée Jean-Baptiste de la Salle ⎟ Saint-Denis</span><br>2012 / 2016 - Cycle des approfondissements<br><span class='formations-align'>Collège Aimé et Eugénie Cotton ⎟ Le Blanc-Mesnil</span></p>",

'diplomes': //faire pour aussi l'orthographe : diplômes
  "<p>2019 - Baccalauréat Économique et Social<br><span class='diplomes-align'> Spécialité Mathématiques et Option Histoire des arts ⎟ Admis</span><br>2016 - Brevet des collèges<br><span class='diplomes-align'> Option Latin ⎟ Mention Bien</span></p>",

'cv': //faire pour aussi l'orthographe : CV
  "<p><a href='MENDES-Virgile-CV.pdf'>Cliquez ici pour télécharger mon CV PDF 📇!</a></p>",

'expériences': //faire pour aussi l'orthographe experiences
  "<p>Juillet 2020 - Stage d’entreprenariat ⎟ <a target='_blank' href='hormen.fr'>Hormen</a><br>Mars / Juin 2020 - Projet tutoré de 1<sup>ère</sup> année de DUT ⎟ <a target='_blank' href='flowwi.fr'>Flowwi</a><br>Décembre 2015 - Stage d’observation ⎟ <a target='_blank' href='https://milliweb.fr/'>Milliweb</a></p>",
  
'portfolio':
  "<legend>Sélection de projets :</legend><p>🖥 *Site web - <a target='_blank' href='http://virgile.men/portrait-chinois'>Portrait-chinois</a> ⎟ 2020<br>📐 *UX Design - <a target='_blank' href='http://virgile.men/brief-netflix'>Brief Netflix</a> ⎟ 2020<br>🖥 *Site web - <a target='_blank' href='https://flowwi.fr'>Flowwi, suit ton courant</a> ⎟ 2020<br>🖌 Graphisme - <a target='_blank' href='https://www.behance.net/gallery/95596239/Affiche-de-lexposition-des-livres-des-MMI-1-JPO-2020'>Affiche de l’exposition des 10 mots pour la JPO</a> ⎟ 2020<br>🖥 Site web - <a target='_blank' href='http://virgile.men/simulateur-assurance-vie'>Simulateur d’assurance-vie</a> ⎟ 2020<br>💡 Conception de produit - <a target='_blank' href='https://www.behance.net/gallery/95601591/Nike-On-Air-Paris-2018'>Nike On Air Paris</a> ⎟ 2018<br>🖌 Graphisme - <a target='_blank' href='http://virgile.men/snapchat-blanc-mesnil'>Filtre Snapchat Le Blanc-Paris</a> ⎟ 2016</p>",

'contact':
  "<p>Mes réseaux-sociaux : <a target='_blank' href='https://www.linkedin.com/in/virgile-men'>LinkedIn</a>, <a target='_blank' href='https://www.behance.net/virgile-men'>Behance</a>, <a target='_blank' href='https://medium.com/@virgile.men'>Medium</a><br>Mes pages contributives : <a target='_blank' href='https://github.com/virgiIe'>Github</a>, <a target='_blank' href='https://codepen.io/virgile-dm'>Codepen</a><br>---<br>Vous pouvez aussi me contacter par ce <a href='virgile.dm/contact'>formulaire</a> 📮!</p>",
};

// déclarations de la variable saisie (l'intérieur du input) et de keyCode (le code de la derniere touche cliqué)
var saisie = String, keyCode = Number;

$(document).ready(function() {


  // activation de l'input si le keycode est celui d'entrée
  $("#insertCommande").on("keydown", function (e){
    keyCode = e.keyCode || e.which;
    saisie = $("#insertCommande").val();
    // console.log('1 '+saisie);

    if (keyCode === 13) {
      if (saisie = commandes[saisie]) {
        var bon = $("#insertCommande").val();
        $(`<div class="terminal-commande"><span class="success">virgile.men</span><span class="directory">~</span><span class="user-input" id="userInput"></span><span class="code">`+bon+`</div></span><div class="terminal-line">`+saisie+`</div>`).insertBefore(".terminal-insert");

      } else {
        var erreur = $("#insertCommande").val();
        $(`<div class="terminal-commande"><span class="success">virgile.men</span><span class="directory">~</span><span class="user-input" id="userInput"></span><span class="code">`+erreur+`</div></span></div><div class="terminal-line"><p>aucune commande associée à <span class="code">`+erreur+`</span></p></div>`).insertBefore(".terminal-insert");
      }
    }
  });

  // A FAIRE : que l'input se réinialise a 0 quand la commande est entrée




  // A FAIRE : .upLower le input













// Partie keyboard

  $('body').keydown(function(e) {
    var $this, code, end, start, value;
    code = e.keyCode || e.which;
    // console.log(code);
    if (code === 13 || code === 16 || code === 18 || code === 91 || code === 93) {
      $('#kc-' + code + 'R').addClass('active');
      $('#kc-' + code + 'L').addClass('active');
    } else {
      $('#kc-' + code).addClass('active');
    }
    // spaces on tab
    if (code === 9) {
      start = this.selectionStart;
      end = this.selectionEnd;
      $this = $(this);
      value = $this.val();
      $this.val(value.substring(0, start) + "  " + value.substring(end));
      this.selectionStart = this.selectionEnd = start + 2;
      return e.preventDefault();
    }
  });

  $('body').keyup(function(e) {
    var code;
    code = e.keyCode || e.which;
    if (code === 13 || code === 16 || code === 18 || code === 91 || code === 93) {
      $('#kc-' + code + 'R').removeClass('active');
      return $('#kc-' + code + 'L').removeClass('active');
    } else {
      return $('#kc-' + code).removeClass('active');
    }
  });
  
})