FROM python:3.11-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt --no-cache-dir
COPY . .
#CMD ["python", "manage.py", "runserver", "0:8000"]
#CMD ["gunicorn", "dinasdesserts.wsgi:application", "--bind", "0:8000" ]
CMD ["gunicorn", "dinasdesserts.wsgi:application", "--bind", "127.0.0.1:8000" ]