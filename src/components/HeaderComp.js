import React from 'react'
import { Button, Container, Menu, } from 'semantic-ui-react'

const HeaderComp = () => (
  <Container>
    <Menu pointing secondary size='large'>
      <Menu.Item as='a' active>Home</Menu.Item>
      <Menu.Item as='a'>Work</Menu.Item>
      <Menu.Item as='a'>Careers</Menu.Item>
      <Menu.Item position='right'>
        <Button as='a'>Log in</Button>
        <Button as='a' style={{ marginLeft: '0.5em' }} primary>Sign Up</Button>
      </Menu.Item>
    </Menu>
  </Container>
);

export default HeaderComp;