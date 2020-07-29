FROM node:14.6.0-slim

# Install node modules
RUN yarn global add nodemon

# Create app directory
RUN mkdir -p /Dynasty/A1.3/
WORKDIR /Dynasty/A1.3/

ONBUILD RUN yarn install

ENV HOST 0.0.0.0
# Install app dependencies
CMD [ "yarn", "production"]
