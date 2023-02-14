# Node JS and PostgreSQL Backend Rest API Server

Node.js runs JavaScript code in a single thread, which means that your code can only do one task at a time. However, Node.js itself is multithreaded and provides hidden threads through the libuv library, which handles I/O operations like reading files from a disk or network requests. Through the use of hidden threads, Node.js provides asynchronous methods that allow your code to make I/O requests without blocking the main thread.

Although Node.js has hidden threads, you cannot use them to offload CPU-intensive tasks, such as complex calculations, image resizing, or video compression. Since JavaScript is single-threaded when a CPU-intensive task runs, it blocks the main thread and no other code executes until the task completes. Without using other threads, the only way to speed up a CPU-bound task is to increase the processor speed.

However, in recent years, CPUs haven’t been getting faster. Instead, computers are shipping with extra cores, and it’s now more common for computers to have 8 or more cores. Despite this trend, your code will not take advantage of the extra cores on your computer to speed up CPU-bound tasks or avoid breaking the main thread because JavaScript is single-threaded.

# Why we choose Nodejs
To remedy this, Node.js introduced the worker-threads module, which allows you to create threads and execute multiple JavaScript tasks in parallel. Once a thread finishes a task, it sends a message to the main thread that contains the result of the operation so that it can be used with other parts of the code. The advantage of using worker threads is that CPU-bound tasks don’t block the main thread and you can divide and distribute a task to multiple workers to optimize it.

In this tutorial, you’ll create a Node.js app with a CPU-intensive task that blocks the main thread. Next, you will use the worker-threads module to offload the CPU-intensive task to another thread to avoid blocking the main thread. Finally, you will divide the CPU-bound task and have four threads work on it in parallel to speed up the task.

# Compilation Steps

1. run the postres database 

docker-compose  -f docker-compose-postgres.yml up 

2. run the first demo server

docker-compose -f ./myapp/docker-compose.yml up


2. install prequiste for the second app

npm install
npm start 

or
docker-compose up


# Database Settings on Env

PORT=5000
NODE_ENV=development
POSTGRES_HOST=127.0.0.1
POSTGRES_DB=postgres
POSTGRES_PORT=5432
POSTGRES_USER=postgres
POSTGRES_PASSWORD=postgres


# Pgadmin 
TO Create Tables Navigate to : http://localhost:5051/login?next=%2Fbrowser%2F

Username : postgres@todo.com
abcde@12345 
!Note : Do not confuse with database connection settings

You can import to pgadmin postgres db  the following SQL statements tasks.sql and user.sql

# Testing the API

- Register user : http://localhost:5000/api/auth/register
- Login User : http://localhost:5000/api/auth/login

- Get all Tasks http://localhost:5000/api/tasks/
- Post a Task : http://localhost:5000/api/tasks

Sample Data

{
   
   
    "title" : "cbcvbcbcv Investigating Issues 3",
    "description" : "Investigating Issues",
    "task_status" : "done",
     "tags": [
      "Others"
    ],
    "subTasks": [
      {
        "subTaskTitle": "dfg Youtdfgdfgube Tuturial 3",
        "status": true
      },
      {
        "subTaskTitle": "dfgdfg Godfgogle and Linked Materials 4",
        "status": false
      },
      {
        "subTaskTitle": "dfgdfgEmbedfgdded Software Dev",
        "status": true
      },
      {
        "subTaskTitle": "Software Testing and Demonstration",
        "status": true
      }
    ]
   
   
}







