# use an existing docker image as a base
FROM node:14-alpine

COPY ./ ./
# Download and install a dependency
RUN npm install
# Tell the image what to do when it starts as a container
CMD ["npm","run","dev"]