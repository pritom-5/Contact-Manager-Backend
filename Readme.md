# Contacts Manager App (backend)

This app is the backend part of the Contacts-manager app.

<br/>

---

## Techstack:

<br/>

<div style="display:flex">
<div>

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

</div>
<div>

![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)

</div>
<div>

![Nodemon](https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD)

</div>
<div>

![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)

</div>
<div>

![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)

</div>

<div>

![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)

</div>

</div>

<br/>

---

## API Endpoints:

| Name                 | Description                                                                                                                               | Link                      | Request Type |
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
