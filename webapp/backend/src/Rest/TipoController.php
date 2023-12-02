<?php
namespace DogtorPET\Backend\Rest;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;

use DogtorPET\Backend\Util\DataSource;
use DogtorPET\Backend\Modelos\Tipo;

use PDOException;
use PDO;

class TipoController {

    public function lista(Request $req, Response $res, array $args) {
        try {
            $dbcon = DataSource::abrirConexion();
            $sentencia = $dbcon->prepare( Tipo::SQL_SELECT_TIPO );
            $sentencia->execute();
            $sentencia->setFetchMode(PDO::FETCH_CLASS, Tipo::class);
            $tipos = $sentencia->fetchAll();
            $res->getBody()->write( json_encode( $tipos ) );
            return $res->withHeader('Content-Type', 'application/json')->withStatus( 200 );
        } catch(PDOException $e) {
            $mensaje = ['codigo' => $e->getCode(), 'mensaje' => $e->getMessage()];
            $res->getBody()->write( json_encode( $mensaje ) );
            return $res->withHeader('Content-Type', 'application/json')->withStatus( 500 );
        }
    }

}



?>