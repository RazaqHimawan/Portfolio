---
title: Day 3a
description: Introduction to DBMS, XAMPP and SQL
date: '2023-9-16'
categories:
  - introduction
  - database
  - dbms

published: true
---

## Table of Contents

## What is DBMS?

DBMS or Database Management System is a database management tool (software) or more specifically DBMS is an intermediary between the user and the application program database.

### Types of DBMS

- Hierarchical DBMS (parent-child)
- Network DBMS (many to many)
- Relational DBMS (table 2d)
- Object-oriented DBMS (objects)

### The Purpose of DBMS

1. **Maintain Data Integrity**  
   DBMS functions to reduce and eliminate redundancies and maximize consistency so that every time it displays data, it matches the original data.

2. **Data Storage (Data Storage Management)**  
   DBMS has the main function as a data storage place, its current sophistication can store data in various types, such as videos and images. Users don't need to know how data is stored or manipulated. The DBMS has procedures in this process and ensures that the data stored corresponds to the data entered.

3. **Data Dictionary**  
   DBMS has the function of managing elements in the database and how these elements are connected to other data. When the system needs data in the database, the DBMS will make it easy via SQL to access and search for that data. So, users can easily handle this.

4. **Data Transformation and Presentation**  
   The role of a DBMS as a data transformation and presentation includes converting any data entered into a predetermined structure and format. Thus, the DBMS can differentiate between the logical data format and its physical form.

5. **Data Security**  
   DBMS has an important role in the level of security in the database. The DBMS has a role related to granting access rights to the right people. Additionally, the DBMS is also responsible for managing the actions that users can perform on the database.

6. **Enable Access to Multiple Users**  
   DBMS allows multiple users to interact in a database. This will be more efficient and can place certain users according to their roles and functions.

7. **Provide Backup and Restore Procedures**  
   A DBMS allows a database to be backed up and restored according to its needs by utilizing the techniques and wizards that each DBMS has. This will make it easier for interested parties when something happens to the database, such as damage or natural disasters.

8. **Provides Language and Programming Access**  
   DBMS provides SQL to manipulate and create database schemas known as DML and DDL. With this language, a DBA can easily enter, retrieve, delete, and change data in the database using the provided interface.

9. **Provides an Interface for Communication**  
   DBMS provides an interface to communicate between one database and another. Apart from that, it can also facilitate communication between databases and other tools such as browsers.

10. **Transaction Management**  
    A transaction is a series of actions, performed by a user or application program that accesses or changes the contents of a database.

## What is XAMPP?

XAMPP is a free and open-source cross-platform web server solution stack package developed by Apache Friends, consisting mainly of the Apache HTTP Server, MariaDB database, and interpreters for scripts written in the PHP and Perl programming languages.

XAMPP stands for:

- X: Cross Platform
- A: Apache (web server software)
- M: MySQL/MariaDB (rdbms)
- P: PHP (server-side scripting language)
- P: Perl (general purpose programming language)

### Apache

Apache HTTP Server, commonly referred to as Apache, is a free and open-source web server software. It's one of the most widely used web servers globally. Apache serves as the foundation for delivering web content to users' browsers. It listens for incoming requests, processes them, and serves web pages, images, and other resources to users.

### MySQL

MySQL is an open-source relational database management system (RDBMS). MySQL is used to store and manage structured data. It provides a means for applications to store, retrieve, and manipulate data efficiently. It's commonly used for web applications, content management systems (CMS), and various other software where data storage is essential.

### PHP

PHP, which originally stood for "Personal Home Page," is now often referred to as "PHP: Hypertext Preprocessor." It's a server-side scripting language designed for web development. PHP is used to create dynamic web pages. It can be embedded within HTML code to generate dynamic content, interact with databases like MySQL, handle user authentication, and perform various server-side tasks. PHP is a versatile language widely used in web development.

### phpMyAdmin

phpMyAdmin is a free and open-source web-based tool written in PHP. It provides a graphical user interface (GUI) for managing and administering MySQL or MariaDB databases. phpMyAdmin simplifies database management tasks for users who may not be comfortable with command-line database administration. It allows users to perform tasks such as creating, modifying, and deleting databases, tables, and records. Users can also run SQL queries, import/export data, and manage database users and privileges through a user-friendly interface.

