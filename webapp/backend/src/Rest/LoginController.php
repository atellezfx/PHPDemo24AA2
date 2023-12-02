<?php
namespace DogtorPET\Backend\Rest;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;

use DogtorPET\Backend\Util\DataSource;
use DogtorPET\Backend\Modelos\Usuario;
use DogtorPET\Backend\Util\Config;
use PsrJwt\Factory\Jwt;


use PDOException;
use PDO;

class LoginController {

    public function login(Request $req, Response $res, array $args) {
        try {
            $credenciales = json_decode( $req->getBody(), true );
            $conexion = DataSource::abrirConexion();
            $sentencia = $conexion->prepare( Usuario::SQL_SELECT_LOGIN );
            $sentencia->bindParam( 1, $credenciales['username'] );
            $sentencia->bindParam( 2, $credenciales['password'] );
            $sentencia->execute();
            $resultset = $sentencia->fetch( PDO::FETCH_ASSOC );
            if( $resultset ) {
                // Generar token (JWT) para crear la sesión del usuario
                $factory = new Jwt();
                $config = Config::obtenerInstancia();
                $builder = $factory->builder();
                $token = $builder->setSecret( $config->jwtSecret() )
                    ->setPayloadClaim('username', $credenciales['username'])
                    ->setExpiration( time() + (3600 *2) )
                    ->build();
                $res->getBody()->write( json_encode(['token'=>$token->getToken()])  );
                return $res->withHeader('Content-Type', 'application/json')->withStatus( 200 );
            }
            $mensaje = ['codigo' => 'error', 'mensaje' => 'Credenciales incorrectas!'];
            $res->getBody()->write( json_encode( $mensaje ) );
            return $res->withHeader('Content-Type', 'application/json')->withStatus( 401 );
        } catch(PDOException $e) {
            $mensaje = ['codigo' => $e->getCode(), 'mensaje' => $e->getMessage()];
            $res->getBody()->write( json_encode( $mensaje ) );
            return $res->withHeader('Content-Type', 'application/json')->withStatus( 500 );
        }
    }

}



?>