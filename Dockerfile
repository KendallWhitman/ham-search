FROM node:16.15.1
WORKDIR hamsearch
COPY . .
RUN npm i
RUN npm run build
EXPOSE 8003
CMD npx serve -s build -l tcp://0.0.0.0 -p 8003
