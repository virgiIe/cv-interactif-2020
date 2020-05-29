"use strict";

// déclarations de la variable saisie (l'intérieur de l'input) et de keyCode (le code de la derniere touche cliqué)
var saisie = String, keyCode = Number;

$(document).ready(function() {
  // PARTIE TERMINAL
  
  // assurer que les caractères dans l'input sont en minuscule --> S2 TP1 / Formulaire
  $("#insertCommande").on("keyup",function(){
    var inputLower = $("#insertCommande").val();
    inputLower = inputLower.toLowerCase();
    $("#insertCommande").val(inputLower);
  });

  // activation de la commande insérée dans l'input si le keycode est  celui de la touche entrée
  $("#insertCommande").on("keydown", function (e){
    keyCode = e.keyCode || e.which;
    saisie = $("#insertCommande").val();

    if (keyCode === 13) {
      if (saisie = commandes[saisie]) {
        var bon = $("#insertCommande").val();
        $(".terminal-fenetre").append(`<div class="terminal-commande"><span class="profil">virgile.men</span><span class="repertoire">~</span><span class="user-input" id="userInput"></span><span class="code">`+bon+`</div></span><div class="terminal-line">`+saisie+`</div>`);

      } else {
        var erreur = $("#insertCommande").val();
        $(".terminal-fenetre").append(`<div class="terminal-commande"><span class="profil">virgile.men</span><span class="repertoire">~</span><span class="user-input" id="userInput"></span><span class="code">`+erreur+`</div></span></div><div class="terminal-line"><p>aucune commande associée à <span class="code">`+erreur+`</span></p></div>`);
      }
      $("#insertCommande").val(""); // réinialisation de l'intérieur de l'input

      // Scroll automatique jusqu'au bout de la commande entrée
      var scrollValue = document.querySelector('.terminal-fenetre').scrollHeight;
      $(".terminal-fenetre").animate({ scrollTop: scrollValue }, 1000);

    }
  });


// PARTIE KEYBOARD

  // Animation de la touche du clavier enfoncée
  $('body').keydown(function(e) {
    keyCode = e.keyCode || e.which;

    if (keyCode === 13 || keyCode === 16 || keyCode === 18 || keyCode === 91 || keyCode === 93) {
      $('#kc-' + keyCode + 'R').addClass('active');
      $('#kc-' + keyCode + 'L').addClass('active');
    } else {
      $('#kc-' + keyCode).addClass('active');
    }
  });

  // Animation de la touche du clavier relevée
  $('body').keyup(function(e) {
    keyCode = e.keyCode || e.which;

    if (keyCode === 13 || keyCode === 16 || keyCode === 18 || keyCode === 91 || keyCode === 93) {
      $('#kc-' + keyCode + 'R').removeClass('active');
      return $('#kc-' + keyCode + 'L').removeClass('active');
    } else {
      return $('#kc-' + keyCode).removeClass('active');
    }
  });
  
})