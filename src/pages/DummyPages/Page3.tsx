import React from 'react';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import { Box, Grid, Typography } from '@material-ui/core';
import { TypographyProps } from '@material-ui/core/Typography';
import { startCase } from 'lodash';

const colors: Array<TypographyProps['color']> = [
  'textPrimary',
  'textSecondary',
  'primary',
  'error',
];

const variants: Array<TypographyProps['variant']> = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'subtitle1',
  'subtitle2',
  'body1',
  'body2',
];

const Page3 = () => {
  let history = useHistory();
  return (
    <React.Fragment>
      <Typography variant="h2" gutterBottom>
        Typography Demo
      </Typography>
      <br />
      <Button
        variant="outlined"
        color="primary"
        onClick={() => history.goBack()}
      >
        zurück zur letzten Seite
      </Button>
      <br />
      <Box padding={2}>
        <Grid container={true} spacing={1} direction="column">
          {colors.map((color) => (
            <Grid key={color} item={true}>
              <Grid container={true} spacing={1}>
                {variants.map((variant) => (
                  <Grid key={variant} item={true} xs={12}>
                    <Typography color={color} variant={variant}>
                      <code>{variant}</code> {startCase(color)}
                    </Typography>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Box>
    </React.Fragment>
  );
};

export default Page3;
