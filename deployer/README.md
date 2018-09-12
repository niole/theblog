# deploy just niole.blog

Deploy the app-deployment resource.
Hit $(minikube ip):30001 to hit the app.

# deploy all the things

```
minikube start
kubectl create -f deployer
```

visit blog.niole or traefik.niole
