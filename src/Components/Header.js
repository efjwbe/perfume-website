import styles from '../assets/css/Header.module.css'
import logo from '../assets/images/logo.png'

const Header = (props) => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo_box}>
          <img src={logo} alt="logo" />
        </div>
          <ul className={styles.category}>
            {props.category &&
                props.category.map((items, idx) => (
                <div id={"item"+idx} style={{height: props.heights[idx], margin: '50px'}}>
                    <li id={items} >{items}</li>
                </div>
            ))}
        </ul>
      </div>
    </header>
  );
}

Header.defaultProps = {
    category:[]
}
export default Header
