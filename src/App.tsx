import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, CssBaseline } from '@mui/material';

function App() {
  return (
    <>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>BRR Dashboard</Typography>
          <Button color="inherit" component={Link} to="/">Dashboard</Button>
          <Button color="inherit" component={Link} to="/staff">Staff</Button>
          <Button color="inherit" component={Link} to="/tickets">Tickets</Button>
          <Button color="inherit" component={Link} to="/todo">To-Do</Button>
          <Button color="inherit" component={Link} to="/request">IT Request</Button>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="/" element={<div>Dashboard Page</div>} />
        <Route path="/staff" element={<div>Staff Page</div>} />
        <Route path="/tickets" element={<div>Tickets Page</div>} />
        <Route path="/todo" element={<div>Todo Page</div>} />
        <Route path="/request" element={<div>IT Request Page</div>} />
      </Routes>
    </>
  );
}

export default App;
