# Careerhubs.info

This repository hosts the source code for the [Careerhubs.info](https://careerhubs.info/) web application, offering a comprehensive career development platform.

## Structure

The repository is organized into two main directories:

* `client/`: Contains the client-side source code.
* `server/`: Contains the server-side source code, including various microservices.

## Microservices

The server-side application consists of the following microservices:

* `eureka_server/`: Contains the Eureka server source code for service discovery.
* `gateway-server/`: Contains the API gateway source code for routing requests to microservices.
* `question-sheet/`: Manages the source code for storing and retrieving questions.
* `resume-service/`: Handles the source code related to storing and retrieving resumes.
* `user_service/`: Maintains the source code for user information management.

## Building and Running

To build and run the application, ensure Docker is installed on your system. Execute the following commands to build and start all the services:

```bash
# Build all projects first
mvn clean package -DskipTests

# Build Docker images
docker-compose build

# Start the system
docker-compose up -d

# View logs
docker-compose logs -f
```
