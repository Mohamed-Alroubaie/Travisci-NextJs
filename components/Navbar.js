import Link from 'next/link';
import style from '../styles/Navbar.module.css';

const Navbar = () => {
  return (
    <div>
      <div className={style.navbar}>
        <Link href='/'>
          <a className={style.logo}>Portfolio</a>
        </Link>
        <ul className={style.nav}>
          <li className={style.list}>
            <Link href='/'>
              <a className={style.link}>Home</a>
            </Link>
          </li>
          <li className={style.list}>
            <Link href='/about'>
              <a className={style.link}>About</a>
            </Link>
          </li>
          <li className={style.list}>
            <Link href='/'>
              <a className={style.link}>Work</a>
            </Link>
          </li>
          <li className={style.list}>
            <Link href='/'>
              <a className={style.link}>Contact</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