## What is SQL?

SQL is a specialized programming language used for managing and manipulating relational databases. It's used to interact with and retrieve information from databases, as well as to create, modify, and manage the structure and data within them. SQL serves as the standard language for communicating with relational database management systems (RDBMS), such as MySQL, PostgreSQL, Oracle, SQL Server, and others.

### Data Definition Language (DDL)

In using SQL, there are several types of commands used. These commands are needed to access and manage data in the database. One of them is Data Definition Language (DDL).

DDL is a sub-command in SQL that is used to build a database framework.

The following are the main statements from DDL, including CREATE TABLE, ALTER TABLE, DROP TABLE, and VIEW.

#### CREATE TABLE

Used to create a new table in the database, specifying its columns, data types, and constraints.

```sql
CREATE TABLE table_name

(

column_name1,

column_name2,

);
```

#### ALTER TABLE

Used to modify an existing table's structure, such as adding or dropping columns, changing data types, or adding constraints.

ADD column:

```sql
ALTER TABLE table_name
ADD column_name datatype;
```

DROP column:

```sql
ALTER TABLE table_name
DROP COLUMN column_name;
```

RENAME column:

```sql
ALTER TABLE table_name
RENAME COLUMN old_name to new_name;
```

#### DROP TABLE

Used to delete an existing table and all its data from the database.

```sql
DROP TABLE (table_name):
```

#### VIEW

A view is a virtual table whose contents are defined by a query.

```sql
CREATE VIEW (column_name) AS

SELECT column_name1, column_name2

FROM table_name

WHERE column_name;
```

## Data Manipulation Language (DML)

Another type of SQL command is Data Manipulation Language (DML). DML is a sub-command in SQL that is used to manipulate the database that has been created. Basically, in DML there are four commands, namely SELECT, INSERT, DELETE, and UPDATE.

#### SELECT

```sql
SELECT * FROM
```

#### INSERT

```sql
INSERT INTO
```

#### DELETE

```sql
DELETE FROM
```

#### UPDATE

```sql
UPDATE table_name

SET column_name = newvalue;
```

## Constraints

Constraints are limits placed in one or more table columns. There are several types of constraints, including primary key, foreign key, unique, and check.

#### PRIMARY KEY

A primary key is a column or set of columns that uniquely identifies each row in a table.

```sql
CREATE TABLE Students (
    student_id INT PRIMARY KEY,
    student_name VARCHAR(50)
);
```

#### UNIQUE

A unique constraint ensures that all values in a specific column (or columns) are unique, but unlike a primary key, it allows NULL values.

```sql
CREATE TABLE Employees (
    employee_id INT PRIMARY KEY,
    employee_email VARCHAR(50) UNIQUE,
    employee_name VARCHAR(50)
);
```

#### NOT NULL

The "NOT NULL" constraint is used to ensure that a column cannot contain NULL values.

```sql
CREATE TABLE Employees (
    employee_id INT PRIMARY KEY,
    employee_email VARCHAR(50) UNIQUE NOT NULL,
    employee_name VARCHAR(50)
);
```

#### FOREIGN KEY

A foreign key is a column or set of columns in one table that refers to the primary key of another table.

```sql
CREATE TABLE Courses (
    course_id INT PRIMARY KEY,
    course_name VARCHAR(50)
);

CREATE TABLE Enrollments (
    enrollment_id INT PRIMARY KEY,
    student_id INT,
    course_id INT,
    FOREIGN KEY (student_id) REFERENCES Students(student_id),
    FOREIGN KEY (course_id) REFERENCES Courses(course_id)
);
```

#### Pengenalan Diagram

| Jenis                           | Tabel Definisi                                                                    |
| ------------------------------- | --------------------------------------------------------------------------------- |
| Entity                          | Tabel tunggal.                                                                    |
| Entity Relational Diagram (ERD) | Tabel yang terdiri dari tabel-tabel tunggal yang saling terhubung satu sama lain. |
