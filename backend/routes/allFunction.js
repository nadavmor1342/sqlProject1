const { Router, request } = require("express");
const router = Router();
const db = require("../models/db_conector");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

//get by id
router.get("/users/:id", async (req, res) => {
  try {
    const sqlquary = "select * from users where user_id=$1";
    const values = [req.params.id];
    const result = await db.query(sqlquary, values);
    res.send(result.rows);
  } catch (eroor) {
    res.status(400);
  }
});

//get by email
router.get("/users", async (req, res) => {
  try {
    const sqlquary = "select * from users where email=$1";
    const values = [req.body.email];
    const result = await db.query(sqlquary, values);
    res.send(result.rows);
  } catch (eroor) {
    res.status(400);
  }
});

//sign up

router.post("/signup", async (req, res) => {
  try {
    const body = req.body;
    const emailQuary = `select * from users where email = ($1)`;
    const resultEmail = await db.query(emailQuary, [body.email]);
    if (resultEmail.rows.length > 0) return res.send("email taken").status(400);
    const salt = await bcrypt.genSalt(10);
    const pas = await bcrypt.hash(body.password, salt);
    const insertQuary = `INSERT INTO users (name,password,email) values ($1,$2,$3)`;
    const values = [body.name, body.password, body.email];
    const result = await db.query(insertQuary, values);
    const resultToken = await db.query(emailQuary, [body.email]);
    const token = jwt.sign(resultToken.rows[0], "token");
    return res.send(token).status(201);
  } catch (error) {
    return res.sendStatus(400),console.log(error);
  }
});

// login

router.post("/login", async (req, res) => {
    try{
  let queryPassword = `select password from users where password=($1) and email=($2) `;
  let queryEmail = `select * from users where email=($1) `;
  const email = [req.body.email];
  const password = [req.body.password,req.body.email]
  let result = await db.query(queryEmail, email);
  if (result.rows.length == 0)
  return res.send("wrong password or email").status(400);
  const body = result.rows[0];
  let check = await bcrypt.compare(req.body.password, result.rows[0].password);
  if (result.rows.length<1) 
  return res.send("wrong password").status(400);
  const token = jwt.sign(body, "token");
  return res.send(token).status(200);
    }catch(error){
        res.send('oh no')
    }
});

//change password
// router.put('/login', async(req, res)=> {
//     try {
//         let emailQuary=
//     } catch (error) {
        
//     }
// });

//register to a course 


module.exports = router;
