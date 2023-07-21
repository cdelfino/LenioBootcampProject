# Leniolabs Bootcamp Project - Marvel Searcher 🦸🏻‍♀

![gif del proyecto](https://res.cloudinary.com/dog4ri0x9/image/upload/v1689908445/Screenshot_111_covmiw.jpg)

## Tecnologías Utilizadas:

- **React**: La base de la aplicación, permite crear componentes reutilizables y gestionar el estado de la interfaz de usuario.
- **React Router**: Se utiliza para el enrutamiento y la navegación entre diferentes páginas y componentes.
- **Local Storage**: Empleado para almacenar y persistir los datos de los superhéroes marcados como favoritos por el usuario.
- **CSS Modules**: Para una gestión eficiente y modular del CSS, evitando conflictos y facilitando el mantenimiento.
- **Fetch API**: Utilizado para obtener datos de la API de Marvel para mostrar información de los superhéroes y realizar búsquedas.
- **JavaScript ES6+**: Se utiliza la última versión de JavaScript para aprovechar las funcionalidades modernas del lenguaje.
- **Responsive Design**: La aplicación está diseñada para adaptarse a diferentes tamaños de pantalla y dispositivos.

## Deploy

El deploy se realizó utilizando AWS Amplify. La aplicación está actualmente alojada en AWS y se puede acceder a ella a través de este enlace: https://main.d28q8tnzdofg66.amplifyapp.com

## Funcionalidades Principales:

1. **Búsqueda de superhéroes**: Los usuarios pueden buscar superhéroes por su nombre utilizando una función de búsqueda inteligente. Los resultados se mostrarán cada vez que el usuario presione la tecla "Enter".

2. **Visualización de cómics**: Al seleccionar un superhéroe de la lista, se muestra una vista detallada con los comics en los que éste aparece, además de una descripción e imagen del mismo.

3. **Página de favoritos**: Los usuarios pueden marcar sus superhéroes favoritos, que se guardarán en el Local Storage para que persistan entre sesiones. Existe una página dedicada a mostrar todos los superhéroes marcados como favoritos por el usuario, lo que facilita su acceso y visualización.

## Instalación y Uso
1) Clona este repositorio en tu máquina local utilizando el siguiente comando:

```bash
git clone https://github.com/cdelfino/LenioBootcampProject

```

2) Instala las dependencias del proyecto con npm o yarn:   

```bash
npm install
// o
yarn install
```

3) Ejecuta la aplicación localmente:

```bash
npm start
// o
yarn start
```

## Créditos y Recursos Externos:

- **API de Marvel**: La aplicación utiliza la API de Marvel para obtener información sobre los superhéroes. Puedes encontrar más información en [https://developer.marvel.com](https://developer.marvel.com).
