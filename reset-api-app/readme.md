# init App

```
npm init -y
```

# dev-dependencies

```
npm install @types/body-parser @types/express @types/jest @types/node @types/uuid
dotenv  jest nodemon ts-jest ts-node typescript  --save-dev
```

# dependencies

```
npm install @types/bcryptjs @types/jsonwebtoken bcryptjs body-parser cors express
express-fileupload jsonwebtoken morgan  uuid --save
```

# Create Dockerfile

```
    FROM node:18-alpine

    WORKDIR /app

    COPY package*.json ./

    RUN npm install

    COPY . .

    CMD ['npm','start']

    EXPOSE 5000

```

# Build docker image
```
sudo docker build -t todo-app-api .

```

# Run Docker Container
```
sudo docker run -d --name todo-app-api -p 8080:5000 todo-app-api
```

# Check Docker Container is active
```
sudo docker ps -a
```


# Reset API

```
    http://127.0.0.1:8080/api/todolist

    Method: GET
    
```

```
    http://127.0.0.1:8080/api/savetodo

    Method: POST

    payload = {
        "name": "SAM"
    }

```