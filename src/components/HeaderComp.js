import React from 'react'
import { Button, Container, Menu, } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

class HeaderComp extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <Menu pointing secondary size='large'>
            <Menu.Item as={NavLink} exact to='/'>Home</Menu.Item>
            <Menu.Item as={NavLink} to='/work'>Work</Menu.Item>
            <Menu.Item as='a'>Careers</Menu.Item>
            <Menu.Item position='right'>
              <Button as='a'>Log in</Button>
              <Button as='a' style={{ marginLeft: '0.5em' }} primary>Sign Up</Button>
            </Menu.Item>
          </Menu>
        </Container>
      </div>
    );
  }
}

export default HeaderComp;
