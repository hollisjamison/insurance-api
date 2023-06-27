create database h_insurance;

create user 'insuranceUser'@'%' IDENTIFIED WITH mysql_native_password by 'insurance1234!';

grant all on h_insurance.* TO 'insuranceUser'@'%';

USE h_insurance;

CREATE TABLE products (
    id INT auto_increment,
    name VARCHAR(255),
    vendor VARCHAR(255),
    type ENUM('medical', 'vlife'),
    createdAt DATETIME DEFAULT NOW(),
    updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
    deletedAt DATETIME,
    PRIMARY KEY(id)
);

CREATE TABLE employers (
    id INT auto_increment,
    name VARCHAR(255),
    address VARCHAR(255),
    city VARCHAR(255),
    createdAt DATETIME DEFAULT NOW(),
    updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
    deletedAt DATETIME, 
    PRIMARY KEY(id)
);

CREATE TABLE members (
    id INT auto_increment,
    name VARCHAR(255),
    email VARCHAR(255),
    jobTitle VARCHAR(255),
    employerId INT,
    createdAt DATETIME DEFAULT NOW(),
    updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
    deletedAt DATETIME,
    PRIMARY KEY(id)
    FOREIGN KEY(employerId) REFERENCES employers(id)
);

CREATE TABLE enrollments (
    memberId INT,
    productId INT,
    startDate DATE NOT NULL,
    endDate DATE NOT NULL,
    createdAt DATETIME DEFAULT NOW(),
    updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
    deletedAt DATETIME,
    PRIMARY KEY(memberId, productId)
    FOREIGN KEY(memberId) REFERENCES members(id),
    FOREIGN KEY(productId) REFERENCES products(id)
);

INSERT INTO products (name, vendor, type) VALUES ('Feel Better BB', 'Blue Cross', 'medical');
INSERT INTO products (name, vendor, type) VALUES ('I Got You, Life Insurance', 'Sun Life', 'vlife');

INSERT INTO employers (name, address, city) VALUES ('MaxwellHealth', '101 Tremont Street', 'Boston');
INSERT INTO employers (name, address, city) VALUES ('WeSpire', '121 Kingston Street', 'Boston');

INSERT INTO members (name, email, jobTitle, employerId) VALUES ('Rory', 'rqunlan@maxwellhealth.com', 'Software Engineer', 1);
INSERT INTO members (name, email, jobTitle, employerId) VALUES ('Julie', 'jdesimone@maxwellhealth.com', 'Product Manager', 1);

INSERT INTO enrollments (memberId, productId, startDate, endDate) VALUES (2, 1, '2020-01-01', '2020-12-31');
INSERT INTO enrollments (memberId, productId, startDate, endDate) VALUES (2, 2, '2020-01-01', '2020-12-31');
