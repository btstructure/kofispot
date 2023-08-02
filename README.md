# README

## __KofiSpot__ <br>
KofiSpot is a web application that allows users to create and store their reviews of coffee shops in NYC. The backend of the application is built with Ruby on Rails and uses PostgreSQL as a database, while the frontend is built with React. User authentication is implemented using bcrypt encryption.

## __Installation__ <br>
Before you can run the application, you must have PostgreSQL 12 installed and a PostgreSQL server running.

To install the application, follow these steps:

1. Clone this repository to your local machine.
2. Open a terminal and navigate to the root directory of the repository.
3. Run `bundle install` to install the necessary Ruby gems.
4. You must have postgresql installed and have it running before creating the database. You can install it here https://www.postgresql.org/.
5. Run `rails db:create` to create the PostgreSQL database.
6. Run `rails db:migrate` to run the database migrations.
7. Run `rails s -p 3001` to start the Rails server.
8. Next, you need to start the frontend:

Open a new terminal window and navigate to the client directory.
1. Run `npm install` to install the necessary Node.js packages.
2. Run `npm start` to start the React development server.
3. The application should now be running on http://localhost:3000/.

## __Usage__ <br>
When you first run the application, you will be prompted to sign up or log in. Once you are logged in, you can create, edit, and delete your reviews of coffee shops in NYC.

