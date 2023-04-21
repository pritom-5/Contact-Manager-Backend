# Contacts Manager App (backend)

This app is the backend part of the Contacts-manager app.

<br/>

---

## Live Demo:

| Desc                    | LINK                                                                                                       |
| ----------------------- | ---------------------------------------------------------------------------------------------------------- |
| Backend API Live link   | [contacts-manager-api](https://contact-manager-fullstack.onrender.com/api/hello)                                     |
| Full stack website demo | [contacts-manager-full-stack-app](https://contact-manager-frontend-g6mn68y2x-pritom-5.vercel.app) |

<br/>

---

## APP Demo:

![App-demo-gif](./video/contact_manager_01.gif)

<br/>

---

## Frontend github repo link:

[Front-end-github-link](https://github.com/pritom-5/Contact-Manager-Frontend)
<br/>

---

## Techstack:

<br/>

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)

![Nodemon](https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD)

![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)

![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)

![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)

<br/>

---

## API Endpoints:

| Name                 | Description                                                                                                                               | LINK                      | Request Type |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ------------------------- | ------------ |
| Register User        | New user can register <br/> Fields: - Username - Email - Password                                                                         | domain/api/users/register | POST         |
| Login User           | User can login to get access to the saved contacts <br/> Fields: - Username - Password                                                    | domain/api/users/login    | POST         |
| See all the contacts | User can see all the contacts saved in JSON format. (Private) <br/><br/> \* Private fields protected for only registered logged in users. | domain/api/contacts       | GET          |
| See single contact   | User can check single contact (Private)                                                                                                   | domain/api/contacts/:id   | GET          |
| Add contact          | Add new contact to the list                                                                                                               | domain/api/contacts       | POST         |
| Edit contact         | Edit existing contact                                                                                                                     | domain/api/contacts/:id   | PUT          |
| Delete contact       | Delete existing contact                                                                                                                   | domain/api/contacts/:id   | DELETE       |

<br/>

---

## Run the app:

To run the app in you own machine

- Clone the repo.
- `Run npm install` to install all the dependencies
- `npm run dev` to start local server
