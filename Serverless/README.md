# Serverless - AWS Node.js Typescript Dynamo DB



## Instrucciones de Instalación y Despliegue en Producción

> **Requerimientos**:
 - Instalar AWS Cli
 - Instalar Node Js
 - Cuenta del proveedor de nube con permisos a lamba functions.

### Using NPM
- Ejecutar `serverless config credentials --provider A --key B --secret C` para establecer credenciales del proveedor de la nube en caso no lo tenga configurado en su editor de codigo VS. Donde A es el proveedor de nube (aws), B es la llave de su acceso a la cuenta de su proveedor de nueb y C es su clave secreta de la cuenta de su proveedor de nube.
- Ejecutar `npm install` para instalar las dependencias del proyecto
- Ejecutar `npm install serverless -g`para instalar la línea de comandos serverless en su máquina
- Ejecutar `serverless deploy` para desplegar el stack en producción



### Instrucciones para Instalación y Despliegue en Desarrollo

> **Requerimientos**:
 Instalar AWS Cli
 Instalar Docker
 Instalar Node Js

- Ejecutar `docker-compose up -d` en el directorio Serverless para construir un contenedor de DynamoDb con docker.
- Ejecutar `npm install dynamodb-admin` 
- Setear variable de entorno para windows con set DYNAMO_ENDPOINT=http://localhost:8000 o Setear variable de entorno para Mac/Linux DYNAMO_ENDPOINT=http://localhost:8000 dynamodb-admin
- Ejecutar en la linea de comandos `dynamodb-admin`                                          
- Ingresar en al web `http://localhost:8001` para visualizar el GUI de dynamodb-admin
- Ejecutar `npm install` para instalar las dependencias del proyecto
- Ejecutar `serverless offline start` para ejecutar el proyecto en local.



```

## Template features

### Project structure

The project code base is mainly located within the `src` folder. This folder is divided in:

- `functions` - containing code base and configuration for your lambda functions
- `libs` - containing shared code base between your lambdas

```
.
├── src
│   ├── functions               # Lambda configuration and source code folder
│   │   ├── hello
│   │   │   ├── handler.ts      # `Hello` lambda source code
│   │   │   ├── index.ts        # `Hello` lambda Serverless configuration
│   │   │   ├── mock.json       # `Hello` lambda input parameter, if any, for local invocation
│   │   │   └── schema.ts       # `Hello` lambda input event JSON-Schema
│   │   │
│   │   └── index.ts            # Import/export of all lambda configurations
│   │
│   └── libs                    # Lambda shared code
│       └── apiGateway.ts       # API Gateway specific helpers
│       └── handlerResolver.ts  # Sharable library for resolving lambda handlers
│       └── lambda.ts           # Lambda middleware
│
├── package.json
├── serverless.ts               # Serverless service file
├── tsconfig.json               # Typescript compiler configuration
├── tsconfig.paths.json         # Typescript paths
└── webpack.config.js           # Webpack configuration
```