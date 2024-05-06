# week07-assignment
CREATE TABLE IF NOT EXISTS fans (
  id SERIAL PRIMARY KEY,
  name TEXT,
  age INT
);

CREATE TABLE IF NOT EXISTS movies (
  id SERIAL PRIMARY KEY,
  item TEXT
);

CREATE TABLE IF NOT EXISTS movies_junction (
  fan_id INT REFERENCES fans(id),
  movie_id INT REFERENCES movies(id)
);

INSERT INTO fans (name, age) values
('Betty', 43),
('Jeff', 23),
('Polly', 37);

INSERT INTO movies (item) VALUES
('Cyborg'),
('Dr Terrors House of Horrors'),
('It Came from Beneath the Sea'),
('Hard Ticket to Hawaii'),
('The Room'),
('Birdemic'),
('Samurai Cop'),
('Troll 2'),
('Behind the Mask'),
('Crippled Avengers'),
('Miami Connection'),
('Five Elements Ninjas'),
('She Woke Up Pregnant'),
('Plan 9 from Outer Space'),
('House on Haunted Hill'),
('The Return of the Living Dead'),
('ThanksKilling'),
('Dr Goldfoot and the Bikini Machine'),
('To Die Is Hard'),
('Enter the Ninja'),
('Braindead'),
('Moron Movies'),
('Chopping Mall'),
('I Am Here Now');

INSERT INTO movies_junction (fan_id, movie_id) VALUES
(1,1),
(1,5),
(1,8),
(2,2),
(2,10),
(2,9),
(3,3),
(3,14),
(3,7),
(3,18);