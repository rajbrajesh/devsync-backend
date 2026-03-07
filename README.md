# DevSync - Task Management Backend

DevSync is a Spring Boot backend application designed to manage coding tasks across platforms like LeetCode, Codeforces, and GeeksforGeeks.

## Tech Stack
- Java 17
- Spring Boot
- Spring Data JPA
- PostgreSQL
- Maven
- SLF4J Logging

## Features
- Create Task
- Get All Tasks
- Get Task By ID
- Update Task
- Delete Task
- Pagination & Sorting
- Global Exception Handling
- Logging

## API Endpoints

POST /api/tasks  
GET /api/tasks  
GET /api/tasks/{id}  
PUT /api/tasks/{id}  
DELETE /api/tasks/{id}

Pagination:
GET /api/tasks/paginated?page=0&size=5

### Create Task

POST /api/tasks

Request Body

{
"title":"Dynamic Programming",
"platform":"LeetCode"
}

## Project Structure
controller
service
repository
entity
dto
exception

## Future Improvements
- Search API
- Swagger Documentation
- JWT Authentication
- Frontend Integration