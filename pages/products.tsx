import React from "react";
import { Container, Typography, Grid, Card, CardContent, CardMedia } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  main: {
    marginTop: 100,
  },
  media: {
    height: 230,
  },
}));

interface ProductsProps {}

const Products = ({}: ProductsProps) => {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Card>
              <CardMedia className={classes.media} image="/img/web.svg" title="移动商城" />
              <CardContent>
                <Typography variant="h5" component="h2" gutterBottom>
                  移动商城
                </Typography>
                <Typography color="textSecondary">一体化商城软件，提供优秀的定制服务</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card>
              <CardMedia className={classes.media} image="/img/miniapp.svg" title="供应链管理系统" />
              <CardContent>
                <Typography variant="h5" component="h2" gutterBottom>
                  供应链管理系统
                </Typography>
                <Typography color="textSecondary">
                  社交化的供应链管理系统 实现企业内、外部业务协作，突破组织边界、资源与时空限制
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Products;
