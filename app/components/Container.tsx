import { Box } from "@mui/material";

export default async function Container({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Box
      sx={{
        margin: '0 auto',
        padding: '0 2.4rem',
        maxWidth: 'xl',
        width: '100%',
      }}
    >
        {children}
    </Box>
  );
}