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
    // console.table("SELECT * FROM products");
    connection.query("SELECT * FROM products", function(err, res){
        if (err) throw err;  
        console.table(res); 
    inquirer
    .prompt([
        {
        name: "id",
        type: "list",
        choices: function() {
            var idArray = [];
            for (var i = 0; i < res.length; i++) {
                idArray.push(res[i].item_id + " " + res[i].product_name);
            }
            return idArray;
        },
        message: "Select the ID of the product you would like to buy?"
    },
    {
        name: "quantity",
        type: "input",
        message: "How many would you like to purchase?"    
    }
    ])
    .then(function(answers){
        console.log(answers.id);
        console.log(answers.quantity);
        var index = answers.id - 1;
        var chosenItem = res[0]; 
        var chosenItemQuantity = chosenItem.stock_quantity;
        if(answers.quantity > chosenItemQuantity){
            console.log("Insufficient Quantity!");
        }
        else {
           var updatedQuantity = chosenItemQuantity - answers.quantity;
           connection.query("UPDATE products SET ? WHERE ?",[{stock_quantity : updatedQuantity},
            {item_id : index}], 
            function(err, res) {
                if (err) throw err;
            })

        var total = res[0].price * answer.quantity;
        console.log("The total cost of your purchase is: " + total);

        }
        connection.end();
    });
});   
}


