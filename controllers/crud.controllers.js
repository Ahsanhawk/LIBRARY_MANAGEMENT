
const sequelize = require("../config")
const express = require('express')
const app = express()
const books_issue = require("../models/books_issue.model")
const Books = require("../models/Books.model")
const fine_info = require("../models/fine_info")
const Student = require("../models/Student.model")
const Teacher = require("../models/Teacher.model")
const Admin = require("../models/Admin.model")
const Borrowing = require("../models/Borrowing.model")
const Categories = require("../models/Categories.model")
const Language = require("../models/Language.model")



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

const addStudent =(req, res) => {
 sequelize.sync().then(() => {
    console.log('Student table created successfully!');
    Student.create({
        //  username: req.query.username, password: req.query.password 
        First_Name:req.query.First_Name,
        Last_Name:req.query.Last_Name,
        Roll_No:req.query.Roll_No,
        BookName:req.query.BookName,
        Issue_date:req.query.Issue_date,
        release_date:req.query.release_date
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

const addTeacher =(req, res) => {
  sequelize.sync().then(() => {
     console.log('Student table created successfully!');
     Teacher.create({
         //  username: req.query.username, password: req.query.password 
         First_Name:req.query.First_Name,
         Last_Name:req.query.Last_Name,
         Roll_No:req.query.Roll_No,
         BookName:req.query.BookName,
         Department:req.query.Department,
         Issue_date:req.query.Issue_date,
         release_date:req.query.release_date
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


const addAdmin =(req, res) => {
  sequelize.sync().then(() => {
     console.log('Student table created successfully!');
     Admin.create({
         //  username: req.query.username, password: req.query.password 
         Name:req.query.Name,
         Email:req.query.Email,
         Password:req.query.Password
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

const addBorrowing =(req, res) => {
 sequelize.sync().then(() => {
    console.log('Student table created successfully!');
    Borrowing.create({
        //  username: req.query.username, password: req.query.password 
        Name:req.query.Name,
        Reference_No:req.query.Reference_No,
        Author_Name:req.query.Author_Name,
        Issue_date:req.query.Issue_date,
        release_date:req.query.release_date
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

const addCategories =(req, res) => {
  sequelize.sync().then(() => {
     console.log('Student table created successfully!');
     Categories.create({
         //  username: req.query.username, password: req.query.password 
         Name:req.query.First,
         Author_Name:req.query.Author_Name,
         Reference_No:req.query.Reference_No,
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


const addLanguage =(req, res) => {
  sequelize.sync().then(() => {
     console.log('Student table created successfully!');
     Language.create({
         //  username: req.query.username, password: req.query.password 
         Book_Name:req.query.Book_Name,
         Reference_No:req.query.Reference_No,
         Author_Name:req.query.Author_Name,
         Language_:req.query.Language_
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


 const deleteStudent = (req , res) =>
 {sequelize.sync().then(() =>  {
    console.log(req.query.id);
    Student.destroy({
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



const deleteTacher = (req , res) =>
{sequelize.sync().then(() =>  {
   console.log(req.query.id);
   Teacher.destroy({
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


const deleteAdmin = (req , res) =>
{sequelize.sync().then(() =>  {
   console.log(req.query.id);
   Admin.destroy({
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



 const deleteBorrowing = (req , res) =>
 {sequelize.sync().then(() =>  {
    console.log(req.query.id);
    Borrowing.destroy({
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



const deleteCategories = (req , res) =>
{sequelize.sync().then(() =>  {
   console.log(req.query.id);
   Categories.destroy({
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


const deleteLanguage = (req , res) =>
{sequelize.sync().then(() =>  {
   console.log(req.query.id);
   Language.destroy({
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

const updateBorrowing = (req , res) =>{
  Borrowing.update(
    {
        Reference_No: 1112434,
    },
    {
        where:{ id : 1},
    }
).then(() =>{
     console.log(" upadted data ")
     res.send("updated")
})

};


const updateCategories = (req , res) =>{
  Categories.update(
    {
        Name: xyz,
    },
    {
        where:{ id : 1},
    }
).then(() =>{
     console.log(" upadted data ")
     res.send("updated")
})

};

const updateLanguage = (req , res) =>{
  Language.update(
    {
        Book_Name: web_development,
    },
    {
        where:{ id : 1},
    }
).then(() =>{
     console.log(" upadted data ")
     res.send("updated")
})

};


const updateStudent = (req , res) =>{
  Student.update(
    {
        Roll_No: 1115,
    },
    {
        where:{ id : 4},
    }
).then(() =>{
     console.log(" upadted data ")
     res.send("updated")
})

};


const updateTeacher = (req , res) =>{
  Teacher.update(
    {
        Name: xyz,
    },
    {
        where:{ id : 4},
    }
).then(() =>{
     console.log(" upadted data ")
     res.send("updated")
})

};

const updateAdmin = (req , res) =>{
  Admin.update(
    {
        Password: 1115,
    },
    {
        where:{ id : 4},
    }
).then(() =>{
     console.log(" upadted data ")
     res.send("updated")
})

};


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


const retriveStudent = (req , res) =>
{
sequelize.sync().then(() =>{
  try{
    Student.findAll().then((result)=>{
      res.json(result)
    })
  }
  catch(error){
    console.log(error);
  }
})
};




const retriveTeacher = (req , res) =>
{
sequelize.sync().then(() =>{
  try{
    Teacher.findAll().then((result)=>{
      res.json(result)
    })
  }
  catch(error){
    console.log(error);
  }
})
};


const retriveAdmin = (req , res) =>
{
sequelize.sync().then(() =>{
  try{
    Admin.findAll().then((result)=>{
      res.json(result)
    })
  }
  catch(error){
    console.log(error);
  }
})
};


const retriveBorrowing = (req , res) =>
{
sequelize.sync().then(() =>{
  try{
    Borrowing.findAll().then((result)=>{
      res.json(result)
    })
  }
  catch(error){
    console.log(error);
  }
})
};




const retriveCategories = (req , res) =>
{
sequelize.sync().then(() =>{
  try{
    Categories.findAll().then((result)=>{
      res.json(result)
    })
  }
  catch(error){
    console.log(error);
  }
})
};


const retriveLanguage = (req , res) =>
{
sequelize.sync().then(() =>{
  try{
    Language.findAll().then((result)=>{
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
 Retrive_Books , Retrive_Books_Fine , Retrive_issue_book,
 addStudent , addTeacher , addAdmin, deleteStudent , deleteTacher , deleteAdmin,
 updateStudent , updateTeacher , updateAdmin,
 retriveStudent , retriveTeacher , retriveAdmin,addBorrowing , addCategories , addLanguage,
deleteBorrowing , deleteCategories , deleteLanguage,
 updateBorrowing , updateCategories , updateLanguage,
 retriveBorrowing , retriveCategories , retriveLanguage
 }
