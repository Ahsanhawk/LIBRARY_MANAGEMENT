const express = require('express')
const router = express.Router()

const fuction = require('../controllers/crud.controllers')


router.post('/addbooks' , fuction.addBooks)
router.post('/add_issue_details' , fuction.issued_details)
router.post('/add_fine_details' , fuction.Fine_details)
router.delete('/delete_book' , fuction.deleteBook)
router.delete('/delete_issue_info' , fuction.deleteIssue_details)
router.delete('/delete_fine_info' , fuction.delete_fine_details)
router.get('/retrive_books' , fuction.Retrive_Books)
router.get('/retrive_fine_info' , fuction.Retrive_Books_Fine)
router.get('/retrive_issue_book' , fuction.Retrive_issue_book)
router.put('/updates_book', fuction.updateBooks)
router.put('/update_fine_details', fuction.update_fine_details)
router.put('/update_issued_details', fuction.update_issue_books)



module.exports = router