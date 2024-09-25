<?php
header('Content-Type: application/json');
// O resto do seu código PHP...

include 'connection.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $checkPassword = $_POST['checkPassword'];
    $picture_id = 0;

    if ($checkPassword === $password) {
        $hashedPassword = password_hash($password, PASSWORD_BCRYPT);

        try {
            $stmt = $conn->prepare("INSERT INTO tb_user (username, email, password, picture_id) VALUES (:username, :email, :password, :picture_id)");
            $stmt->bindParam(':username', $username);
            $stmt->bindParam(':email', $email);
            $stmt->bindParam(':password', $hashedPassword);
            $stmt->bindParam(':picture_id', $picture_id);

            if ($stmt->execute()) {
                echo json_encode(['status' => 'sucesso']);
            } else {
                echo json_encode(['status' => 'erro']);
            }
        } catch (PDOException $e) {
            echo json_encode(['status' => 'erro', 'message' => $e->getMessage()]);
        }
    } else {
        echo json_encode(['status' => 'erro', 'message' => 'As senhas não coincidem.']);
    }
} else {
    echo json_encode(['status' => 'erro', 'message' => 'Método não suportado.']);
}
?>
