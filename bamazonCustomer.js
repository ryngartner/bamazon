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
    start();
});

function start() {
    connection.query("SELECT * FROM products", function(err, res){
        if (err) throw err;   
    inquirer
    .prompt([
        {
        name: "id",
        type: "rawlist",
        choices: function() {
            var idArray = [];
            for (var i = 0; i < res.length; i++) {
                idArray.push(res[i].product_name);
            }
            return idArray;
        },
        message: "What is the ID of the product you would like to buy?"
    },
    {
        name: "quantity",
        type: "input",
        message: "How many would you like to purchase?"    
    }
    ])
    .then(function(answers){
        console.log(answers.id);
        connection.end();
    });
});   
};


