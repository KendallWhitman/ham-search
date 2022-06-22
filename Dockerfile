FROM node:16.15.1
WORKDIR hamsearchdev
COPY . .
RUN npm i
RUN npm run build
EXPOSE 8004
CMD npx serve -s build -l tcp://0.0.0.0 -p 8004
