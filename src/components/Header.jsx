import Menu from "./Menu";
import "./styles.css"; 

const Header = () => {
    return (
        <>
        <header>
          <div className="logo">
            <div className="logo_line">
            IC Auto Tek
                </div>
            </div>
        </header>
        <Menu/>
        </>
      );
};

export default Header;