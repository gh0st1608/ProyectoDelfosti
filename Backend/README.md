> **Requerimientos**:
 - Instalar Docker
 - Instalar Node Js

## Configuración inicial
- Debe tener configurada la base de datos MongoDB en su sistema o crear una imagen de docker de la misma
- Cree el archivo env.yaml utilizando como base el .env.yaml.example y coloque los valores correspondientes
- Instale las dependencias utilizando el comando npm install

## Compilación y ejecución (local)
- Para generar la base de datos mediante un contenedor de Docker, ejecute el comando `Docker-compose up -d` en la carpeta Backend
- Para realizar la compilación de Typescript y generar el build (./dist), utilice el comando `npm run build`
- Para compilar y ejecutar la aplicación, utilice el comando `npm run start`