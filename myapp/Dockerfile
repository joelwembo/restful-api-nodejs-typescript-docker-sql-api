# pull the Node.js Docker image
FROM node:16.16-alpine 
FROM nginx
# create the directory inside the container
WORKDIR /usr/src/app

# copy the package.json files from local machine to the workdir in container
COPY package*.json ./
# nginx default settings for proxy pass
# COPY default.conf /etc/nginx/conf.d/default.conf
RUN apt-get update && apt-get upgrade -y && \
    apt-get install -y nodejs \
    npm 
# run npm install in our local machine
RUN npm install -g nodemon && npm install --legacy-peer-deps
# copy the generated modules and all other files to the container
COPY . .
# our app is running on port 4000 within the container, so need to expose it
EXPOSE 3000
# the command that starts our app
CMD ["nodemon", "app.js"]
