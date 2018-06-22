--get todo by id
select * 
from todos
where id=2;

--get all todos
select * 
from todos;

--where isdone is false
SELECT * FROM TODOS WHERE ISDONE = 'FALSE';

--where is done is true 
SELECT * FROM TODOS WHERE ISDONE = 'TRUE';

--search by title where it contains scoop
SELECT * FROM TODOS WHERE TITLE ILIKE '%scoop%';

--UPDATE row
UPDATE TODOS
SET ISDONE = FALSE
WHERE ID=1 ;

--delete all finished todos
delete from todos
where isDone = TRUE;