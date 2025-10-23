# Usa una versione leggera di Python
FROM python:3.11-slim

# Imposta la directory di lavoro all'interno del container
WORKDIR /app

# Evita file .pyc e forza output diretto nel log
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# Copia requirements.txt e installa le dipendenze
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copia tutto il codice del progetto
COPY . .

# Esponi la porta 8080 (Render la imposta automaticamente)
EXPOSE 8080

# Comando di avvio: usa gunicorn con uvicorn come worker
CMD ["sh", "-c", "gunicorn -k uvicorn.workers.UvicornWorker app:app --bind 0.0.0.0:${PORT:-8080} --workers 1"]
