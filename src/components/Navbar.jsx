// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation

// const Navbar = () => {
//   return (
//     <AppBar position="static">
//       <Toolbar>
//         <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//           Employee Dashboard
//         </Typography>
//         <Button component={Link} to="/emp" color="inherit">
//           Home
//         <Button component={Link} to="/add" color="inherit">
//           Add Employee 
//         </Button>
//         <Button component={Link} to="/sign" color="inherit">
//           Signup
//         </Button>
//         <Button component={Link} to="/" color="inherit">
//           Logout
//         </Button>
//       </Toolbar>
//     </AppBar>
//   )
// }

// export default Navbar;







import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Employee Dashboard
        </Typography>
        <Button component={Link} to="/emp" color="inherit">
          Home
        </Button>
        <Button component={Link} to="/add" color="inherit">
          Add Employee 
        </Button>
        <Button component={Link} to="/sign" color="inherit">
          Signup
        </Button>
        <Button component={Link} to="/" color="inherit">
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;



