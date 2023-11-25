<?php
namespace DogtorPET\Backend\Modelos;

use JsonSerializable;

class Tipo implements JsonSerializable {

    public const SQL_SELECT_TIPO = 'SELECT * FROM tipo';

    private int $id;
    private string $descripcion;

    // public function getId():int {
    //     return $this->id;
    // }

    // public function setId(int $id):void {
    //     $this->id = $id;
    // }

    public function __get(string $atributo): mixed {
        switch($atributo) {
            case 'id': return $this->id;
            case 'descripcion': return $this->descripcion;
            default: return null;
        }
    }

    public function __set(string $atributo, mixed $valor): void {
        switch($atributo) {
            case 'id': $this->id = $valor; break;
            case 'descripcion': $this->descripcion = $valor; break;
        }
    }

    public function jsonSerialize(): array {
        return [
            'id' => $this->id,
            'descripcion' => $this->descripcion
        ];
    }

}

// $t1 = new Tipo();
// $t1->id = 5;
// $t1->descripcion = 'Perro';
// echo( $t1->descripcion );

?>