import { Grid, Typography, Paper } from "@material-ui/core";
import SocialIcons from "./SocialIcons";

const Footer = () => {
  return (
    <Paper elevation={4} style={{ padding: "20px", marginTop: "40px" }}>
      <Grid container direction="column" alignItems="center" spacing={2}>
        <Grid item>
          <Typography variant="body1">
            © {new Date().getFullYear()} DRHCOM – Tous droits réservés
          </Typography>
        </Grid>

        <Grid item>
          <SocialIcons />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Footer;
