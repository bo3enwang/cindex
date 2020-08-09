import { Box, Container, Typography, Grid, Card, CardContent, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  main: {
    marginTop: 100,
  },
  content: {
    display: "flex",
    justifyContent: "center",
    "&>div": {
      width: 300,
    },
  },
  card: {
    backgroundColor: theme.palette.type === "light" ? theme.palette.grey[200] : theme.palette.grey[700],
    minHeight: 200,
  },
}));

const AboutPage = () => {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <Container maxWidth="lg">
        <Box>
          <Typography variant="h4" gutterBottom align="center">
            软件服务，找碳纪元
          </Typography>
          <div className={classes.content}>
            <div>
              <Typography gutterBottom align="center">
                碳纪元，是一个商家服务公司。
              </Typography>
              <Typography gutterBottom>
                我们帮助每一位重视产品和服务的商家私有化顾客资产、拓展互联网客群、提高经营效率，全面助力商家成功。
              </Typography>
            </div>
          </div>
        </Box>
        <Box css={{ marginTop: 50 }}>
          <Typography variant="h3" gutterBottom align="center">
            这是一群聪明、有梦想、有恒心的年轻人
          </Typography>

          <Grid container spacing={3}>
            <Grid item xs={12} sm={3}>
              <Card className={classes.card}>
                <CardContent>
                  <Typography variant="h4" gutterBottom>
                    团队目标
                  </Typography>
                  <Typography>大家都认可的明确的目标，是一面旗帜，大家都朝着旗帜的方向前进</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Card className={classes.card}>
                <CardContent>
                  <Typography variant="h4" gutterBottom>
                    共享
                  </Typography>
                  <Typography>为了达成团队共同目标的,资源、知识、信息及时地在团队成员中间传递</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Card className={classes.card}>
                <CardContent>
                  <Typography variant="h4" gutterBottom>
                    不同的角色
                  </Typography>
                  <Typography>
                    好的团队的特点就是大家的角色都不一样，每一个团队成员要扮演好自己特定的角色，角色的互补才会形成好的团队。
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Card className={classes.card}>
                <CardContent>
                  <Typography variant="h4" gutterBottom>
                    良好的沟通
                  </Typography>
                  <Typography>
                    好的团队首先能够进行良确
                    好的沟通，成员沟通的障碍越少，团队就越好，这也是每一个处在企业中的人深刻体会。
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default AboutPage;
