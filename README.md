https://www.youtube.com/watch?v=3jXtTSnA8zw
HiIn this video we will see how to set GitHub Action for cicd with aws EC2 with an example of nodejs API in hindi
GitHub workflows
Cicd pipeline and auto deploy to AWS EC2
CICD pipeline for nodejs express application in hindi 

We will Use github action to set up CI CD pipeline to Deploy your project  to AWS EC2
Full guide to automatic deployment to AWS EC2 using GitHub Action with nodejs api as example in hindi



It will automatic test build and deploy to aws ec2 after every changes commit and merged

step 1- 

login to aws console and create an ec2 instance

step 2- 

Login to ec2 instance

step 3-

install nodejs and nginx

sudo apt update

curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -

sudo apt-get install nodejs

sudo apt-get install nginx

step 4-

push your projects to github 

step5 -

 create github action 

 it will create a yml file under .github/workflow

 just edit yml file acording to your project

step 6-

set up github action on ec2

Not start with sudo 

After GitHub configuration run this command

sudo ./svc.sh install

sudo ./svc.sh start

step 7-

install pm2 and run backend in background

npm i pm2 -g 

pm2 start server.js 

step 8-

add  the command in yml script of project to restart after every commit 

-run: sudo pm2 restart server.js

step 9- 

config nginx and restart it 

Cd /etc/nginx

Cd sites-available

sudo nano default


    location /api/ {

        proxy_pass  http://localhost:8000/;

        proxy_set_header Host $host;

        proxy_set_header X-Real-IP $remote_addr;

        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;

    }

sudo systemctl restart nginx
