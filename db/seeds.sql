--Topic Levels
INSERT INTO levels (topic_level, topic_description) VALUES (1, "Entry");
INSERT INTO levels (topic_level, topic_description) VALUES (2, "Junoir");
INSERT INTO levels (topic_level, topic_description) VALUES (3, "Middle");

--Topics
INSERT INTO topics (topic) VALUES ("Frontend-Fundamentals (HTML, CSS, Bootstrap)");
INSERT INTO topics (topic) VALUES ("Javascript-Fundamentals (Javascript, jQuery, Ajax)");
INSERT INTO topics (topic) VALUES ("Repository-Fundamentals (Github, Heroku)");
INSERT INTO topics (topic) VALUES ("Databases (Mongo, SQL, Sequelize, Firebase)");
INSERT INTO topics (topic) VALUES ("JavaScript-Server-Fundamentals (NodeJS, Express, NPM)");
INSERT INTO topics (topic) VALUES ("React");

--Questions
INSERT INTO questions (question, answer, topic_id, level_id, timer)
VALUES ("What is the purpose of the alt attribute on images?", "The alt attribute provides alternative information for an image if a user cannot view it. The alt attribute should be used to describe any images except those which only serve a decorative purposes, in which case it should be left empty.", 1,1, 60);

--Dummy Data
INSERT INTO users (first_name, last_name, email, picture) VALUES ('John', 'Smith', 'a@b.com', 'qwerty.jpg');