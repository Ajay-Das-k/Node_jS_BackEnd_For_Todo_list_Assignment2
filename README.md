# Node_jS_BackEnd_For_Todo_list_Assignment2

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

