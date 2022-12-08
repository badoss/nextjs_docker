## Nextjs + Docker



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