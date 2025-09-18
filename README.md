# Convertidor Universal - Backend

Este es el backend para el Convertidor Universal, un proyecto desarrollado para el Parcial 1 de Web 2. La aplicación proporciona endpoints para realizar conversiones de diferentes tipos de unidades.

## Características

- Conversión de unidades de tiempo
- Conversión de unidades de peso
- Conversión de unidades de temperatura
- Conversión de monedas (tasas fijas)

## Tecnologías Utilizadas

- Node.js
- Express.js
- Express Validator
- CORS
- Dotenv

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/Camiloaa12/backend-parcial1.git
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Crea un archivo `.env` con las siguientes variables:
   ```
   PORT=3000
   NODE_ENV=development
   ```

4. Inicia el servidor:
   ```bash
   npm run dev
   ```

## Endpoints

### Tiempo
- **POST** `/api/tiempo/convertir`
  - Convierte entre diferentes unidades de tiempo

### Peso
- **POST** `/api/peso/convertir`
  - Convierte entre diferentes unidades de peso

### Temperatura
- **POST** `/api/temperatura/convertir`
  - Convierte entre diferentes unidades de temperatura

### Moneda
- **POST** `/api/moneda/convertir`
  - Convierte entre diferentes monedas

## Formato de Solicitud

```json
{
  "valor": 100,
  "unidadOrigen": "USD",
  "unidadDestino": "EUR"
}
```

## Formato de Respuesta

```json
{
  "resultado": 92,
  "unidadDestino": "EUR"
}
```

## Autor

Camilo Andres Arias