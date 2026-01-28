import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  makeStyles,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";

import isAuth, { userType } from "../lib/isAuth";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Navbar = (props) => {
  const classes = useStyles();
  let history = useHistory();

  const handleClick = (location) => {
    console.log(location);
    history.push(location);
  };

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Portail de l'emploi DRHCOM
        </Typography>
        {isAuth() ? (
          userType() === "recruiter" ? (
            <>
              <Button color="inherit" onClick={() => handleClick("/home")}>
                Home
              </Button>
              <Button color="inherit" onClick={() => handleClick("/addjob")}>
                Ajouter des emplois
              </Button>
              <Button color="inherit" onClick={() => handleClick("/myjobs")}>
                Mes emplois
              </Button>
              <Button color="inherit" onClick={() => handleClick("/employees")}>
                Employés
              </Button>
              <Button color="inherit" onClick={() => handleClick("/profile")}>
                Profil
              </Button>
              <Button color="inherit" onClick={() => handleClick("/logout")}>
                Déconnexion
              </Button>
            </>
          ) : (
            <>
              <Button color="inherit" onClick={() => handleClick("/home")}>
                Home
              </Button>
              <Button
                color="inherit"
                onClick={() => handleClick("/applications")}
              >
                Candidatures
              </Button>
              <Button color="inherit" onClick={() => handleClick("/profile")}>
                Profil
              </Button>
              <Button color="inherit" onClick={() => handleClick("/logout")}>
                Déconnexion
              </Button>
            </>
          )
        ) : (
          <>
            <Button color="inherit" onClick={() => handleClick("/login")}>
              Connexion
            </Button>
            <Button color="inherit" onClick={() => handleClick("/signup")}>
              S'inscrire
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
