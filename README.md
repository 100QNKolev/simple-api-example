# Simple Item API

A simple REST API for managing items built with Express.js and TypeScript.

## Features

- Get all items
- Create new items with validation
- TypeScript support
- Error handling with custom validation errors

## API Endpoints

### GET /items
Retrieves all items.

**Response**
```json
[
  {
    "id": "1",
    "name": "Example Item"
  }
]
```

### POST /items
Creates a new item.

**Request Body**
```json
{
  "name": "New Item"
}
```

**Validation Rules**
- Name is required and must be a string
- Name must be at least 2 characters long
- Name must not exceed 50 characters

**Success Response (201)**
```json
{
  "id": "1",
  "name": "New Item"
}
```

**Error Responses**
- 400 Bad Request (Validation Error)
```json
{
  "error": "Name must be at least 2 characters long"
}
```
- 500 Internal Server Error
```json
{
  "error": "Failed to create item"
}
```

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Build the project:
```bash
npm run build
```

3. Start the server:
```bash
npm start
```

The server will start on port 3000 by default.

## Development

To run in development mode with hot reloading:
```bash
npm run dev
```