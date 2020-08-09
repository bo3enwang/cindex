import { Box, Container, Typography, Grid, Card, CardContent, Theme, CardMedia } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useRef, useEffect, useState } from "react";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

class TextBox {
  id = Math.random() * 10000;
  index = 0;
  stringsContainer: string[] = [];
  setStr: (str: string) => void;
  constructor(strings: string[], setStr: (str: string) => void) {
    this.stringsContainer = strings;
    this.setStr = setStr;
  }

  start = async () => {
    this.index = this.index % this.stringsContainer.length;
    const str = this.stringsContainer[this.index];
    await this.write(str);
    await sleep(2000);
    await this.erase(str);
    await sleep(1000);
    await this.start();
  };

  write = async (text: string) => {
    let index = 0;
    while (index < text.length) {
      const timeout = 200;
      await sleep(timeout);
      index++;
      this.setStr(text.substring(0, index));
    }
  };
  erase = async (removedStr: string) => {
    let newStr = removedStr;
    while (newStr.length) {
      const timeout = 100;
      await sleep(timeout);
      newStr = newStr.substring(0, newStr.length - 1);
      this.setStr(newStr);
    }
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  main: {
    position: "relative",
    height: "100vh",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundClip: "content-box",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    background: "#0d328d",
  },
  title: {
    textAlign: "center",
    marigin: "30px 0",
    color: "#fff",
  },

  subTitle: {
    color: "#fff",
  },
  media: {
    height: 230,
  },
  wrapper: {
    position: "relative",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundClip: "content-box",
    backgroundImage: "url('/img/background.jpg')",
  },
  showText: {
    fontSize: "30px",
    minHeight: "50px",
    textTransform: "uppercase",
    letterSpacing: "1px",
    display: "flex",
    alignItems: "flex-end",
    fontWeight: "bold",
    color: "#fff",
    "&:after": {
      display: "block",
      content: "''",
      width: "20px",
      height: "6px",
      background: "#fff",
      color: "orange",
      marginBottom: "4px",
      marginLeft: "7px",
      animationDuration: "350ms",
      animationName: "$fade",
      animationDirection: "alternate",
      animationIterationCount: "infinite",
    },
  },
  "@keyframes fade": {
    from: {
      opacity: 1,
    },
    to: {
      opacity: 0,
    },
  },
  card: {
    minHeight: 360,
  },
}));

const IndexPage = () => {
  const classes = useStyles();
  const [str, setStr] = useState("");
  const [textBox, setTextBox] = useState<any>();

  useEffect(() => {
    if (!textBox) {
      const newTextBox = new TextBox(["企业平台软件开发", "个性化软件定制开发", "提供SAAS平台"], setStr);
      newTextBox.start();
      setTextBox(newTextBox);
    }
  }, []);

  return (
    <div>
      <div>
        <div className={classes.wrapper}>
          <div className={classes.showText}>{str}</div>
          <Typography className={classes.title} variant="h2" component="h2">
            碳纪元科技
          </Typography>
        </div>
      </div>

      <Container maxWidth="lg">
        <Box css={{ margin: "20px 0" }}>
          <Typography variant="h4" component="h4" gutterBottom>
            平台与服务
          </Typography>
          <Typography color="textSecondary">
            贵州碳纪元科技有限公司专注于企业软件和“互联网+”平台研发，提供按需定制化服务。
          </Typography>
        </Box>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Card className={classes.card}>
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
            <Card className={classes.card}>
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

export default IndexPage;
