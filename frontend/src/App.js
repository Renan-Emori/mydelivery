import './App.css';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { darkTheme } from './Theme/DarkTheme';
import { Navbar } from './component/Navbar/Navbar.jsx';
import CustomerRoute from './Routes/CustomerRoute.jsx';
// import Profile from './component/Profile/Profile.jsx';
// import Cart from './component/Cart/Cart.jsx';
// import Home from './component/Home/Home.jsx';
// import RestaurantDetails from './component/Restaurant/RestaurantDetails.jsx';
function App() {
  return (
    
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Navbar />
      {/* <Home /> */}
      {/* <RestaurantDetails /> */}
      {/* <Cart /> */}
      {/* <Profile /> */}
      <CustomerRoute />
    </ThemeProvider>
  );
}

export default App;
