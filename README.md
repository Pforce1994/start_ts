STEP:1
1.docker build -t node-ts .
2.docker compose up --watch
STEP:2
1.docker ps -a
2.docker exec -it [contariner-id] sh
3.cd src
4.tsc -w
STEP:3
1.docker cd dist
2.npx run [file-name]

