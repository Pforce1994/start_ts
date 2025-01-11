FROM  node
WORKDIR /app 
COPY . .
RUN npm install -g typescript
VOLUME [ "/Users/pichaya/Documents/GitHub/start_ts/src" ]
CMD [ "tsc","-w" ]

