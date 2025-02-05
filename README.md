
# Public API

## Description
This is a simple public API that returns basic information in JSON format, including:
- A registered email address.
- The current datetime in ISO 8601 format (UTC).
- The GitHub URL of the project's codebase.

## Setup Instructions
### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/Ekemiben/HNG-Week-One
   cd your-repo
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the server:
   ```sh
   node index.js
   ```
   or if using TypeScript:
   ```sh
   npx ts-node index.ts
   ```
4. The server will run on `http://localhost:3000/` by default.

## API Documentation
### Endpoint
- **GET /**

### Response Format (200 OK)
```json
{
  "email": "Ekemiben.4@gmail.com",
  "current_datetime": "2025-01-30T09:30:00Z",
  "github_url": "https://github.com/Ekemiben/HNG-Week-One"
}
```

### Example Usage
Using **cURL**:
```sh
curl -X GET http://localhost:3000/
```

Using **Postman**:
1. Open Postman.
2. Create a new GET request.
3. Enter the URL: `http://localhost:3000/`.
4. Click "Send" and check the JSON response.

## Notes
- Ensure that port `3000` is available, or change it in the code as needed.
- Enable CORS for cross-origin requests.
- Modify the GitHub URL to point to your actual repository.

## License
This project is licensed under the MIT License.

