import React from 'react';
import { Container, makeStyles } from '@material-ui/core';
import Page from 'src/components/Page';
import ValidateProposal from './Vote'
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const ValidateProposalView = () => {
  const classes = useStyles();
  return (
    <Page
      className={classes.root}
      title="Validate the ongoing Proposal"
    >
      <Container maxWidth="lg">
        <ValidateProposal />
      </Container>
    </Page>
  );
};

export default ValidateProposalView;
