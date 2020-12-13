import React, { useState } from "react";
import Head from "next/head";
import { AppBar, Toolbar, Typography, CssBaseline, Link as MuiLink, Button, Menu, MenuItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Link from "../components/Link";
import throttle from "lodash/throttle";
import { useRouter } from "next/router";
import DehazeIcon from "@material-ui/icons/Dehaze";
import Router from "next/router";

function Copyright() {
  return (
    <div>
      <Typography variant="body2" align="center">
        {"Copyright © "}
        <MuiLink color="inherit" href="https://www.tanjiyuan.com/">
          贵州碳纪元科技有限公司
        </MuiLink>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
      <Typography variant="body2" align="center">
        <a style={{ color: "#93bce0" }} href="https://beian.miit.gov.cn" target="_blank">
          黔ICP备20006892号-1
        </a>
      </Typography>
    </div>
  );
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => {
  return {
    root: {
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh",
      overflow: "auto",
    },
    toolbar: {
      paddingRight: 24, // keep right padding when drawer closed
    },
    appBar: {
      background: "transparent",
      zIndex: theme.zIndex.drawer + 1,
      boxShadow: "none",
      transition: theme.transitions.create(["background"], {
        easing: theme.transitions.easing.easeIn,
        duration: theme.transitions.duration.leavingScreen,
      }),
      "&:hover": {
        background: "#fff",
        boxShadow:
          "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12);",
        "& $logo": {
          color: "#363433",
        },
        "& $navLink button": {
          color: "#000 !important",
        },
      },
    },
    appBarFixed: {
      background: "#fff",
      boxShadow:
        "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12);",
    },
    logo: {
      height: 64,
      paddingLeft: 40,
      overflow: "hidden",
      color: "#fff",
      lineHeight: "64px",
      whiteSpace: "nowrap",
      textDecoration: "none",
      fontWeight: 600,
      "&:hover": {
        textDecoration: "none",
      },
      "& img": {
        position: "relative",
        height: 32,
        marginRight: 16,
        top: 8,
      },
      transition: theme.transitions.create(["color"], {
        easing: theme.transitions.easing.easeIn,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    logoFixed: {
      color: "#363433",
    },
    title: {
      color: "#000",
      flexGrow: 1,
    },
    nav: {
      flexGrow: 1,
      "@media (max-width: 1280px)": {
        display: "none",
      },
    },
    navButton: {
      "@media (min-width: 1280px)": {
        display: "none",
      },
    },
    navFixed: {
      flexGrow: 1,
    },
    navLink: {
      color: "#fff",
      marginRight: 30,
      textDecoration: "none !important",
      "& button": { color: "#fff" },
    },
    navLinkFixed: {
      "& button": { color: "#000" },
    },
    drawerPaper: {
      position: "relative",
      whiteSpace: "nowrap",
      width: drawerWidth,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerPaperClose: {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    },
    main: {},
    paper: {
      // padding: theme.spacing(2),
      display: "flex",
      overflow: "auto",
      flexDirection: "column",
    },
    fixedHeight: {
      height: 240,
    },
    footer: {
      padding: theme.spacing(3, 2),
      marginTop: "auto",
      background: "#3a3030;",
      position: "relative",
      color: "#fff",
      minHeight: 50,
    },
  };
});

interface AppProps {
  Component: any;
  pageProps: any;
}

const _App = ({ Component, pageProps }: AppProps) => {
  const [top, setTop] = useState(0);
  const classes = useStyles();
  const router = useRouter();
  const isNotIndex = router.pathname !== "/";

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }

    if (!isNotIndex) {
      document.addEventListener("scroll", () => {
        updateTop(window.pageYOffset);
      });
    }
  }, []);

  const updateTop = throttle((top: number) => {
    setTop(top);
  }, 500);

  const isFixed = isNotIndex || top > 0;

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <Head>
        <title>碳纪元科技</title>
        <link rel="icon" href="/static/favicon.ico" />
      </Head>
      <CssBaseline />
      <AppBar position="fixed" className={clsx(classes.appBar, { [classes.appBarFixed]: isFixed })}>
        <Toolbar className={classes.toolbar}>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            <Link className={clsx(classes.logo, { [classes.logoFixed]: isFixed })} href="/">
              <img
                src="https://tjy-1300579501.cos.ap-chongqing.myqcloud.com/%E7%BA%A6%E8%93%9D%E8%8B%A6%E4%BF%AE%E8%80%85%20%20%20%20%E7%A2%B3%E7%BA%AA%E5%85%83%E7%A7%91%E6%8A%80%20%E7%BA%AFLogo.svg"
                alt=""
              />
              碳纪元科技
            </Link>
          </Typography>
          <nav className={clsx(classes.nav, { [classes.navFixed]: isFixed })}>
            <Link className="nav-link" href="/products">
              <Button size="large">产品中心</Button>
            </Link>
            <Link className="nav-link" href="/solutions">
              <Button size="large">解决方案</Button>
            </Link>
            <Link className="nav-link" href="/about">
              <Button size="large">关于碳纪元</Button>
            </Link>
            <Link className="nav-link" href="/join">
              <Button size="large">加入我们</Button>
            </Link>
          </nav>
          <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
            <MenuItem
              onClick={() => {
                Router.push("/products");
                handleClose();
              }}
            >
              产品中心
            </MenuItem>
            <MenuItem
              onClick={() => {
                Router.push("/solutions");
                handleClose();
              }}
            >
              解决方案
            </MenuItem>
            <MenuItem
              onClick={() => {
                Router.push("/about");
                handleClose();
              }}
            >
              关于碳纪元
            </MenuItem>
            <MenuItem
              onClick={() => {
                Router.push("/join");
                handleClose();
              }}
            >
              加入我们
            </MenuItem>
          </Menu>
          <Button className={classes.navButton} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
            <DehazeIcon></DehazeIcon>
          </Button>
        </Toolbar>
      </AppBar>
      <main className={classes.main}>
        <Component {...pageProps} />
      </main>
      <footer className={classes.footer}>
        <Copyright></Copyright>
      </footer>
    </div>
  );
};

export default _App;
