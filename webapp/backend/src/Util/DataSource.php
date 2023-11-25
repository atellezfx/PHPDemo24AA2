<?php
namespace DogtorPET\Backend\Util;

use PDO;
use PDOException;

class DataSource {

    public static function abrirConexion(): PDO {
        $config = Config::obtenerInstancia();
        try {
            $params = $config->cargarParametros();
            // $conexion = new PDO($params['database']['dburl'],$params['database']['dbusr'],$params['database']['dbpwd']);
            extract( $params['database'] ); // Requiere un arreglo asociativo
            return new PDO($dburl, $dbusr, $dbpwd);
        } catch(PDOException $e) {
            $log = $config->crearLog();
            $log->error( $e->getMessage(), $e->getTrace() );
            throw $e;
        }
    }

}
?>