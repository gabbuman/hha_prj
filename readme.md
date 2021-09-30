# Instructions for setting up the environment and running the server
1. Clone the project do your machine
2. Install npm (node package manager) if you have not already
3. Run the **npm i** command to install the dependencies for node
4. Install pipenv with **pip install --user pipenv** 
5. Run **pipenv shell** to instantiate a temporary environment
6. Change directories into the **hha_prj** folder containing **manage.py**
7. Install django dependencies in the folder using pip install -r requirements.txt
8. Use **manage.py** to first analyze current models for any changes that would be out of sync with the database like so **python manage.py makemigrations**
9. Use **manage.py** again, but this time to apply those changes to the database which is currently sqlite3 for convenience of not having to download/setup postgres or mysql like so, **python manage.py migrate**
10. Nice, the database has been instantiated. Now just run the server with **python manage.py runserver** and you can open the current default app with the local address "http://127.0.0.1:8000/"




