# pull the Node.js Docker image
FROM node:16-alpine 
# FROM nginx

# create the directory inside the container
WORKDIR /usr/src/app

# copy the package.json files from local machine to the workdir in container
COPY package*.json ./
COPY src ./
COPY config ./
COPY .env ./
# nginx default settings for proxy pass
# COPY default.conf /etc/nginx/conf.d/default.conf

# RUN apt-get update && apt-get upgrade -y && \
#     apt-get install -y nodejs \
#     npm 
# run npm install in our local machine
# RUN npm install -g nodemon 
RUN npm install --force

# RUN set -ex \
#  && npm run build

# copy the generated modules and all other files to the container
COPY . .

# our app is running on port 5000 within the container, so need to expose it
EXPOSE 5000
# the command that starts our app
CMD ["npm", "start"]
