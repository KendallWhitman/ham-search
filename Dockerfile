FROM node:16.16.0
WORKDIR hamsearch
COPY . .
RUN npm i
RUN npm run build
CMD npx serve -s build -l tcp://0.0.0.0
