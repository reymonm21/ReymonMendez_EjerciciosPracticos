# README
## Proyecto de Pruebas Automatizadas con Cypress - SauceDemo

Este proyecto utiliza Cypress para automatizar pruebas de interfaz de usuario (UI) en aplicaciones web. Las pruebas están escritas en Javascript y están diseñadas para validar la funcionalidad de la aplicación web a través de una serie de escenarios.

### Tabla de Contenidos
- Requisitos previos
- Instalación
- Estructura del Proyecto
- Ejecutar las Pruebas
- Configuración de Reportes

### Requisitos previos
- Node.js (versión 16 o superior).
- npm (administrador de paquetes de Node.js).
- Instalar **[Visual studio Code](https://code.visualstudio.com/download)** (Ultima versión recomendada).
- Cypress (se instalara con npm). 

### Instalación
1. Clonar el repositorio:
    git clone <Link_del_repositorio>
    cd tu_repositorio
2. Instalar dependencias: 
    npm install

### Estructura del proyecto # Páginas del modelo de página (POM)
├──cypress/                     # Contiene datos del proyecto cypress.
│   ├── e2e/                    # Contiene los tests.
│   ├── reports/                # Guarda el reporte HTML de los resultados de las pruebas.
│   ├── screenshots/            # Contiene los screenshots de las pruebas. 
│   ├── support/                # Contiene herramientas que soportan el framework de pruebas.
├── ├── ├──pages                # Páginas del modelo de página (POM).
├── .gitignore                  # Archivos y directorios a ignorar por git.
├── package-lock.json           # Archivo automatico de dependencias.
├── package.json                # Información y dependencias del proyecto.
├── README.md                   # Este archivo.
└── cypress.config.js           # Configuración de cypress. 

### Ejecutar las Pruebas
Para ejecutar las pruebas en este proyecto, puedes usar los siguientes comandos de Playwright:
1. Ejecutar todas las pruebas: Puedes ejecutar todas las pruebas definidas en la carpeta tests/ y generar los resultados en la terminal con el siguiente comando:
    npx cypress run 

2. Ejecutar pruebas en modo interactivo: Si deseas ejecutar las pruebas de manera interactiva (ver cómo se ejecutan), usa el siguiente comando:
    npx cypress open

### Configuración de Reportes
Puedes generar reportes detallados en HTML utilizando la configuración de Mochawesome.
1. Reporte se genera automaticamente al ejecutar el siguiente comando:
npx cypress run
El archivo actualizado del reporte se encuentra en la ruta: cypress\reports\html\index.html.





