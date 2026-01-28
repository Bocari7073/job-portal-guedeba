import React from "react";
import { Grid, Typography, Paper, IconButton, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom"; // ✅ useHistory pour v5
import BusinessIcon from "@material-ui/icons/Business";
import WorkIcon from "@material-ui/icons/Work";
import GroupIcon from "@material-ui/icons/Group";
import StarIcon from "@material-ui/icons/Star";
import ContactMailIcon from "@material-ui/icons/ContactMail";

import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";

// TikTok SVG icon
const TikTokIcon = () => (
  <svg width="24" height="26" viewBox="0 0 24 24" fill="currentColor">
    <path d="M21 8.5a6.5 6.5 0 0 1-4.2-1.5v8.7a5.7 5.7 0 1 1-5.7-5.7c.4 0 .8 0 1.2.1v3.1a2.6 2.6 0 1 0 1.7 2.5V2h3a6.5 6.5 0 0 0 4 4v2.5z" />
  </svg>
);

// Section réutilisable
const Section = ({ icon, title, children }) => (
  <Paper elevation={3} style={{ padding: "25px", marginBottom: "25px" }}>
    <Grid container spacing={2} alignItems="center">
      <Grid item>{icon}</Grid>
      <Grid item>
        <Typography variant="h6">{title}</Typography>
      </Grid>
    </Grid>
    <Typography variant="body1" style={{ marginTop: "15px" }}>
      {children}
    </Typography>
  </Paper>
);

// Icônes réseaux sociaux
const SocialIcons = () => {
  const icons = [
    { icon: <FacebookIcon />, color: "#1877F2", link: "https://www.facebook.com/profile.php?id=61586330245431" },
    { icon: <LinkedInIcon />, color: "#0A66C2", link: "https://www.linkedin.com/in/cabinet-drhcom-3505a121a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
    { icon: <InstagramIcon />, color: "#E1306C", link: "https://www.instagram.com/DRHCOM" },
    { icon: <TwitterIcon />, color: "#1DA1F2", link: "https://twitter.com/DRHCOM" },
    { icon: <TikTokIcon />, color: "#000", link: "https://vm.tiktok.com/ZMHog4PwqbEUM-KmJDs/" },
  ];

  return icons.map((item, index) => (
    <IconButton
      key={index}
      component="a"
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      style={{ color: item.color, transition: "transform 0.3s ease" }}
      onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
      onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      {item.icon}
    </IconButton>
  ));
};

// Footer
const Footer = () => (
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

// Composant principal Welcome
const Welcome = () => {
  const history = useHistory(); // ✅ correct pour v5

  return (
    <Grid container justify="center" style={{ padding: "40px", minHeight: "93vh" }}>
      <Grid item xs={12} md={10} lg={8}>
        
        {/* Bannière publicitaire */}
        <Paper
          elevation={5}
          style={{
            padding: "50px",
            marginBottom: "30px",
            textAlign: "center",
            position: "relative",
            backgroundSize: "cover",
            backgroundPosition: "center",
            color: "#fff",
            borderRadius: "10px",
          }}
        >
          <div style={{ backgroundColor: "rgba(0,0,0,0.5)", padding: "40px", borderRadius: "10px" }}>
            <Typography variant="h3" gutterBottom>
              Bienvenue sur le Portail de l’Emploi DRHCOM
            </Typography>
            <Typography variant="h6" gutterBottom>
              Expertise et innovation au service des Ressources Humaines et de la Communication Visuelle
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              style={{ marginTop: "20px" }}
              onClick={() => history.push("/home")} // ✅ push au lieu de navigate
            >
              Voir les offres d’emploi
            </Button>
          </div>
        </Paper>

        {/* Sections */}
        <Section icon={<BusinessIcon color="primary" />} title="Présentation">
          DRHCOM est un cabinet de conseil en ressources humaines spécialisé dans
          la gestion des talents, la formation et la communication visuelle.
          Nous accompagnons les entreprises dans l’amélioration de leur performance,
          compétitivité et image.
        </Section>

        <Section icon={<WorkIcon color="primary" />} title="Nos services">
          • Gestion des ressources humaines <br />
          • Formation et développement des compétences <br />
          • Recrutement et sélection <br />
          • Conseil en organisation et en gestion <br />
          • Communication visuelle
        </Section>

        <Section icon={<StarIcon color="primary" />} title="Nos valeurs">
          • Expertise <br />
          • Innovation <br />
          • Engagement <br />
          • Qualité
        </Section>

        <Section icon={<GroupIcon color="primary" />} title="Notre équipe">
  <Grid container spacing={2} alignItems="center">
    <Grid item xs={12} sm={4} md={3}>
      <img
        src={require("../assets/banner.jpg")} // chemin relatif vers ton image
        alt="Nom du membre"
        style={{ width: "250%", borderRadius: "10px" }}
      />
    </Grid>
    <Grid item xs={22} sm={16} md={18}>
      <Typography variant="body1">
         Une équipe de consultants expérimentés, d’experts RH, de formateurs et
          de coachs professionnels engagés pour la réussite de nos clients.
      </Typography>
    </Grid>
  </Grid>
</Section>


        <Section icon={<ContactMailIcon color="primary" />} title="Contactez-nous">
          📍 Baco-Djicoroni ACI Golf, Rue 804, près du siège de Bara Musso <br />
          📞 +223 66 37 31 77 / 76 90 73 96 <br />
          ✉️ dynamicrhcom@yahoo.com <br />
          🌐 www.drhcom-ml.com
        </Section>

        {/* Footer */}
        <Footer />
      </Grid>
    </Grid>
  );
};

// Page d'erreur
export const ErrorPage = () => (
  <Grid container alignItems="center" justify="center" style={{ minHeight: "93vh" }}>
    <Paper elevation={3} style={{ padding: "40px", textAlign: "center" }}>
      <Typography variant="h2">404</Typography>
      <Typography variant="h6" color="textSecondary">
        Page introuvable
      </Typography>
    </Paper>
  </Grid>
);

export default Welcome;
