#!/bin/bash

#setup Bashelicious for users "vagrant"
su -c "git clone http://github.com/benvh/Bashelicious.git ~/Bashelicious" vagrant
cd /home/vagrant/Bashelicious
su -c "./setup install" vagrant
su -c "rm -rf ~/Bashelicious" vagrant

su -c "echo 'cd /vagrant' >> ~/.bashrc" vagrant


#change back to the "start folder" (whatever that may be). If not, apt-get will go crazy and refuses to install stuff... (cwd problems and such)
cd -


#NGINX REPO
#echo "deb http://nginx.org/packages/debian/ wheezy nginx" >> /etc/apt/sources.list
#echo "deb-src http://nginx.org/packages/debian/ wheezy nginx" >> /etc/apt/sources.list


#NGINX PGP
#wget http://nginx.org/keys/nginx_signing.key
#apt-key add nginx_signing.key
#rm nginx_signing.key


#setup nodejs stuff (seems to be calling apt-get update for us too, nice!)
curl -sL https://deb.nodesource.com/setup_0.12 | bash -

#install all teh packages!
apt-get install -y build-essential
apt-get install -y nodejs
#apt-get install -y nginx

npm install -g gulp bower browser-sync

cd /vagrant
npm install
bower install

#link nginx root dir
#if ! [ -L /usr/share/nginx/html ]; then
#    rm -rf /usr/share/nginx/html
#    ln -fs /vagrant/build /usr/share/nginx/html
#fi

#all done!