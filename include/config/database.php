<?php 

 function conectarDB(){
    
    $db= mysqli_connect('localhost','root','', 'shadowStrike');
    if (!$db) {
                echo "Error: No se conecta a la base de datos";
                exit;
            } 
        
            return $db;
 }