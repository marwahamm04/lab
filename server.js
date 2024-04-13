const express = require("express");
const Pool = require('pg').Pool
const app = express();
const bodyParser = require("body-parser")

app.use(express.static("."));
app.use(bodyParser.urlencoded({ extended: true }));


const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'carhit72011',
    port: 5432,
})


app.get("/prices", function (req, res) {
    const prices = {
        undercap: "$1,000",
        jersey: "$10.99",
        chiffon: "$15.99",
        modal: "$19.99"
    };

    res.json(prices);
});

app.get("/reviews", function (req, res) {

    // let reviews = {
    //     r1: "Trial of front end",
    //     r2: "Okay Im starting to like this front end backend stuff",
    //     r3: "PLease buy from them they are amazing",
    //     r4: "This is the best store ever to exist. I wish you guys sold EVERYTHING!"
    // } 

    const sql = "SELECT * FROM testimonals";

    pool.query(sql, (error, result) => {
        if (error) throw error
        res.status(200).json(result.rows)
    });
});


app.post("/sign-up", function (req, res) {

    console.log(req.body);

    const payload = req.body;

    const username = payload.username;
    const password = payload.password;

    const sql = "INSERT INTO users (username, password) VALUES ($1, $2)"

    const data = [username, password];

    pool.query(sql, data, (error, result) => {
        if (error) throw error
        res.status(200).json(result.rows)
    })

});

app.get("/login/:username/:password", function (req, res) {
    const username = req.params.username;
    const password = req.params.username;
});

app.post("/api/contactform/create", (req, res) => {
    const name = req.body.name;
    const phonenumber = req.body.phonenumber;
    const password = req.body.password;
    const email = req.body.email;
    
    // Add here the SQL
    const sql = "INSERT INTO contactform (name, phonenumber, password, email) VALUES ($1, $2, $3, $4)";
    const data = [name, password, phonenumber, email];
    
    pool.query(sql, data, (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
});

app.listen(3001, () => {
    console.log("Listening on port 3000");
});

