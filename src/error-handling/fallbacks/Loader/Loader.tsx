import Typography from '@mui/material/Typography';

import { Box } from '@/components/layout';
import { messages } from '@/config';

export function LoaderErrorBoundaryFallback() {
  return (
    <Box>
      <Typography variant="h5">{messages.loader.fail}</Typography>
    </Box>
  );
}
