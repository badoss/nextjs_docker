## Nextjs_docker

#### Nextjs + Tailwind CSS + Docker

clone repo
```
git clone https://github.com/badoss/nextjs_docker.git
```


#### == docker ==

build image 
```
docker build -t nextjs .
```

runnig container on port 80 
```
docker run -d -p 80:3000 nextjs
```

show detail
```
docker ps -a
docker images -a
```


#### == clear docker ==

delete docker container
```
docker stop <container ID>
docker rm <container ID>
```
delete images
```
docker rmi <image ID>
```