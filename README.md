## Usage

1. Download this repository and run the following command to install all the needed packages.

```bash
npm install
```

2. To start the server in production mode run:

```
npm start
```

and for development mode:

```
npm run dev
```

## Routes

You can then test with tool like Postman the available routes.

- \[POST] Register new user

```
http://localhost:3100/api/auth/register

```

As body you should provide _username_, _email_ and _password_.

---

- \[POST] Login with already registered user

```
http://localhost:3100/api/auth/login

```

As body you should provide _email_ and _password_.

---

- \[GET] Logout user

```
http://localhost:3100/api/auth/logout

```
