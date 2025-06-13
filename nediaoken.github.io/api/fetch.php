<?php
    // header("Access-Control-Allow-Origin: *"); // Allow requests from any origin
    // header("Content-Type: application/json");

    // Database connection
    $host = "myqli.pawbandit.com";
    $db = 'pokemon';
    $user = 'nediaoken';
    $pass = 'SchattigeWasberen';

    $conn = new mysqli($host, $user, $pass, $db);

    if ($conn->connect_error) {
        http_response_code(500);
        echo json_encode(["error" => "Database connection failed"]);
        exit;
    }

    // Query all users
    $sql = "SELECT * FROM pokemon LIMIT 5";
    $result = $conn->query($sql)->fetch_all(MYSQLI_ASSOC);
    echo json_encode($result);

    $conn->close();
?>