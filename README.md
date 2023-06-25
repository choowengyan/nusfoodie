# NUSFoodie

## List of Branches
  Below are some of the branches for each feature to prevent conflicts before pushing codes to the `main` branch. 
1. `main`
2. `userLogin_branch`
3. `userInput_branch`
4. `userProfile_branch`
5. `userBookmark_branch`
6. `menu_branch`
7. `review_branch`
8. `adminPortal_branch`

## Guides
1. Clone repository using the command below: 
```bash
git clone git@github.com:choowengyan/orbital_NUSFoodie.git
```

2. Create virtual environment 
```bash
cd backend
python -m venv env
source env/bin/activate
```

3. Download dependencies 
```bash
pip install -r requirements.txt
```

4. Making sure that Django is working
```bash
cd server
python manage.py runserver
```
Enter `127.0.0.1:8000` in your browser and you should see a default Django welcome site


5. Making sure that React is working
```bash
cd frontend
npm start
```
Run development server at address `http://localhost:3000/` and you should see react browser

## Default Ports
- Django for development: `8000`
- React application: `3000`

## Directories
- `backend` for serving Django server code
- `frontend` for React user interface code
