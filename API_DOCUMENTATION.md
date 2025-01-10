# API Endpoint Documentation: Assignment Student Module API

This API provides CRUD operations for managing student records in the system.

**URL**: `http://localhost:3000`

## Endpoints
### 1. Create Student (POST) **
- **Method**: `POST`
- **Endpoint**: `/students`
- **Description**: Adds a student to the system.
- **Request Body**:
    ```json
    {
      "firstName": "Adelaide Jane",
      "lastName": "Gaufo",
      "enrollmentDate": "2025-01-10"
    }
    ```
- **Response**:
  - **201 Created**:
    ```json
    {
      "firstName": "Adelaide Jane",
      "lastName": "Gaufo",
      "id": 1,
      "createdAt": "2025-01-10T15:35:57.307Z",
      "updatedAt": "2025-01-10T15:35:57.307Z"
    }

### 2. Get All Students (GET) **
- **Method**: `GET`
- **Endpoint**: `/students`
- **Description**: Fetches a list of all students in the system.
- **Request Parameters**: None.
- **Response**:
  - **200 OK**:
    ```json
      {
        "id": 1,
        "firstName": "Adelaide Jane",
        "lastName": "Gaufo",
        "email": "",
        "enrollmentDate": "null",
        "createdAt": "2025-01-10T15:35:57.307Z",
        "updatedAt": "2025-01-10T15:35:57.307Z"
      }

---

### 3. Get Specific Student (GET) **
- **Method**: `GET`
- **Endpoint**: `/students/:id`
- **Description**: Fetches a specific student by their ID.
- **Request Parameters**:
  - `id` (integer) - The ID of the student.
- **Response**:
  - **200 OK**:
    ```json
      {
        "id": 1,
        "firstName": "Adelaide Jane",
        "lastName": "Gaufo",
        "email": "",
        "enrollmentDate": "null",
        "createdAt": "2025-01-10T15:35:57.307Z",
        "updatedAt": "2025-01-10T15:35:57.307Z"
      }
    ```
  - **404 Not Found**:
    ```json
    { "message": "Sorry but Student not found",
      "error": "Not Found",
      "statusCode": 404
     }
    ```
---

### **4. Update Student (PUT) **
- **Method**: `PUT`
- **Endpoint**: `/students/:id`
- **Description**: Updates the information of an existing student.
- **Request Body**:
    ```json
    {
      "firstName": "Juan",
      "lastName": "Dela Cruz",
      "enrollmentDate": "2025-01-10"
    }
    ```
- **Response**:
  - **200 OK**:
    ```json
    {
        "id": 1,
        "firstName": "Juan",
        "lastName": "Dela Cruz",
        "email": "",
        "enrollmentDate": "null",
        "createdAt": "2025-01-10T15:35:57.307Z",
        "updatedAt": "2025-01-10T15:35:57.307Z",
        "enrollmentDate": "2025-01-10"
      }
    ```
---

### **5. Delete Student**
- **Method**: `DELETE`
- **Endpoint**: `/students/:id`
- **Description**: Deletes a student by their ID.
- **Response**:
  - **200 OK**:
    ```json
    { "message": "Student deleted successfully" }
    ```
  - **404 Not Found**:
    ```json
    { "message": "Sorry but Student not found!",
      "error": "Not Found",
      "statusCode": 404
    }
    ```
