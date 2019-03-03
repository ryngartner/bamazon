var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "monkie1909",
    database: "bamazon"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id" + connection.threadId + "\n");
    readBamazon();
});

function readBamazon() {
    connection.query("SELECT * FROM products", function(err, res){
        if (err) throw err;
        
        console.log(res);
        connection.end();
    });

}




// function userInput(){
//     inquirer
//     .prompt({
//         name: "id",
//         type: "input",
//         message: "What is the ID of the product you would like to buy?"
//     })
//     .then(function(answer) {
//         var id = 
//     })
// }