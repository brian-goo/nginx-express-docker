## nginx-express-docker

- nginx container port 80:80
- express container port 5000:5000 (serving both static / api)

## docker cmd

```bash
docker-compose up --build
```
## test

```bash
curl localhost
curl localhost/api
```
