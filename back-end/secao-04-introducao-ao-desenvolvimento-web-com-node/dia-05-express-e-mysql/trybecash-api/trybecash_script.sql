USE trybecashdb;
CREATE TABLE people (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(45) NOT NULL,
    last_name VARCHAR(45) NOT NULL,
    email VARCHAR(60) NOT NULL,
    phone VARCHAR(20),
    PRIMARY KEY(id),
    UNIQUE(email)
);

CREATE TABLE transactions (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(60) NOT NULL,
    description VARCHAR(100),
    price DECIMAL(10, 2) NOT NULL,
    type INT NOT NULL,
    person_id INT NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY (person_id) REFERENCES people(id)
);

CREATE TABLE logs(
    id INT NOT NULL AUTO_INCREMENT,
    event VARCHAR(100) NOT NULL,
    timestamp BIGINT NOT NULL,
    person_id INT NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY (person_id) REFERENCES people(id)
);