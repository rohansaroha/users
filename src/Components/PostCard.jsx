import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function PostCard({ data }) {
  return (
    <Box
      sx={{
        width: 360,
        borderRadius: "16px",
        minHeight: 100,
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Card variant="outlined">
        <React.Fragment>
          <CardContent>
            <Typography
              sx={{ fontSize: 16, paddingBottom: "1rem" }}
              color="text.secondary"
              noWrap
            >
              {data?.title}
            </Typography>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Typography sx={{ fontSize: 16 }} color="#868686" gutterBottom>
                No of comments
              </Typography>
              <Typography sx={{ fontSize: 14 }} color="#868686" gutterBottom>
                {data?.no_of_comments}
              </Typography>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Typography sx={{ fontSize: 16 }} color="#868686" gutterBottom>
                Date Created
              </Typography>
              <Typography sx={{ fontSize: 14 }} color="#868686" gutterBottom>
                {data?.date_created}
              </Typography>
            </div>
          </CardContent>
        </React.Fragment>
      </Card>
    </Box>
  );
}
