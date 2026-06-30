import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function Loading() {
  return (
    <Box
      sx={{
        minHeight: '100dvh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
      }}
    >
      <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
        <Box
          sx={{
            width: 32,
            height: 32,
            borderRadius: '50%',
            border: 2,
            borderColor: 'primary.main',
            borderTopColor: 'transparent',
            animation: 'spin 0.8s linear infinite',
            margin: '0 auto',
            '@keyframes spin': {
              '100%': { transform: 'rotate(360deg)' },
            },
          }}
        />
      </Container>
    </Box>
  );
}

