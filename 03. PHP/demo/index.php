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
  echo "hello <strong>world!</strong>";
  echo "<br><br>Votre age: " . ($_GET["age"] ?? "No age");
  ?>

</body>

</html>