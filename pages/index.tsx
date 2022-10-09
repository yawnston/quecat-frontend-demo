import { Divider } from '@mui/material';
import Typography from '@mui/material/Typography';
import { NextPage } from 'next';


const HomePage: NextPage = () => {
  return (
    <>
      <Typography variant='h3'>
        MM-quecat
      </Typography>
      <Divider />
      <Typography paragraph>
        This is the tool MM-quecat! Work in progress!
      </Typography>
    </>
  );
}


export default HomePage
