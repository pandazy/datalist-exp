# How to run the code
1. Clone the repository
2. Open the terminal and navigate to the project folder
3. Run the command
```bash
npm install
```
to install the dependencies
4. Run the command to run the application
```bash
npm run dev
```
5. Open the browser and navigate to the URL
```bash
http://localhost:5174/
```
6. The application is now running

# Implementation Notes
- The application is built using [Bun](https://bun.sh/), it's NPM compatible, but it's recommended to install Bun to run the application to get better performance

It uses [Vite](https://v2.vitejs.dev/) as the build tool to run a React application, Vite is a build tool that aims to provide a faster and leaner development experience for modern web projects.

It leverage [Tanstack Query](https://tanstack.com/query/latest) for data fetching, it's a powerful and flexible data fetching library for React, providing a set of hooks for fetching, caching, and updating data, also easy to test.

# Code structure
## Guiding principles:
The code is structured in a way that it's as technology agnostic as possible, and organized based on the business requirements, so it's more readable and easier to change, thus future-proof. For example, for generic components, they are placed in the `common` folder, because they are highly reusable, and for the business-specific components, they are placed in the corresponding folder because they are tied to their own context. This structure makes it easier to organize all related functionalities into more portable and maintainable modules when needed, and the readers can easily understand what the code does by looking at the folder structure, reducing the need to check documentation.

## Structure:
- `src/`: Contains the source code of the application 
    - `./common`: Contains the common components and utilities used across the application
    - `./purchase`: Contains the components and utilities related to the business requirement: Purchase
    - `main.tsx`: The main entry point of the application
    - `./App.tsx`: The main component of the application
    - `index.css`: The global styles of the application


## How CSS classes are defined:
Utility first approach is adopted in the hope that it can increase the reusability of the styles and reduce the need to write custom styles, also provide a consistent look and feel across the application. So all classes are defined in the `index.css` file, and they are used in the components. In real-world applications, we can leverage tools such as [Tailwind CSS](https://tailwindcss.com/) to generate utility classes.

There are some subtle layout order difference between desktop and mobile, to guarantee the maintainability, I used a slight amount of redundant content, and used media queries to hide/show the content based on the screen size. Specifically, `table-cell` handles the layout on desktop, and `mobile-cell` handles the layout on mobile. This avoids using complex CSS rules and makes it easy to change whenever the requirement changes.


## Other notes:
There is no clear instruction about what action buttons on the right in the design should do, and it doesn't exist on mobile as well, so I didn't implement them to make it consistent unless there is a clear requirement.
