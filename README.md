# Pastor Engagement API

This project contains the Pastor Engagement API, which allows users to manage pastors and their engagements. The API provides endpoints to create and retrieve pastors, engagements, and US states.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Project Structure](#project-structure)

## Prerequisites

- Node.js (v18.16.x)
- npm (v10.x)
- (optional) Docker (v20.x)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/pastor-engagement-api.git
   cd pastor-engagement-api
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:

   Use the `.env.example` file as a template to create your own `.env` file:

   ```bash
   cp .env.example .env
   ```

   Or create a `.env` file in the root directory and add the following variables:

   ```env
   PORT=3000
   NODE_ENV=development
   DB_NAME=your_db_name
   DB_USER=your_db_user
   DB_PASSWORD=your_db_password
   DB_HOST=your_db_host
   DB_PORT=your_db_port
   ```

4. Start the database using Docker (optional):

   ```bash
   docker-compose up -d
   ```

   Otherwise, start a MySQL database using a database server as preferred.

5. Start the server:

   ```bash
   npm run dev
   ```

6. Seed database

   ```bash
   npm run db:seed
   ```

## Usage

Once the server is running, you can access the API at `http://localhost:3000/api/v1`.

## API Endpoints

### Pastor Endpoints

- `GET /pastors`: Retrieve all pastors.
- `POST /pastors`: Create a new pastor.
- `GET /pastors/:pastorId/impact-map`: Retrieve engagements by pastor ID.

### Engagement Endpoints

- `GET /engagements`: Retrieve all engagements.

### US State Endpoints

- `GET /states`: Retrieve all US states.

## Project Structure

The project is organized by business modules, each containing its own logic, repository, model, and other related files, helping in maintaining a clean and scalable codebase.

Example:

```plaintext
src/
├── modules/
│   ├── engagement/
│   │   ├── controllers/
│   │   ├── dtos/
│   │   ├── mappers/
│   │   ├── models/
│   │   └── routes/
│   ├── pastor/
│   │   ├── ...
│   ├── ...
├── infra/
│   └── server.ts
└── app.ts
```
