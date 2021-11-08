# Iteration 1
# Viewing and testing the application from a browser on a host SFU machine
- use the 'Chromium' browser because it is newer and properly renders the application
- there is a default user created for testing login on the deployed application (username: nurse, password: hospital)

# Running the project locally via cloning
Here are steps to run the local version
- delete the db.sqlite3 file in 'prj/hha_prj/'
- install frontend dependencies with `npm i`
- remove any cached migrations such as `0001_initial.py`, excluding `__init__.py`, from 'prj/hha_prj/backend/migrations/'
- run `pip install -r requirements.txt` to install backend dependencies in 'prj/hha_prj/'
- run `python manage.py makemigrations` in the same folder as above
- run `python manage.py migrate` in the same folder as above
- Lastly, in two separate terminals, run `npm run dev` in the root directory and `python manage.py runserver` in 'prj/hha_prj' to have live updates to frontend applied and server the api respectively.

# Deploying the application to the virtual machine
- ssh into our team virtual machine as described by the piazza post
- cd into the 'prj' directory of our repo
- pull any changes from master
- switch any endpoints in the client from the IP prefix "127.0.0.1" to "142.58.2.141"
- run `npm i` and `npm run dev` to install dependencies and generate the 'main.js' file
- run `python manage.py [makemigrations|migrate|runserver]` to prepare the backed and test
- create the docker image to deploy by running `sudo docker-compose build` (will take a few minutes) 
- deploy the lateest image by running `sudo docker-compose up --detach` (you may have to kill other containers using the port)
- to kill containers using the port, run `sudo docker ps` to see the id, and `kill [docker container id]` to stop it
- if docker image is failing to build because there is not enough space run `sudo docker system prune` to clear docker caches

# Instructions for Switching Between VM IP Endpoints and Local IP Endpoints for the Client
The deployed application uses "http://142.58.2.141:8000/api/token/obtain" this endpoint on the client side to talk to the database. If trying to test login locally, please change this line in the Login.tsx file to "http://127.0.0.1:8000/api/token/obtain" to enable it. 

To create a locally user, got to "http://127.0.0.1:8000/api/user/" and enter a 'username' and a 'password.' It will send you the username back a response if successful. From there you can test login on the login page at "http://127.0.0.1:8000/login."

Replace "127.0.0.1" with "142.58.2.141" if trying to interact with the virtual machine's exposed endport and vice versa if running the local version.

# Instructions for setting up the environment and running the server
1. Clone the project do your machine
2. Install npm (node package manager) if you have not already
3. Run the `npm i` command to install the dependencies for node
4. Install pipenv with `pip install --user pipenv` 
5. Run `pipenv shell` to instantiate a temporary environment
6. Change directories into the **hha_prj** folder containing **manage.py**
<<<<<<< HEAD
7. Install django dependencies in the folder using `pip install -r requirements.txt`
8. Use **manage.py** to first analyze current models for any changes that would be out of sync with the database like so `python manage.py makemigrations`
9. Use **manage.py** again, but this time to apply those changes to the database which is currently sqlite3 for convenience of not having to download/setup postgres or mysql like so, `python manage.py migrate`
10. Nice, the database has been instantiated. Now just run the server with `python manage.py runserver` and you can open the current default app with the local address "http://127.0.0.1:8000/"
=======
7. Install django dependencies in the folder using pip install -r requirements.txt
8. Use **manage.py** to first analyze current models for any changes that would be out of sync with the database like so **python manage.py makemigrations**
9. Use **manage.py** again, but this time to apply those changes to the database which is currently sqlite3 for convenience of not having to download/setup postgres or mysql like so, **python manage.py migrate**
10. To populate the database with initial values, use **python manage.py loaddata initial_data.json**
11. Nice, the database has been instantiated. Now just run the server with **python manage.py runserver** and you can open the current default app with the local address "http://127.0.0.1:8000/"
>>>>>>> master

# External Resources Used
Images for department cards are from MANYPIXELS PTE LTD. An nonexclusive, worldwide copyright license has been granted for free. For details of the license, see: https://www.manypixels.co/gallery
 
