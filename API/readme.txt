Pruebas de API - DemoBlaze (Postman)
Este proyecto contiene la colección de pruebas de API para la autenticación en DemoBlaze, automatizadas con Postman y ejecutables con Newman.

1. Estructura del Proyecto
/postman-tests
  ├── demoBlaze_API.json       	 # Collection de Postman
  ├── environment.json               # Variables de entorno
  ├── README.md                      # Documentación del proyecto
  ├── newman                         # Carpeta donde se generarán reportes

2. Requisitos Previos
Antes de ejecutar las pruebas, asegúrate de tener instalado:

- Postman 

3. Importar y Ejecutar en Postman
- Importar la colección en Postman:

	Abrir Postman
	Ir a File > Import
	Seleccionar DemoBlaze_API_Tests.json
- Importar las variables de entorno:
	Ir a Environments > Import
	Seleccionar environment.json
- Ejecutar las pruebas:
Ir a la pestaña Collections
Seleccionar DemoBlaze API Tests
Click en Run Collection


4. Estructura de Pruebas en la Collection
- DemoBlaze API Tests (Collection)
├── - Signup (Registro de usuario)
│ ├── ✅ POST Signup - Nuevo usuario
│ ├── ❌ POST Signup - Usuario existente
├── - Login (Autenticación)
│ ├── ✅ POST Login - Usuario válido
│ ├── ❌ POST Login - Usuario inválido

Cada request incluye tests automatizados para verificar respuestas esperadas.