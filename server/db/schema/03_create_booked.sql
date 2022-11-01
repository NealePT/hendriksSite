-- schema/03_create_booked.sql
DROP TABLE IF EXISTS bookedDays CASCADE;
-- CREATE URLS
CREATE TABLE bookedDays (
  id SERIAL PRIMARY KEY,
  day integer NOT NULL,
  month integer NOT NULL,
  year integer NOT NULL
);