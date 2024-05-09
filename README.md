## CangasCup2024:

“CangasCup2024 es la plataforma definitiva para los amantes del futsal. Desde la programación de partidos hasta la gestión de equipos y resultados, nuestra aplicación simplifica la organización de torneos. Los administradores pueden acceder a una interfaz personalizada para mantener todo bajo control. ¡Únete a la acción y vive la pasión del futsal con CangasCup2024!”

## Características

- **Información del torneo**: Donde se celebra y más datos. (Para el usuario)
- **Equipos y Jugadores**: Registra y muestra los resultados de los partidos.
- **Interfaz de Administración**: Los organizadores pueden gestionar datos y configuraciones.

## Tecnologías Utilizadas

- **Frontend**:

  - Astro con TypeScript
  - Tailwind CSS

- **Backend**:
  - TypeScript
  - AstroDB
- **Diseño**
  - Penpot[Enlace para Penpot]([https://design.penpot.app/#/view/93d0ad32-dfe5-8194-8003-fe22654ffe96?page-id=eb5eeddf-411d-8090-8004-02d3327f078e&section=interactions&index=0&share-id=af2058fc-4f53-80f4-8004-0a8021c2741b)


## Uso

- Como usuario:
  - Accede a la página de inicio para ver la información general del maratón.
  - Consultar horarios de la maratón.
  - Ver patrocinadores oficiales y acceder a sus web/redes sociales
  - Ver rankings de jugadores(Goles, tarjetas, mvp)
- Como admin:
- (Fase de desarrollo)
  - Añadir , editar y borrar equipos.
  - Añadir , editar y borrar jugadores.
  - Añadir , editar y borrar estadisticas de los jugadores.

## Para lanzar el proyecto necesitamos

**Para el frontend**
Tenemos dos app diferentes una para el Admin y otra para el User,
```bash
  cd frontend              cd frontend
  cd user                  cd admin 
```

por lo tanto entramos al directorio de cada tipo para iniciarlo y hacemos:
```bash
  npm install
  npm run dev
```

**Para el backend**
Necesitamos una base de datos MySQL. Puedes usar docker para lanzarla, haciendo:
 
```bash
    docker run --name mysql-cup -e MYSQL_ROOT_PASSWORD=12345678 -e MYSQL_DATABASE=cangascup -p 3306:3306 -d mysql:latest

   mvn clean install mvn spring-boot:run  o ./mvnw spring-boot:run
```
