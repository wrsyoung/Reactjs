import React from 'react';
import { Button, Container, Menu, } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

const FixedMenu = () => (

  <Menu fixed='top' size='large'>
    <Container>
      <Menu.Item as={NavLink} exact to='/'>Home</Menu.Item>
      <Menu.Item as={NavLink} to='/work'>Work</Menu.Item>
      <Menu.Item as='a'>Careers</Menu.Item>
      <Menu.Menu position='right'>
        <Menu.Item className='item'>
          <Button as='a'>Log in</Button>
        </Menu.Item>
        <Menu.Item>
          <Button as='a' primary>Sign Up</Button>
        </Menu.Item>
      </Menu.Menu>
    </Container>
  </Menu>

);

export default FixedMenu;