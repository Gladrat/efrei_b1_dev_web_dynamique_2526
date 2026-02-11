<!DOCTYPE html>
<html>

<head>
  <title>Ceci est une page de test avec des balises PHP</title>
  <metacharset="utf-8" />
</head>

<body>


  <?php
  // $title = "Homepage !!";
  include("header.php");
  ?>

  Cette page contient du code HTML avec des balises PHP.<br />

  <?php
  require_once("utils.php");

  echo "hello <strong>world!</strong>";

  // Query parameters (GET dans l'URL)

  echo "<br><br>Votre age: " . ($_GET["age"] ?? "No age");
  if (isset($_GET["age"])) {
    echo "<br>Votre année de naissance: " . calculerAnneeNaissance($_GET["age"]);
  }

  echo "<br><br>Votre prénom: " . $_GET["prenom"];
  echo "<br>Votre nom: " . $_GET["nom"];
  ?>

  <form action="result.php" method="post">
    <input type="text" name="prenom" id="">
    <input type="text" name="nom" id="">
    <input type="text" name="age" id="">
    <input type="submit" value="Valider">
  </form>

</body>

</html>