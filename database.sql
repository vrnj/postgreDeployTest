create TABLE person (
    id SERIAL PRIMARY KEY,
    name VARCHAR(55),
    surname VARCHAR(55)
);

create TABLE post (
    id SERIAL PRIMARY KEY,
    title VARCHAR(55),
    content VARCHAR(255),
    user_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES person(id)
);