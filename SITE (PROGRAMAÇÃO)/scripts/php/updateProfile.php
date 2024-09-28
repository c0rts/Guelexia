<?php
header('Content-Type: application/json');
include 'connection.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    if (isset($_POST['username']) && isset($_POST['picture_id'])) {
        $username = $_POST['username'];
        $picture_id = $_POST['picture_id'];
        $lastUsername = $_POST['lastUsername'];

        try {
            $stmt = $conn->prepare("UPDATE tb_user SET username = :username, picture_id = :picture_id WHERE username = :lastUsername"); 
            $stmt->bindParam(':username', $username);
            $stmt->bindParam(':picture_id', $picture_id);
            $stmt->bindParam(':lastUsername', $lastUsername); 

            if ($stmt->execute()) {
                echo json_encode(['status' => 'sucesso', 'redirect' => 'configs.html']);
            } else {
                echo json_encode(['status' => 'erro']);
            }
        } catch (PDOException $e) {
            echo json_encode(['status' => 'erro', 'message' => $e->getMessage()]);
        }
    } else {
        echo json_encode(['status' => 'erro', 'message' => 'Dados incompletos.']);
    }
}
