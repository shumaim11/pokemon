import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png'
export const Header =  () => {
  return (
    <header className='border-bottom'>
      <Link to="/">
        <img className='img-fluid p-3 mx-5' width="200px" src={logo} alt="logo" />
      </Link>
     </header>
  );
};