var commandes = {
  'aide':
    "<p>Liste des commandes : <span class='code'>à propos</span>, <span class='code'>inspirations</span>, <span class='code'>langues</span>, <span class='code'>compétences</span>, <span class='code'>formations</span>, <span class='code'>diplômes</span>, <span class='code'>cv</span>, <span class='code'>expériences</span>, <span class='code'>portfolio</span>, <span class='code'>coordonnées</span>, <span class='code'>contact</span></p>",
  
  'à propos':
    "<p>Je m’appelle Virgile Mendes, j’ai 18 ans et je suis actuellement étudiant en 1<sup>ère</sup> de DUT Métiers du Multimédia et de l’Internet à l’IUT de Champs-sur-Marne (composante de l’Université Gustave Eiffel). Intéressé par le milieu numérique depuis plusieurs années et grâce à cette formation, j’ai acquis une polyvalence entre des compétences en développement web et une créativité artistique dans ce domaine. En dehors de ça, j’aime les voyages, les musées, les documentaires et les parcs à thèmes 🎡!</p>",

  'langues':
  "<p>🇵🇹 Portugais ⎟ Pratique orale courante, C1<br>🇬🇧 Anglais ⎟ Niveau intermédiaire, B2<br>🇪🇸 Espagnol ⎟ Notions secondaires, A2</p>",

  'inspirations':
  "<p>Mes inspirations sont Tinker Hatfield et Walter Disney pour leurs visions de la créativité.</p>",
  
  'compétences':
    "<legend>👨🏻‍💻 Développement web</legend> <progress id='html' max='100' value='90'>90%</progress><label for='html'>HTML</label><br><progress id='css' max='100' value='80'>80%</progress><label for='css'>CSS</label><br><progress id='js-jquery' max='100' value='60'>60%</progress><label for='js-jquery'>Javascript / jQuery</label><br><progress id='php-sql' max='100' value='40'>40%</progress><label for='php-sql'>PHP / SQL</label><br><legend>🎨 Design</legend> <progress id='ps' max='100' value='50'>50%</progress><label for='ps'>Photoshop</label><br><progress id='ai' max='100' value='80'>80%</progress><label for='ai'>Illustrator</label><br><progress id='id' max='100' value='60'>60%</progress><label for='id'>Indesign</label><br><progress id='xd' max='100' value='70'>70%</progress><label for='xd'>Adobe XD</label><br><legend>💻 Logiciels & Systèmes d'exploitation</legend> <progress id='git' max='100' value='40'>40%</progress><label for='html'>Git</label><br><progress id='gsuite' max='100' value='70'>70%</progress><label for='css'>Google Suite</label><br><progress id='windows' max='100' value='70'>70%</progress><label for='js-jquery'>Windows</label><br><progress id='mac-os' max='100' value='80'>80%</progress><label for='mac-os'>Mac OS</label>",
  
  'formations':
    "<p>2019 / 2021 - DUT Métiers du Multimédia et de l’Internet<br><span class='formations-align'>IUT de Champs-sur-Marne ⎟ Université Gustave Eiffel</span><br>2019 / 2020 - Statut national étudiant-entrepreneur<br><span class='formations-align'>Pépite 3EF ⎟ Université Paris-Est</span><br>2016 / 2019 - Cursus général économique et social<br><span class='formations-align'>Lycée Jean-Baptiste de la Salle ⎟ Saint-Denis</span><br>2012 / 2016 - Cycle des approfondissements<br><span class='formations-align'>Collège Aimé et Eugénie Cotton ⎟ Le Blanc-Mesnil</span></p>",
  
  'diplômes':
    "<p>2019 - Baccalauréat Économique et Social<br><span class='diplomes-align'> Spécialité Mathématiques et Option Histoire des arts ⎟ Admis</span><br>2016 - Brevet des collèges<br><span class='diplomes-align'> Option Latin ⎟ Mention Bien</span></p>",
  
  'cv':
    "<p><a href='./assets/pdf/MENDES-Virgile-CV.pdf'>Cliquez ici pour télécharger mon CV PDF 📇!</a></p>",
  
  'expériences':
    "<p>Mars / Juin 2020 - Projet tutoré de 1<sup>ère</sup> année de DUT ⎟ <a target='_blank' href='http://flowwi.fr'>Flowwi</a><br>Décembre 2015 - Stage d’observation ⎟ <a target='_blank' href='https://milliweb.fr/'>Milliweb</a></p>",
    
  'portfolio':
    "<legend>Sélection de projets :</legend><p>🖥 Site web - <a target='_blank' href='https://virgile-men.github.io/portrait-chinois/'>Portrait-chinois</a> ⎟ 2020<br>📐 UX Design - <a target='_blank' href='https://www.behance.net/gallery/97169935/Challenge-UX-Redesign-de-Netflix'>Brief Netflix</a> ⎟ 2020<br>🖥 Site web - <a target='_blank' href='http://flowwi.fr'>Flowwi, suis ton courant</a> ⎟ 2020<br>🖌 Graphisme - <a target='_blank' href='https://www.behance.net/gallery/95596239/Affiche-de-lexposition-des-livres-des-MMI-1-JPO-2020'>Affiche de l’exposition des 10 mots pour la JPO</a> ⎟ 2020<br>🖥 Site web - <a target='_blank' href='https://virgile-men.github.io/lafinancepourtous-2020/'>Simulateur d’assurance-vie</a> ⎟ 2020<br>💡 Conception de produit - <a target='_blank' href='https://www.behance.net/gallery/95601591/Nike-On-Air-Paris-2018'>Nike On Air Paris</a> ⎟ 2018</p>",

  'coordonnées':
    "<p>📧 <a href='mailto:contact@virgile.men'>contact@virgile.men</a><br>📞 <a href='tel:+33695763806'>06 95 76 38 06</a></p>",
  
  'contact':
    "<p>Mes réseaux-sociaux : <a target='_blank' href='https://www.linkedin.com/in/virgile-men'>LinkedIn</a>, <a target='_blank' href='https://www.behance.net/virgile-men'>Behance</a>, <a target='_blank' href='https://medium.com/@virgile.men'>Medium</a><br>Mes pages contributives : <a target='_blank' href='https://github.com/virgile-men'>Github</a>, <a target='_blank' href='https://codepen.io/virgile-men'>Codepen</a><br>---<br>Vous pouvez aussi me contacter par ce <a href='./contact/'>formulaire</a> 📮!</p>",

  'easter egg':
    "<p>Si vous voyez ça dans le terminal, c'est que vous êtes curieux de mon code 😄</p>",
    };