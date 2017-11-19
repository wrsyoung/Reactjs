import React, { Component } from 'react'
import { Button, Container, Divider, Grid, Header,
        Icon, Image, List, Menu, Segment, Visibility,}
        from 'semantic-ui-react'

const HeaderComp = () => (
    <Container>
    <Menu inverted pointing secondary size='large'>
      <Menu.Item as='a' active>Home</Menu.Item>
      <Menu.Item as='a'>Work</Menu.Item>
      <Menu.Item as='a'>Careers</Menu.Item>
      <Menu.Item position='right'>
        <Button as='a' inverted>Log in</Button>
        <Button as='a' inverted style={{ marginLeft: '0.5em' }}>Sign Up</Button>
      </Menu.Item>
    </Menu>
  </Container>
);

export default HeaderComp;