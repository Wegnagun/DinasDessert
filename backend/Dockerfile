FROM python:3.11-slim
WORKDIR /app
COPY requirements.txt .
RUN python -m pip install --upgrade pip setuptools
RUN pip install -r requirements.txt --no-cache-dir
COPY . .
CMD ["gunicorn", "dinasdesserts.wsgi:application", "--bind", "0:8000" ]