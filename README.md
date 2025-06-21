# Careerhubs.info

This repository hosts the source code for the [Careerhubs.info](https://careerhubs.info/) web application, designed to offer a comprehensive career development platform.

## Structure

The repository is organized into two primary directories:

* `client/`: Contains the client-side source code.
* `server/`: Contains the server-side source code, which includes multiple microservices.

## Microservices

The server-side application is comprised of the following microservices:

* `eureka_server/`: Houses the Eureka server source code for service discovery.
* `getway-server/`: Contains the API gateway source code for routing requests to microservices.
* `question-sheet/`: Manages the source code for storing and retrieving questions.
* `resume-service/`: Responsible for the source code related to storing and retrieving resumes.
* `user_service/`: Maintains the source code for user information management.

## Building and Running

To build and run the application, ensure Docker is installed on your system. Execute the following commands to build and start the application:
