import React from 'react';
import clsx from 'clsx';
import { Drawer, Toolbar, CssBaseline, AppBar, List, Typography, Divider, IconButton, ListItem, ListItemIcon, Collapse, ListItemText, InputBase } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { Delete, Edit, Send, Comment, Search, Menu } from '@material-ui/icons';
import { fade, useTheme, makeStyles } from '@material-ui/core/styles'
import Deleter from './components/webhook/deleter'

const drawerWidth = 240;

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#20212f',
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  // search bar
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
  // side menu
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  // nested list
  nested: {
    paddingLeft: theme.spacing(4),
  },
  // webhook deleter
  deleter: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(1, 1, 1, 0),
  },
  header: {
    position: 'absolute',
    textAlign: 'center',
    fontSize: '2em',
    top: 0,
  }
}));

function App() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleOpenClose = () => {
    setOpen(!open);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Open sidebar menu"
              onClick={handleOpenClose}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <Menu />
            </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            DiscordToolbox
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <Search />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleOpenClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
          <List disablePadding>
          <ListItem button>
            <ListItemIcon>
              <Search />
            </ListItemIcon>
            <ListItemText primary="Discord ID" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemIcon>
              <Comment />
            </ListItemIcon>
            <ListItemText primary="Webhooks" />
          </ListItem>
            <List disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <Send />
                </ListItemIcon>
                <ListItemText primary="Sender" />
              </ListItem>
            </List>
            <List disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <Edit />
                </ListItemIcon>
                <ListItemText primary="Editer" />
              </ListItem>
            </List>
            <List disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <Delete />
                </ListItemIcon>
                <ListItemText primary="Deleter" />
              </ListItem>
              <Divider />
            </List>
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <header className={classes.header}>
            Webhook Deleter
        </header>
        <div className={classes.deleter}>
          <Deleter />
        </div>
        <Divider />
      </main>
    </div>
  );
}

export default App;
