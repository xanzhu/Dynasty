FROM node:14.4.0-slim

# Install node modules
RUN yarn global add nodemon

# Create app directory
RUN mkdir -p /Applications/A2/
WORKDIR /Applications/A2/

ONBUILD RUN yarn install

ENV HOST 0.0.0.0
# Install app dependencies
CMD [ "yarn", "production"]
