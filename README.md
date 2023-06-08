# Vinyl-collection app

Vinylbox - my pet project that I created to practice typical tasks of a frontend developer using the React library. The application allows you to securely and conveniently store your digital collection of vinyl records

[Check The Live Demo](https://www.vinylbox.burakov.pro)

## Screens
Login screen
![screen 1](https://cdn.dribbble.com/userupload/7588148/file/original-cc6c1d6831985af09d68603635fcbc54.jpg)
Collection screen
![screen 2](https://cdn.dribbble.com/userupload/7588150/file/original-09c6ed4f6811bf49a9ea24b96ac02e0e.jpg)
Add album screen
![screen 3](https://cdn.dribbble.com/userupload/7588149/file/original-6c2a790b2eff96cd3c2a1fdee020ac5f.jpg)

## Features

- Registration of a new user
- Authorization of a registered user using Firebase
- If the user is authenticated, there is no need to enter a login and password for further work
- Loading a vinyl record collection from the Firebase server
- Displaying the vinyl record collection
- Searching within the collection
- Filtering by belonging to one of the categories
- Adding new vinyl records using the discogs.com database

## Stack
- JS
- React
- Redux/Redux toolkit
- AsyncThunk
- React Hook Form
- REST API
- Fairbase API
- Deploy
- Authorization key protection
- Deploying on netlify.com and linking to a personal domain

## How to run locally
1. Make sure you have Node.js installed
2. Navigate to the folder with the downloaded Vite project using the `cd` command
```
cd path/to/my-vite-project
```
3. Install the project dependencies by running the following command at the command line:
```
yarn install
```
4. After installing the dependencies, you can start the project by running the command
```
yarn dev
```
5. You will also need to get authorization keys for the services at https://firebase.google.com and https://www.discogs.com/developers

6. Write in the .env file the received keys
