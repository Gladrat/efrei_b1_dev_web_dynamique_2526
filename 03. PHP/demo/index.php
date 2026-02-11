<!DOCTYPE html>
<html>

<head>
  <title>Ceci est une page de test avec des balises PHP</title>
  <metacharset="utf-8" />
</head>

<body>
  <h1>Accueil</h1>
  <?php
  // Insérez le header ici
  // include("nom_du_fichier.php");
  ?>
  <nav id="menu">
    <div class="element_menu">
      <h3>Titre menu</h3>
      <ul>
        <li>
          <a href="index.php">Homepage</a>
        </li>
        <li>
          <a href="page2.html">Lien2</a>
        </li>
        <li>
          <a href="contact.php">Contact</a>
        </li>
      </ul>
    </div>
  </nav>
  Cette page contient du code HTML avec des balises PHP.<br />
  <?php
  echo "hello <strong>world!</strong>";
  ?>
</body>

</html>