# Requirements

 - Docker Compose  ***^2.15.1***

# How to run

Create a root folder and place this project and the back counterpart inside it. Build a docker-compose.yml in this
folder, defining services for these two projects and a mongodb public image.

Then, run:

```sh
  $ docker compose up mywallet-web -d && docker attach {{root-dir}}-mywallet-web-1
```
