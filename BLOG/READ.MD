# Blog Flow Project

This project is designed to create a simple blog application with three pages. The application uses basic routing to navigate between pages. If a user attempts to access a non-existent page, the server will return a `404 Error` page. The frontend development is integrated to provide a smooth and simple user experience.

## Features

- **Three Pages**: 
  - Home Page
  - About Page
  -contact page
  - 404 page
- **Routing**: 
  - Server-side routing to load the respective pages.
  - If a page is not found, a 404 error page will be shown.
- **Frontend Integration**:
  - Simple, clean, and minimal frontend using basic HTML, CSS, and JavaScript.

## Project Structure


### Pages

1. **Home Page (`home.html`)**: The landing page of the blog. It can have a list of blog posts, an introductory text, or any feature you plan to add.
2. **About Page (`about.html`)**: A simple page describing the purpose of the blog or providing information about the author.
3. **Contact Page (`contact.html`)**: A page where users can contact the owner of the blog. Typically, this would have a contact form.
4. **404 Page (`404.html`)**: A page that shows when a user accesses a non-existent route or page.

### Server Logic (server.js)

- The `server.js` file is responsible for setting up the routes and handling requests.
- It serves the static HTML pages for Home, About, and Contact.
- If the route does not match any of these pages, it returns a `404 Error` page.

### Frontend

- Simple HTML pages with minimal styling (using CSS).
- You can enhance it by adding JavaScript to handle dynamic elements, forms, or other features.




