
<?php
    header("Content-Type: application/json; charset=UTF-8");

    $conn = new mysqli("192.168.2.69", "nediaoken", "SchattigeWasberen", "pokemon");
    $stmt = $conn->prepare("SELECT name FROM pokemon LIMIT ?");
    $stmt->execute();
    $result = $stmt->get_result();
    $outp = $result->fetch_all(MYSQLI_ASSOC);

    print_r($result);

    echo json_encode($outp);
?>
