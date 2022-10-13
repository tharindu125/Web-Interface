let mongoose = require('mongoose');
let express = require('express');
let router = express.Router();

//importing the register model
  let registerSchema = require('../Models/register');



  //creating the vehicle
  router.route('/create-vehicle').post((req,res,next) => {
    registerSchema.create(req.body, (error,data)=> {
        if(error){
            return next(error)
        }else{
            console.log(data)
            res.json(data)
        }
    })
  });

  //reading register
  router.route('/').get((req,res,next) => {
    registerSchema.find((error,data) => {
        if(error){
            return next(error)
        }else{
            res.json(data)
        }
    })
  })

  //get the particular details
  router.route('/edit-register/:id').get((req,res,next) => {
    registerSchema.findById(req.params.id,(error,data) => {
      if(error){
        return next(error)
      }else{
        res.json(data)
      }
    })
  })  

  //upadate register data 
  router.route('/update-register/:id').put((req,res,next) => {
    registerSchema.findByIdAndUpdate(req.params.id, {
      $set: req.body
    },(error,data) => {
      if(error){
        return next(error)
      }else{
        res.json(data)
        console.log('Vehicle Updated Successfully')
      }
    })
  })  

  //delete register data
  router.route('/delete-register/:id').delete((req,res,next) => {
    registerSchema.findByIdAndRemove(req.params.id,(error,data) => {
      if(error){
        return next(error)
      }else{
        res.status(200).json({
          msg : data
        })        
      }
    })
  }) 
  
  module.exports = router;
