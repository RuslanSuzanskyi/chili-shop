import { Box } from "@mui/material";

export default async function PageContent({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Box>
      {children}
    </Box>
  );
}