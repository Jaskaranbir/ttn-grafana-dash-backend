# Stage 1 - build the app
FROM node:10.9.0-alpine as build-deps
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install -g create-react-app
RUN npm install
COPY . ./
RUN rm -rf ./build
RUN npm run build

# Stage 2 - deploy the app
FROM nginx:1.15.2-alpine
COPY --from=build-deps /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
