<?php
namespace DogtorPET\Backend\Modelos;

class Usuario extends JsonEntity {

    public const SQL_SELECT_USUARIO = 'SELECT * FROM usuario WHERE username=?';
    public const SQL_SELECT_LOGIN = 'SELECT * FROM usuario WHERE username=? AND password=SHA2(?,256)';

}
?>