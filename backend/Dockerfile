#use Node.js as the base image
FROM node:18-alpine

#Set working directory
WORKDIR /app

#Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

#Copy the entire project
COPY . .

#Compile TypeScript to Javascipt
RUN npm run build

#Expose the port and start the server
EXPOSE 3001
CMD [ "npm", "start" ]
