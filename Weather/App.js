import readlineSync from "readline-sync"
import axios from "axios"
import chalk from "chalk"
import dotenv from 'dotenv';
dotenv.config();
console.clear()
console.log(chalk.yellow("------------------------------------------------------------------------------------------------------------------------------"))
console.log(chalk.red("\t \t \t \t \t \t Weather CLI Application \t \t \t \t \t \t"))
console.log(chalk.yellow("------------------------------------------------------------------------------------------------------------------------------"))
console.log(chalk.red("\t \t \t \t \t  Designed & Copyright belongs to Quayyum  \t \t \t \t"))
console.log(chalk.yellow("------------------------------------------------------------------------------------------------------------------------------"))
console.log(chalk.blue.underline("\t This is an Command line Application which gives you an information related to weather status of a specific country "))
console.log("\n")
//URL
//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// console.log(chalk.greenBright.bold("Enter the name of the city:"))
let cityname = readlineSync.question(chalk.greenBright.bold("Enter a city name:"));
const apikey = process.env.API_KEY
function getweatherdata(){
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${apikey}`)
    .then((res)=>{
        // console.log(res.data)

           console.log("\n")
        //    console.log(res.data)
        console.log(chalk.blue("City Name: "+res.data.name))+
        console.log(chalk.white.bold.underline(`>> These are the weather statistics of ${res.data.name}`))
        console.log("\n")
        console.log(chalk.magentaBright(`>> Temperature[celsius] =${Math.floor((res.data.main.temp)-273.15)}°C`));
        console.log(chalk.magentaBright(`>> The temperature in Fahrenheit is ${(Math.floor((res.data.main.temp)-273.15)*9/5 + 32)}°F`));
        console.log(chalk.magentaBright(`>> The min temperature in Fahrenheit is ${(Math.floor((res.data.main.temp_min)-273.15)*9/5 + 32)}°F`));
        console.log(chalk.magentaBright(`>> The min temperature in celsius is ${Math.floor((res.data.main.temp_min)-273.15)}°C`));
        console.log(chalk.magentaBright(`>> The max temperature in Fahrenheit is ${(Math.floor((res.data.main.temp_max)-273.15)*9/5 + 32)}°F`));
        console.log(chalk.magentaBright(`>> The max temperature in celsius is ${Math.floor((res.data.main.temp_max-273.15))}°C`));
        console.log(chalk.magentaBright(">> Humidity of "+res.data.name +" is "+ res.data.main.humidity))
        console.log(chalk.magentaBright(">> The UST Time for sunrise is " +timeUTC(res.data.sys.sunrise)))
        console.log(chalk.magentaBright(">> The IST Time for sunrise is " +timeIST(res.data.sys.sunrise)))
      console.log(chalk.magentaBright(">> The local time is " +timeIST(res.data.timezone)))
        // console.log(res.data)
    })
    .catch((error)=>{
        console.error(chalk.bgRed("The entered city name does not exist"))
    })

}

getweatherdata();

function timeUTC(time){
 return new Date(time*1000)
}

function timeIST(time){
    return new Date((time+19800)*1000)

}

