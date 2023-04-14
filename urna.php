<?php
    $servername = "localhost:3306";
    $username = "root";
    $password = "123456";
    $dbname = "testeVotos";
    $voto = $_POST['txtV1'] . $_POST['txtV2'];
    $imgs = ['img/lula.jpg'];

    $conn = mysqli_connect($servername, $username, $password, $dbname);
    
    // Verificar conexão
    if ($conn->connect_error) {
        die("Conexão falhou: " . $conn->connect_error);
    }

    if($voto == "")
    {
        $sql = "INSERT INTO tbVotos (num) VALUES (NULL)";
        mysqli_query($conn, $sql);
        mysqli_close($conn);
        echo "<meta http-equiv='refresh' content='0;url=index.html'>";
    } else {
        $sql1 = "SELECT * FROM tbCandidatos WHERE cd_can = '$voto'";
        $res = mysqli_query($conn, $sql1);
        if(mysqli_num_rows($res) === 1){
            $sql = "INSERT INTO tbVotos (num) VALUES ('$voto')";
            mysqli_query($conn, $sql);
            echo "<meta http-equiv='refresh' content='0;url=index.html'>";
        } else {
            echo "<meta http-equiv='refresh' content='0;url=index.html'>";
        }
        
        mysqli_close($conn);
    } 
?>