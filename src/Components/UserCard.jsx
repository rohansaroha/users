import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function UserCard({ data }) {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h5" component="div">
            Hi,I am {data?.name} from {data?.address?.city}
          </Typography>
          <Typography variant="body2">{data?.email}</Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
