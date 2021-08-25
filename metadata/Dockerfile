# Start with a Node.js base image that uses Node v13
FROM node:13
WORKDIR /usr/src/app

# Copy the package.json file to the container and install fresh node_modules
COPY package.json ./
RUN npm install

# Copy the rest of the application source code to the container
COPY . .
EXPOSE 3020
# Assign `npm run start:prod` as the default command to run when booting the container
CMD ["npm", "run", "start"]