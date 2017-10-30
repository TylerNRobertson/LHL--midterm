// customer

"use strict"
const express = require('express');
const app  = express.Router();

module.exports = (DataHelpers) => {
app.get("/", (req, res) => {
if (!req.session.activeCustomer) { req.session.activeCustomer = 1}
  DataHelpers.getCustomers(req.session.activeCustomer,(err,result)=>{

  res.render('customercustomer',{ customer: result[0]});

  })
});
// specific order
app.get("/:id", (req, res) => {});



  app.post("/", (req, res) => {

    DataHelpers.postCustomer({
                    first_name: req.body.c_first_name,
                    last_name: req.body.c_last_name,
                    address: req.body.c_address,
                    phone: req.body.c_phone,
                    email: req.body.c_email,
                             },(err,result)=> {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        req.session.activeCustomer = result[0];
        console.log("customer post");
        console.log(result);
        res.status(201).redirect('/customer/customer');
      }
    });

  });



  return app;
}