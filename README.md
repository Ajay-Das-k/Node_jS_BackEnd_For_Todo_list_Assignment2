# Node_jS_BackEnd_For_Todo_list_Assignment2

"Node.js Backend for Todo List" likely refers to a backend implementation using Node.js for a Todo List application. Here's a description of what each part of the phrase typically implies:

Node.js: Node.js is a popular runtime environment for executing JavaScript code server-side. It allows developers to write server-side code using JavaScript, which traditionally runs in web browsers. With Node.js, developers can create scalable and efficient server-side applications.

Backend: In the context of web development, the backend refers to the server-side logic and infrastructure responsible for handling requests from clients (such as web browsers or mobile apps). This includes tasks such as processing data, interacting with databases, and serving responses to clients.

For Todo List: This indicates that the backend is specifically designed to support a Todo List application. A Todo List application typically allows users to create, read, update, and delete tasks or items on a list. The backend would handle operations such as creating new tasks, retrieving existing tasks, updating task details, and deleting tasks.

So, "Node.js Backend for Todo List" suggests a server-side implementation using Node.js to support the functionality of a Todo List application. This backend would likely provide APIs (Application Programming Interfaces) for client-side applications (such as web or mobile frontends) to interact with, enabling users to manage their Todo Lists.
![creativeplus4](creativeplus4.gif)
# .env Config

MONGODB_URL=mongodb+srv://<UserNameMongo>:Password@cluster0.okojcda.mongodb.net/?retryWrites=true&w=majority
PORT=5000

create 

## Getting Started

To get started with the project, follow these steps:

1. Go to the project directory.

2. istall NodeMon.
   
    ```bash
   npm i nodemon -g
    
3. Install dependencies by running:
   
   ```bash
   npm install --force
4. Run Project by:
   
   ```bash
   npm start
# Postman config file


```json
{
	"info": {
		"_postman_id": "fa66d27c-48a3-4a5d-ba28-e2724a4066c5",
		"name": "Assignment",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
		"_exporter_id": "30613116"
	},
	"item": [
		{
			"name": "addData",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\"string\":\"fgfgfgfgfgfgfgfgfgfgfgfgfg\"}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:5000/addData",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "5000",
					"path": [
						"addData"
					]
				}
			},
			"response": []
		},
		{
			"name": "gell all data",
			"request": {
				"method": "GET",
				"header": []
			},
			"response": []
		},
		{
			"name": "delete data",
			"request": {
				"method": "GET",
				"header": []
			},
			"response": []
		},
		{
			"name": "resetData",
			"request": {
				"method": "GET",
				"header": []
			},
			"response": []
		},
		{
			"name": "updateData",
			"request": {
				"method": "GET",
				"header": []
			},
			"response": []
		},
		{
			"name": "CountFinder",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://localhost:5000/count",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "5000",
					"path": [
						"count"
					]
				}
			},
			"response": []
		},
		{
			"name": "CountFinder",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://localhost:5000/count",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "5000",
					"path": [
						"count"
					]
				}
			},
			"response": []
		}
	]
}

