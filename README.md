# Avis Site

A subscription website built as a project for the **Webudvikler** education at **NEXT KBH**.

Built with vanilla HTML, CSS and JavaScript on the front end, and an Express.js server on the back end. Sign-ups are stored in a local SQLite database, and passwords are hashed with bcrypt.

## Features

- Subscription sign-up form
- Server-side validation of required fields
- Passwords hashed with bcrypt before saving
- Data stored in SQLite (`better-sqlite3`)
- Confirmation page that greets the user by name

## Tech stack

- HTML, CSS, JavaScript (vanilla)
- [Node.js](https://nodejs.org/) and [Express](https://expressjs.com/)
- [better-sqlite3](https://github.com/WiseLibs/better-sqlite3)
- [bcrypt](https://github.com/kelektiv/node.bcrypt.js)

## Requirements

- Node.js 18 or newer
- npm (comes with Node.js)

## Installation

```bash
git clone <your-repo-url>
cd avis_site
npm install
```

## Running the project

```bash
npm start
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

The SQLite database file (`database.db`) is created in the project folder.

## Project structure

```
avis_site/
├── public/          # Static files served to the browser (HTML, CSS, JS)
├── server.js        # Express server and /submit route
├── database.db      # SQLite database (not committed)
├── package.json
└── README.md
```

## Notes

- `database.db` contains user data and is listed in `.gitignore`.
- This is a school project and is not production-ready.

## Author

Jan Konieczek, NEXT KBH, Webudvikler