import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { AiFillHome } from 'react-icons/ai';
import { Button } from '../../globalStyles';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavItemBtn,
  NavLinks,
  NavBtnLink
} from './Navbar.elements';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to='/' onClick={closeMobileMenu}>
              HUBERT
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to='/' onClick={closeMobileMenu}>
                <AiFillHome/>Trang chủ       
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/partner' onClick={closeMobileMenu}>
                  Trở thành đối tác
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/customer' onClick={closeMobileMenu}>
                  Khách hàng
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/aboutus' onClick={closeMobileMenu}>
                  Chúng tôi
                </NavLinks>
              </NavItem>
              <NavItemBtn>
                {button ? (
                  <NavBtnLink to='/sign-up'>
                    <Button primary>Đăng nhập/Đăng ký</Button>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink to='/sign-up'>
                    <Button onClick={closeMobileMenu} fontBig primary>
                    Đăng nhập/Đăng ký
                    </Button>
                  </NavBtnLink>
                )}
              </NavItemBtn>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
