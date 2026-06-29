/*
    Lab 2 – GitHub Vercel
    Name: Iurii Buzynnik
    Student #146530233

*/

var HTTP_PORT = process.env.PORT || 3000;

var express = require("express"); 

var app = express();

app.use(express.json()); 


//1. Root path
//URL: 127.0.0.1:3000

app.get("/", function(req, res) {
    res.send(`Yuri Buzynnik WEB322 ${new Date().toISOString()}`);
});
//________________________________________________________________________________________________________________________________________

//2. Any path, in our case is Mike
//URL: 127.0.0.1:3000/mike

app.get( "/mike", (req, res) => {                                                
    res.send(`SUCCESS 2: mike has arrived!`);
});

//________________________________________________________________________________________________________________________________________


//3. Path with query string
//URL: 127.0.0.1:3000/november?name=romeo

app.get("/november", (req, res) => {
    const name = req.query.name;
    res.send(`SUCCESS 3: query string value = ${name}`);
});

//________________________________________________________________________________________________________________________________________

//4. Path with parameter only
//URL: 127.0.0.1:3000/oscar/tango

app.get("/oscar/:value", (req, res, next) => { 
if (req.query.name) { //Checks if the URL has a query named name, like ?name=bob
    return next();
}

const paramValue = req.params.value;
 res.send(`SUCCESS 4: params value = ${paramValue}`);
});

//________________________________________________________________________________________________________________________________________

//5. Path with parameter and query string
//URL: 127.0.0.1:3000/oscar/tango?name=victor
app.get("/oscar/:value", (req, res) => {
    const paramValue = req.params.value;
    const queryValue = req.query.name;

    res.send(`SUCCESS 5: params value = ${paramValue} & query string value = ${queryValue}`);
});

//________________________________________________________________________________________________________________________________________

//6. Invalid/unexpected URL 
//URL: 127.0.0.1:3000/<any other value>

app.get( /.*/, (req, res) => {                                                   
    res.send(`FAILED! Fix your URL.`);    
                                                                                
});

//________________________________________________________________________________________________________________________________________

const server = app.listen(HTTP_PORT, () => {
    console.log(`Server is ${HTTP_PORT}`);
}); 


