import { Button, Typography, Paper } from '@mui/material';

export default function Card ({ title, description, actionText, onActionClick }) {
  return (
    <Paper elevation={3} style={{ padding: '16px', maxWidth: '400px', margin: '16px' }}>
      <Typography variant="h5" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body1" paragraph>
        {description}
      </Typography>
      <Button variant="contained" color="primary" onClick={onActionClick}>
        {actionText}
      </Button>
    </Paper>
  );
};

