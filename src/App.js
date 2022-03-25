
import './App.css';
import Box from './components/Box';
import Heading from './components/Heading';
import Snackbar from '@material-ui/core/Snackbar'
import React, { useState } from 'react';
import Alert from '@material-ui/lab/Alert';




function App() {
  const [open, setOpen] = useState(false);
  const handleClick = () => { setOpen(true) };
  const handleClose = (event, reason) => {
    //  if(reason==='clickaway')
    //   return;
    setOpen(false);
  }
  return (
    <>



      <div className="App">
        <Heading />
      
        <div className='boxes'>
          <div onClick={handleClick} >
          <Box  />
          </div>
          <Snackbar open={open} autoHideDuration={1000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
            List item
clicked
            </Alert>
          </Snackbar>


        </div>
      </div>
    </>
  );
}

export default App;
