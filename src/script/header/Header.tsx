import DropdownLanguage from './DropdownLanguage'
import '../../css/Header.css'
import ute from '../../assets/header/ute.png'
import DropdownLogin from './DropdownLogin'


function Header() {
  return (
    <header>
      <ul className='nav-section'>
        <li className='nav-btn'>
          <div className='home-btn'>
            <a href='/'><p>Home</p></a>
          </div>
        </li>
        <li className='nav-btn'>
          <DropdownLanguage />
        </li>
        <li className='nav-btn'>
          <DropdownLogin />
        </li>
      </ul>
      <div className='logo-section'>
        <a href='/'>
          <img className='ute-img' src={ute}/>
        </a>
      </div>
    </header>
  )
}

export default Header