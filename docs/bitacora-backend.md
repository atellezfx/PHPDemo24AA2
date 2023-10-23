# Creación de un proyecto en PHP (backend)

1. Instalar PHP y MySQL a través de XAMPP [https://www.apachefriends.org/es/index.html](https://www.apachefriends.org/es/index.html)

2. Instalar Composer [https://getcomposer.org/doc/00-intro.md#installation-windows](https://getcomposer.org/doc/00-intro.md#installation-windows)

3. Verificar la instalación con los siguientes comandos

    ```bash
    $ php -v
    $ composer -V
    ```

4. Crear la carpeta para el proyecto PHP y acceder a ella

    ```bash
    $ mkdir backend
    $ cd backend
    ```

5. Inicializar el proyecto con Composer y seguir las instrucciones en pantalla

    ```bash
    $ composer init
    ```

6. Definir las dependencias del proyecto

    ```bash
    $ composer require slim/slim
    $ composer require slim/psr7
    $ composer require tuupola/cors-middleware --with-all-dependencies
    $ composer require tuupola/slim-jwt-auth
    $ composer require rbdwllr/psr-jwt
    $ composer require monolog/monolog

    ```

7. Modificar la configuración "autoload" del archivo composer.json y guardar los cambios

    ```json
    "autoload": {
        "psr-4": {
            "DogtorPET\\Backend\\": "src/"
        }
    }
    ```

8. Aplicar los cambios del autoload

    ```bash
    $ composer dumpAutoload
    ```

9. Conectarse a MySQl ocupando UTF8 (Se ejecutará en Windows, Linux es UTF8 por default)

    ```bash
    $ mysql -u root -p --default-character-set=utf8
    ```