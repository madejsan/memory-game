import { ROUTES } from '@constants/routes';
import Logo from '@images/betbull.png';
import { Box, Fade, Icon, Slide } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { PrimaryButton } from '@styles/button.styles';
import { H1 } from '@styles/heading.styles';
import { StyledOutlinedInput } from '@styles/input.styles';
import React, { PureComponent } from 'react';

import { HomeProps, HomeState } from './home.types';

class HomePage extends PureComponent<HomeProps, HomeState> {
  constructor(props: HomeProps) {
    super(props);
    this.state = { username: '' };
  }

  handleInputChange = (e) => {
    this.setState({ username: e.target.value });
  };

  createUser = () => {
    const { username } = this.state;
    const { create, history } = this.props;

    create(username);
    history.push(ROUTES.GAME);
  };

  render() {
    const { username } = this.state;

    return (
      <Fade in={true} mountOnEnter unmountOnExit>
        <Box display='flex' justifyContent='center' alignItems='center' height='100vh' textAlign='center'>
          <Slide in={true} direction='left' timeout={{ enter: 900, exit: 900 }} mountOnEnter unmountOnExit>
            <Box>
              <Box mb={3}>
                <img src={Logo} />
              </Box>
              <H1>Join the game</H1>
              <Box mt={3} mb={3}>
                <StyledOutlinedInput value={username} onChange={this.handleInputChange} placeholder='Enter your name' />
              </Box>
              <Box>
                <PrimaryButton
                  onClick={this.createUser}
                  disabled={!username}
                  endIcon={
                    <Icon>
                      <ArrowForwardIcon />
                    </Icon>
                  }
                >
                  Start
                </PrimaryButton>
              </Box>
            </Box>
          </Slide>
        </Box>
      </Fade>
    );
  }
}

export default HomePage;
