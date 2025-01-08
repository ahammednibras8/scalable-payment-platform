#Use Node.js as the base image
FROM node:18-alpine

#Set working directory
WORKDIR /app

#Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

#Copy entire project
COPY . .

#Build the project
RUN npm run build

#Expose the port and start the application
EXPOSE 3000
CMD [ "npm", "start" ]