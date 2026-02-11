<?php

function calculerAnneeNaissance(int $age) {
  return (int) date("Y") - $age;
} 