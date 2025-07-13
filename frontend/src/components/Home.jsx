import React, { useEffect, useState } from "react";
import {Box,Button,Card,CardActions,CardContent,CardMedia,Grid,Typography,} from "@mui/material";
import axios from "axios";

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/get")
      .then((res) => setBlogs(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Box sx={{ padding: 4, backgroundColor: "#fff", minHeight: "100vh" }}>
      <Grid container spacing={3}>
        {blogs.map((blog) => (
          <Grid item xs={12} sm={6} md={4} key={blog._id}>
            <Card sx={{ maxWidth: 345, boxShadow: 1 }}>
              <CardMedia
                component="img"
                height="180"
                image={blog.img_url}
                alt={blog.title}
              />

              
              <CardContent>
                <Typography variant="h6" style={{textAlign:"left"}} color="text.secondary">
                  {blog.title}
                </Typography>
                <Typography variant="body1" style={{textAlign:"left"}}
                  sx={{ fontWeight: "bold", marginTop: "5px" }}
                >
                  {blog.content}
                </Typography>
              </CardContent>

              <CardActions sx={{ paddingLeft: 1 }}>
              <Button size="small" sx={{ backgroundColor: "#9C27B0", color: "#fff" }}>DELETE</Button>
              <Button size="small" sx={{ backgroundColor: "#9C27B0", color: "#fff", ml: 1 }}>UPDATE</Button>
             </CardActions>

            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Home;
