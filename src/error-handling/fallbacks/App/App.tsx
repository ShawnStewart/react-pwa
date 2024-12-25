import EmailIcon from '@mui/icons-material/Email';
import RestartIcon from '@mui/icons-material/RestartAlt';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import { FullSizeCenteredFlexBox } from '@/components/layout';
import { email, messages } from '@/config';
import { resetApp } from '@/utils/reset-app';

export function AppErrorBoundaryFallback() {
  return (
    <FullSizeCenteredFlexBox className="h-screen">
      <Paper sx={{ p: 5 }}>
        <Typography variant="h5" component="h3">
          {messages.app.crash.title}
        </Typography>
        <Button
          startIcon={<EmailIcon />}
          variant="outlined"
          target="_blank"
          rel="noreferrer"
          href={`mailto: ${email}`}
          sx={{ my: 3 }}
        >
          {messages.app.crash.options.email}
        </Button>
        <Typography component="h6">or</Typography>
        <Button startIcon={<RestartIcon />} sx={{ mt: 3 }} variant="outlined" onClick={resetApp}>
          {messages.app.crash.options.reset}
        </Button>
      </Paper>
    </FullSizeCenteredFlexBox>
  );
}
