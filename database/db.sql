CREATE TABLE list_tareas (
   id  INTEGER PRIMARY KEY AUTO_INCREMENT, 
   title VARCHAR(205) NOT NULL
   description VARCHAR(300) NOT NULL,
   done BOOLEAN NOT NULL DEFAULT 0,
   createAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP 
);