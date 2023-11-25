<?php
namespace DogtorPET\Backend\Modelos;

use JsonSerializable;

class JsonEntity implements JsonSerializable {

    // PDO Inicializará el arreglo con los campos de la tabla, de la mano de los métodos mágicos
    protected array $atributos = []; // Arreglo asociativo

    public function __get(string $campo): mixed {
        return $this->atributos[$campo];
    }

    public function __set(string $campo, mixed $valor): void {
        $this->atributos[$campo] = $valor;
    }

    public function jsonSerialize(): array {
        return $this->atributos;
    }

}

?>