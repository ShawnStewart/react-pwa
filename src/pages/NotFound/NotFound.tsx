import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import { CenteredFlexBox, FullSizeCenteredFlexBox } from '@/components/layout';
import { giphy404, messages } from '@/config';

function NotFound() {
  return (
    <Container sx={{ height: '100%' }}>
      <FullSizeCenteredFlexBox className="flex-col">
        <iframe
          src={giphy404}
          width="100%"
          height="50%"
          style={{ maxHeight: '60%', maxWidth: '100%' }}
          allowFullScreen
        />
        <CenteredFlexBox className="flex-col">
          <Typography sx={{ mt: 2 }} variant="h4" color="error">
            404 Not Found
          </Typography>
          <Divider variant="middle" />
          <Typography variant="h4" sx={{ color: (theme) => theme.palette.info.main }}>
            {messages[404]}
          </Typography>
        </CenteredFlexBox>
      </FullSizeCenteredFlexBox>
    </Container>
  );
}

export default NotFound;
