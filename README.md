# Simple API Example

A simple REST API built with Express.js and TypeScript that demonstrates error handling, middleware usage, and basic CRUD operations.

## Features

- TypeScript for type safety
- Express.js for routing and middleware
- Centralized error handling
- Input validation
- CRUD operations for items

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd simple-api-example
```

2. Install dependencies:
```bash
npm install
```

3. Build the project:
```bash
npm run build
```

4. Start the server:
```bash
npm start
```

The server will start on port 3000 by default. You can change this by setting the `PORT` environment variable.

## API Endpoints

### Get All Items
```http
GET /items
```
Returns a list of all items.

**Response (200 OK)**
```json
[
  {
    "id": "123",
    "name": "Item 1"
  },
  {
    "id": "456",
    "name": "Item 2"
  }
]
```

### Get Item by ID
```http
GET /items/:id
```
Returns a specific item by its ID.

**Response (200 OK)**
```json
{
  "id": "123",
  "name": "Item 1"
}
```

**Error Response (404 Not Found)**
```json
{
  "status": "error",
  "message": "Item with the specified id not found"
}
```

### Create Item
```http
POST /items
Content-Type: application/json

{
  "name": "New Item"
}
```
Creates a new item.

**Response (201 Created)**
```json
{
  "id": "789",
  "name": "New Item"
}
```

**Error Response (400 Bad Request)**
```json
{
  "status": "error",
  "message": "Name is required"
}
```
or
```json
{
  "status": "error",
  "message": "Name must be at least 2 characters long"
}
```

### Update Item
```http
PUT /items/:id
Content-Type: application/json

{
  "name": "Updated Item"
}
```
Updates an existing item.

**Response (200 OK)**
```json
{
  "id": "123",
  "name": "Updated Item"
}
```

**Error Responses**
- 400 Bad Request (validation error)
- 404 Not Found (item not found)

### Delete Item
```http
DELETE /items/:id
```
Deletes an item.

**Response (204 No Content)**

**Error Response (404 Not Found)**
```json
{
  "status": "error",
  "message": "Item with the specified id not found"
}
```

## Error Handling

The API uses a centralized error handling system with the following error types:

### ValidationError (400 Bad Request)
Used for input validation errors:
- Missing required fields
- Invalid field formats
- Business rule violations

### NotFoundError (404 Not Found)
Used when a requested resource doesn't exist.

### Generic Error (500 Internal Server Error)
Used for unexpected server errors.

## Project Structure

```
src/
├── controllers/     # Route handlers
├── errors/         # Custom error classes
├── middlewares/    # Express middlewares
├── models/         # Data models
├── services/       # Business logic
├── types/          # TypeScript type definitions
├── validators/     # Input validation
└── index.ts        # Application entry point
```

## Development

### Available Scripts

- `npm run build` - Build the TypeScript code
- `npm start` - Start the server (requires build first)
- `npm run dev` - Start the development server with hot reload