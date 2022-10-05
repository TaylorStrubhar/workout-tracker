import React from 'react';
import { Stack } from '@mui/system';
import { Button } from '@mui/material';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';

import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';
import CircularProgress from '@mui/material/CircularProgress';

import ProfileExercises from '../components/Profile/ProfileExercises';
import Typography from '@mui/material/Typography';

function Profile() {
  const { loading, data } = useQuery(QUERY_ME);

  // Save data, if any, in userData
  const userData = data?.me || {};

  if (loading) {
    return <CircularProgress />;
  }

  const userExercises = userData.exercises;

  return (
    <section>
      <Typography variant="h3">{`${userData.username}`}</Typography>
      <Stack spacing={2} direction={'row'} sx={{ alignItems: 'center' }}>
        <Typography variant="h6">My Exercises</Typography>
        <Button onClick={() => (window.location = '/exercises')}>
          See all <NavigateNextRoundedIcon />
        </Button>
      </Stack>
      <ProfileExercises exercises={userExercises} />
    </section>
  );
}

export default Profile;
