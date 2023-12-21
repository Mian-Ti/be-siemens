FROM postgres:13

ENV POSTGRES_USER postgres
ENV POSTGRES_PASSWORD postgres
ENV POSTGRES_DB orders_db

COPY orders.sql /docker-entrypoint-initdb.d/

EXPOSE 5432