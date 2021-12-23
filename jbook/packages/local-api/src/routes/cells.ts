import express from 'express';

const router = express.Router();

router.get('/cells', async (req, res) => {
  // make sure the cell storage file exists
  // if it does not exist, add in a default list of cells

  //read the file
  // parse a list of cells out of it
  // Send list of cells back to browser
});

router.post('/cells', async (req, res) => {
  // make sure the file exists

  // if not, create it

  // take the list of cells from the request object
  // serialize them
  // write the cells into the file
})
