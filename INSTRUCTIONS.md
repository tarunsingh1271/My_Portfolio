# How to run this project with Docker

This guide will walk you through the steps to build and run this project using Docker.

## Prerequisites

- You need to have [Docker](https://www.docker.com/products/docker-desktop/) installed on your machine.
- You need to have [Node.js](https://nodejs.org/en) installed to install dependencies and build the project.

## Steps

1.  **Install dependencies:**
    Open a terminal and navigate to the project root directory. Then run the following command to install the project dependencies:
    ```bash
    npm install
    ```

2.  **Build the project:**
    After the dependencies are installed, run the following command to build the project for production:
    ```bash
    npm run build
    ```

3.  **Fix the `.dockerignore` file:**
    The `nginx.conf` file is required for the Docker build, but it is ignored by default. You need to remove `nginx.conf` from the `.dockerignore` file.

    Open the `.dockerignore` file and remove the line that says `nginx.conf`.

4.  **Build the Docker image:**
    Now you can build the Docker image. Run the following command from the project root directory:
    ```bash
    docker build -t portfolio .
    ```
    This will create a Docker image with the tag `portfolio`.

5.  **Run the Docker container:**
    Finally, you can run the Docker container with the following command:
    ```bash
    docker run -d -p 8080:80 portfolio
    ```
    This command will start a container in detached mode and map port `8080` on your local machine to port `80` in the container.

6.  **Access the application:**
    You can now access the application by opening your web browser and navigating to `http://localhost:8080`.
