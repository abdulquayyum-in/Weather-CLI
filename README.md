
# Weather CLI Application
A brief description of what this project does and who it's for

This application is a command line interface (CLI) tool that allows users to check the current weather and forecast for a specified location.


# Hi, I'm Mohammed Abdul Quayyum! 👋

Hello All ! I'm Mohammed Abdul Quayyum A passionate Developer having an experience in MERN Stack Web Development and want to develop sustainable and 
                          scalable social and technical systems to create impact
## 🛠 Skills

This command line application was build totally using JavaScript and uses open weather API for extracting information about other cities


## Features

- Check current weather conditions
- View 5-day forecast
- Specify location by city name or zip code
- Cross platform
## Installation

The steps for Installation for this project are very low

Clone this Repository using below Link

```
git@github.com:abdulquayyum-in/Weather-CLI.git

```

Now initialize Npm with the following command

```
npm init -y

```

This will install all the dependencies that are required for the application to run on your local system such as readlinesync and axios and many other dependencies

Create a new file in the root directory of the project called .env and add your OpenWeatherMap API key like this:

```
API_KEY=your_api_key

```

Inorder to Run the application you must have an stable version of node

```
npm install -g n
n lts
```

Then, in your code, you can use the dotenv package to access the API key from the .env file. To do this, you need to install the dotenv package by running the following command:

```
npm install dotenv
```

and then you need to require the package at the top of the file where you want to use the API key:

```
require('dotenv').config() {ES5}

import dotenv from 'dotenv'; {ES6}
dotenv.config();

```

Finally, you can access the API key from the .env file like this:

```
const apiKey = process.env.API_KEY

```


Inorder to run this project you have to follow these commands in order to use it
```bash
  cd Weather-CLI
  npm start

```
    


## 🚀 About Me
I'm a full stack developer who loves to build products which solves real life problems and explore lot of other stuff happening in the coding world

```
I Basically Eat Code and Sleep

```


## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://quayyum.in/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/mohammed-abdul-quayyum/)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://mobile.twitter.com/abdulquayyum_/)


## Requirements

* Node.js v12 or higher
* An API key from OpenWeatherMap
