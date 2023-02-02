# DinasDesert

десерты Дины

---

##### мои заметки:

```
sudo docker build -t wegnagun/desserts-backend:v0 .
sudo docker push wegnagun/desserts-backend:v0
sudo docker-compose up

docker container ps
docker exec -it <mycontainer> bash
```

---

## Автор

[Александр Фокин](https://github.com/Wegnagun)

---

### Стек технологий:

Frontend: React, React-dom, React-router-dom,  
Backend: Django, DjangoRestFramework, Pillow, Djoser

### Установка (backend):

#### Windows

перейти в дирректорию backend

`python -m venv venv `  
`venv/Scripts/activate `  
`python -m pip install --upgrade pip `

`pip install -r requirements.txt `

#### Linux

`python -m venv venv `  
`source venv/bin/activate`  
`python -m pip install --upgrade pip `  
`pip install --upgrade setuptools ` опционально...  
`python -m pip install --upgrade pip setuptools` либо так)

перейти в дирректорию backend

`pip install -r requirements.txt `

### Установка (frontend):

перейти в дирректорию frontend  
`npm i`  
`npm start`
