FROM  node
WORKDIR /app 
COPY . .
RUN npm install -g typescript
CMD [ "tsc","-w" ]  

