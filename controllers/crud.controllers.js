
const sequelize = require("../config")
const express = require('express')
const app = express()
const books_issue = require("../models/books_issue.model")
const Books = require("../models/Books.model")
const fine_info = require("../models/fine_info")


////---------------------ADD----------------
const addBooks =(req, res) => {
 sequelize.sync().then(() => {
    console.log('Books issue table created successfully!');
    Books.create({
        //  username: req.query.username, password: req.query.password 
        Book_Name:req.query.Book_Name,
        Book_Genre:req.query.Book_Genre,
        Book_Author:req.query.Book_Author,
        Book_Price:req.query.Book_Price,
        Reference_No:req.query.Reference_No
        })
        .then((result) => {
          res.json(result);
        })
        .catch((error) => {
          res.status(500).send({ message: error.message || "some error occured" });
        });
      console.log(req.result);
 })
};

const issued_details =(req, res) => {
  sequelize.sync().then(() => {
     console.log('Books table created successfully!');
     books_issue.create({
         //  username: req.query.username, password: req.query.password 
         BookName:req.query.BookName,
         Bookgenre:req.query.Bookgenre,
         IssueDate:req.query.IssueDate,
         ReturnDate:req.query.ReturnDate
         })
         .then((result) => {
           res.json(result);
         })
         .catch((error) => {
           res.status(500).send({ message: error.message || "some error occured" });
         });
       console.log(req.result);
  })
 };


const Fine_details =(req, res) => {
  sequelize.sync().then(() => {
     console.log('Student Fine table created successfully!');
     fine_info.create({
         //  username: req.query.username, password: req.query.password 
         Student_Name:req.query.Student_Name,
         Fine_Date:req.query.Fine_Date,
         Amount:req.query.Amount,
         Email:req.query.Email
     })
         .then((result) => {
           res.json(result);
         })
         .catch((error) => {
           res.status(500).send({ message: error.message || "some error occured" });
         });
       console.log(req.result);
  })
 };



// //////--------------------------delete--------------------


 const deleteBook = (req , res) =>
 {sequelize.sync().then(() =>  {
    console.log(req.query.id);
    Books.destroy({
      where: {
        id: parseInt(req.query.id),
      },
    })
      .then((result) => {
        res.send("Delete").status(200);
      })
      .catch((error) => {
        console.log("Not Delete");
      });
  })
};



const deleteIssue_details = (req , res) =>
{sequelize.sync().then(() =>  {
   console.log(req.query.id);
   books_issue.destroy({
     where: {
       id: parseInt(req.query.id),
     },
   })
     .then((result) => {
       res.send("Delete").status(200);
     })
     .catch((error) => {
       console.log("Not Delete");
     });
 })
};


const delete_fine_details = (req , res) =>
{sequelize.sync().then(() =>  {
   console.log(req.query.id);
   fine_info.destroy({
     where: {
       id: parseInt(req.query.id),
     },
   })
     .then((result) => {
       res.send("Delete").status(200);
     })
     .catch((error) => {
       console.log("Not Delete");
     });
 })
};



// /////////----------------------UPDATE------------------

const updateBooks = (req , res) =>{
  Books.update(
    {
        Reference_No: 1001,
    },
    {
        where:{ id : 2},
    }
).then(() =>{
     console.log(" upadted data ")
     res.send("updated")
})

};


const update_issue_books = (req , res) =>{
  books_issue.update(
    {
        Name: silent,
    },
    {
        where:{ id : 1},
    }
).then(() =>{
     console.log(" upadted data ")
     res.send("updated")
})

};

const update_fine_details = (req , res) =>{
  fine_info.update(
    {
        Student_Name: ahsan,
    },
    {
        where:{ id : 1},
    }
).then(() =>{
     console.log(" upadted data ")
     res.send("updated")
})

};

// ////-------------------Retrive------------------

const Retrive_Books = (req , res) =>
{
sequelize.sync().then(() =>{
  try{
    Books.findAll().then((result)=>{
      res.json(result)
    })
  }
  catch(error){
    console.log(error);
  }
})
};




const Retrive_issue_book = (req , res) =>
{
sequelize.sync().then(() =>{
  try{
    books_issue.findAll().then((result)=>{
      res.json(result)
    })
  }
  catch(error){
    console.log(error);
  }
})
};


const Retrive_Books_Fine = (req , res) =>
{
sequelize.sync().then(() =>{
  try{
    fine_info.findAll().then((result)=>{
      res.json(result)
    })
  }
  catch(error){
    console.log(error);
  }
})
};


module.exports={addBooks , issued_details , Fine_details,
deleteBook , deleteIssue_details , delete_fine_details,
 updateBooks , update_issue_books , update_fine_details,
 Retrive_Books , Retrive_Books_Fine , Retrive_issue_book
 }