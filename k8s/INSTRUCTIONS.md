# How to deploy this project to Kubernetes

This guide will walk you through the steps to deploy this project to a Kubernetes cluster.

## Prerequisites

- You need to have a Kubernetes cluster running. You can use [Minikube](https://minikube.sigs.k8s.io/docs/start/) to run a local cluster.
- You need to have [kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl/) installed and configured to connect to your cluster.
- You need to have a Docker image of the project. You can build it by following the instructions in the `INSTRUCTIONS.md` file in the root directory of this project. If you are using Minikube, you can build the image directly into the Minikube's Docker daemon by running `eval $(minikube -p minikube docker-env)` before building the image.

## Steps

1.  **Apply the Kubernetes manifests:**
    Open a terminal and navigate to the `k8s` directory. Then run the following command to apply the Kubernetes manifests:
    ```bash
    kubectl apply -f .
    ```
    This will create a Deployment and a Service in your Kubernetes cluster.

2.  **Check the status of the deployment:**
    You can check the status of the deployment by running the following command:
    ```bash
    kubectl get deployments
    ```
    You should see the `portfolio-deployment` with 2/2 replicas running.

3.  **Check the status of the service:**
    You can check the status of the service by running the following command:
    ```bash
    kubectl get services
    ```
    You should see the `portfolio-service` with a `NodePort` assigned.

4.  **Access the application:**
    To access the application, you need to get the URL of the service. If you are using Minikube, you can run the following command:
    ```bash
    minikube service portfolio-service
    ```
    This will open the application in your web browser.

    Alternatively, you can get the IP address of your cluster's node and the `NodePort` of the service and access it manually. The URL will be `http://<node-ip>:<node-port>`.
