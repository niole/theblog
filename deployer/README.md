# deploy just niole.blog

Deploy the app-deployment resource.
Hit $(minikube ip):30001 to hit the app.

# deploy all the things

```
minikube start
kubectl create -f deployer
```

visit blog.niole or traefik.niole

# encrypt ingress traffic

```
cd deployer/
kubectl -n kube-system create secret tls traefik-ui-tls-cert --key=tls.key --cert=tls.crt
```
