FROM node:12-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:12-alpine AS server
WORKDIR /app
COPY package* ./
# ARG DATABASE_URL
# ENV DATABASE_URL $DATABASE_URL
RUN npm install --production
COPY --from=builder ./app/public ./public
COPY --from=builder ./app/bin ./bin
COPY --from=builder ./app/build ./build
COPY --from=builder ./app/views ./views
EXPOSE 3232
CMD ["npm", "start"]






# docker build -t kennethjt1/assignment_6:week6 .
# docker push kennethjt1/assignment_6:week6