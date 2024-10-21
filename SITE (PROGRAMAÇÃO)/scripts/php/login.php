<?php
header('Content-Type: application/json');

include 'connection.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Cadastro
    if (isset($_POST['username']) && isset($_POST['email']) && isset($_POST['password']) && isset($_POST['checkPassword'])) {
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
                    echo json_encode(['status' => 'sucesso', 'redirect' => 'configs.html']);
                } else {
                    echo json_encode(['status' => 'erro']);
                }
            } catch (PDOException $e) {
                echo json_encode(['status' => 'erro', 'message' => $e->getMessage()]);
            }
        } else {
            echo json_encode(['status' => 'erro', 'message' => 'As senhas não coincidem.']);
        }
    }
    // Login
    elseif (isset($_POST['usuario_login']) && isset($_POST['senha_login'])) {
        $username = $_POST['usuario_login'];
        $password = $_POST['senha_login'];

        try {
            $stmt = $conn->prepare("SELECT password, email FROM tb_user WHERE username = :username");
            $stmt->bindParam(':username', $username);
            $stmt->execute();

            if ($stmt->rowCount() === 1) {
                $user = $stmt->fetch(PDO::FETCH_ASSOC);
                if (password_verify($password, $user['password'])) {
                    // Retorna o e-mail junto com o status e redirecionamento
                    echo json_encode([
                        'status' => 'sucesso',
                        'redirect' => 'configs.html',
                        'email' => $user['email'] // Adiciona o e-mail à resposta
                    ]);
                } else {
                    echo json_encode(['status' => 'erro', 'message' => 'Senha incorreta']);
                }
            } else {
                echo json_encode(['status' => 'erro', 'message' => 'Usuário não encontrado']);
            }

        } catch (PDOException $e) {
            echo json_encode(['status' => 'erro', 'message' => $e->getMessage()]);
        }
    } else {
        echo json_encode(['status' => 'erro', 'message' => 'Dados inválidos.']);
    }
} else {
    echo json_encode(['status' => 'erro', 'message' => 'Método não suportado.']);
}
?>
