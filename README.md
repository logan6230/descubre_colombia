# Despliegue de la API y Aplicación - Descubre Colombia

Este proyecto incluye una API desarrollada en PH y una aplicación frontend desarrollada en JS vanilla. A continuación, se describen los pasos para configurar ambos utilizando **Laragon** y el archivo de base de datos `db_descubre_colombia.sql`.

---

## **Requisitos previos**
Antes de comenzar, asegúrate de tener instalado y configurado **Laragon** en tu máquina. Este entorno facilita el uso de Apache, MySQL y PHP.
1. **Instalar Laragon**  
   Descárgalo desde [https://laragon.org/](https://laragon.org/) y asegúrate de incluir soporte para:
   - PHP
   - MySQL
   - Apache
---

## **Despliegue**

### **1. Clonar el repositorio**
Clona el proyecto en tu máquina local:
```bash
git clone https://github.com/logan6230/descubre_colombia.git
```

### **2. Coloca las carpetas dentro de Laragon**
Coloca las carpetas `api_descubre_colombia` y `app_descubre_colombia` dentro del directorio `www` de Laragon:

```makefile
C:\laragon\www\
```

## 3. Configurar la base de datos

1. Inicia **Laragon**.
2. Abre el administrador de bases de datos. Puedes usar **Adminer** o **phpMyAdmin**.
3. Crea una base de datos llamada `descubre_colombia`.
4. Importa el archivo `db_descubre_colombia.sql`:
    - En **Adminer** o **phpMyAdmin**, selecciona la base de datos `descubre_colombia`.
    - Utiliza la opción de **Importar** para cargar el archivo `db_descubre_colombia.sql`.
    - Esto creará las tablas necesarias para el proyecto.

## 4. Configurar y desplegar la aplicación

1. **Navega a la carpeta www de laragon:**
    ```bash
    cd C:\laragon\www\descubre_colombia
    ```

2. **Configura el archivo `.env`**:
    - Busca el archivo `config` dentro de `api_descubre_colombia`.
    - Abre el archivo `config` y edítalo con las credenciales de conexión a la base de datos:
    ```env
    {
    "conexion":{
        "server" : "localhost",
        "user" : "root",
        "password" : "",
        "database" : "descubre_colombia",
        "port": "3306"
        }
    }
    ```

La APP estará disponible en: [`http://localhost/descubre_colombia/app_descubre_colombia/index.html`](http://localhost/descubre_colombia/app_descubre_colombia/index.html).

## 5. Estructura del proyecto

- `api_descubre_colombia/`: API desarrollada en PHP.
- `app_descubre_colombia/`: Aplicación frontend (Js vanilla, HTML y CSS).
- `db_descubre_colombia.sql`: Script SQL para inicializar la base de datos.

## 6. Notas finales

- Asegúrate de que los servidores de **Apache** y **MySQL** estén activos en Laragon.
- Si encuentras errores, revisa los siguientes puntos:
  - Verifica que el archivo `config` de la API esté configurado correctamente.
- Para consultas adicionales, revisa la documentación oficial de **PHP** y**Laragon**.

---


