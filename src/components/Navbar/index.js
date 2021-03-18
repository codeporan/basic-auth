import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../actions";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavLogo,
  NavBarContainer,
  NavItem,
  NavLink,
  NavMenu,
  MobileIcon,
  NavBtn,
  NavBtnLink,
} from "./NavberElement";
export const Navbar = () => {
  const users = useSelector((state) => state.users);
  const user = useSelector((state) => state.authentication.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.getAll());
  }, []);

  return (
    <>
      <Nav>
        <NavBarContainer>
          <NavLogo to="/">Home</NavLogo>
          <MobileIcon>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLink to="about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="about">Services</NavLink>
            </NavItem>{" "}
            <NavItem>
              <NavLink to="about">Contact</NavLink>
            </NavItem>{" "}
            <NavItem>
              <NavLink to="about">About</NavLink>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/login">Sign In </NavBtnLink>
          </NavBtn>
        </NavBarContainer>
      </Nav>
    </>
  );
};
