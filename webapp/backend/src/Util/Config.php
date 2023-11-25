<?php
namespace DogtorPET\Backend\Util;

use Monolog\Logger;
use Monolog\Level;
use Monolog\Handler\StreamHandler;

class Config {

    ### PATRÓN DE DISEÑO SINGLETON ######################################
    private static Config $instancia; // Atributo de clase

    private function __construct() { }

    public static function obtenerInstancia(): Config { // Función de clase
        // Lazy loading
        if( !isset( self::$instancia ) ) self::$instancia = new Config();
        return self::$instancia;
    }
    #####################################################################

    public function directorioBase(): string { // Función de instancia
        return dirname(__DIR__, 2);
    }

    public function cargarParametros(): array { // Función de instancia
        $archivo = $this->directorioBase() . '/src/params.ini';
        return parse_ini_file( $archivo, true );
    }

    public function jwtSecret(): string {
        $params = $this->cargarParametros();
        return $params['jwt']['secret'];
    }

    public function crearLog(): Logger {
        $log = new Logger('DogtorPET');
        $archivo = $this->directorioBase() . '/logs/mensajes.log';
        $handler = new StreamHandler($archivo, Level::Debug);
        $log->pushHandler( $handler );
        return $log;
    }

}

?>