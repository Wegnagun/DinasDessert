# DinasDesert

десерты Дины

---

##### мои заметки:

```
sudo docker build -t wegnagun/desserts-backend:v0 .
sudo docker push wegnagun/desserts-backend:v0
sudo docker-compose up

sudo docker container ps
sudo docker exec -it <mycontainer> bash
sudo docker image prune

psql -U dinasadmin
```

---

## Автор

[Александр Фокин](https://github.com/Wegnagun)

---

### Стек технологий:

Frontend: React, React-dom, React-router-dom,  
Backend: Django, DjangoRestFramework, Pillow, Djoser, gunicorn  
Server: Docker, Docker-compose, nginx
Base: PostgreSQL

### Установка (backend):

#### Windows

перейти в дирректорию backend

`python -m venv venv `  
`venv/Scripts/activate `  
`python -m pip install --upgrade pip `

`pip install -r requirements.txt `

#### Linux

`python -m venv venv`  
`source venv/bin/activate`  
`python -m pip install --upgrade pip `  
`pip install --upgrade setuptools ` опционально...  
`python -m pip install --upgrade pip setuptools` либо так)

перейти в дирректорию backend

`pip install -r requirements.txt`

### Установка (frontend):

перейти в дирректорию frontend  
`npm i`  
`npm start`

---

#### Ресурсы проекта:

.../api/users/ - эндпоинт пользователей;  
.../api/desserts/ - эндпоинт дессертов;  
.../api/rewies/ - эндпоинт отзывов (пока еще нет);  
.../api/news/ - эндпоинт новостей сайта;  
.../admin/ - эндпоинт админки сайта;  
.../api/auth/ - действия с djoser авторизацией;

---
