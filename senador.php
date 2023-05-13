<?php
    $servername = "localhost:3306";
    $username = "root";
    $password = "123456";
    $dbname = "dbUrna";
    $voto = $_POST['txtV1'] . $_POST['txtV2'] . $_POST['txtV3'];
    $cpf = $_POST['cpfV'];

    $conn = mysqli_connect($servername, $username, $password, $dbname);
    
    // Verificar conexão
    if ($conn->connect_error) {
        die("Conexão falhou: " . $conn->connect_error);
    }

    $vcpf = "SELECT * FROM tbSenador WHERE cpf = '$cpf'";
    $resCpf = mysqli_query($conn, $vcpf);
    if(mysqli_num_rows($resCpf) < 1){
        if($voto == "")
        {
            $sql = "INSERT INTO tbSenador (cpf, num) VALUES ('$cpf', NULL)";
            mysqli_query($conn, $sql);
            mysqli_close($conn);
            header("Location: governador.html?cpf=" . urlencode($cpf));
        } else {
            $sql1 = "SELECT * FROM tbCanSen WHERE cd_can = '$voto'";
            $res = mysqli_query($conn, $sql1);
            if(mysqli_num_rows($res) === 1){
                $sql = "INSERT INTO tbSenador (cpf, num) VALUES ('$cpf', '$voto')";
                mysqli_query($conn, $sql);
                header("Location: governador.html?cpf=" . urlencode($cpf));
            } else {
                header("Location: governador.html?cpf=" . urlencode($cpf));
            }
            mysqli_close($conn);
        } 
    } else{
        echo "<script>alert('Você já votou');</script><meta http-equiv='refresh' content='0;url=index.html'>";
    }
?>