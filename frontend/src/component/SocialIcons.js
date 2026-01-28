import { IconButton } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";

// Icône TikTok officielle via SVG
const TikTokIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M21 8.5a6.5 6.5 0 0 1-4.2-1.5v8.7a5.7 5.7 0 1 1-5.7-5.7c.4 0 .8 0 1.2.1v3.1a2.6 2.6 0 1 0 1.7 2.5V2h3a6.5 6.5 0 0 0 4 4v2.5z" />
  </svg>
);

const iconStyle = {
  transition: "transform 0.3s ease",
};

const hoverStyle = {
  transform: "scale(1.2)",
};

const SocialIcons = () => {
  return (
    <>
      <IconButton
        component="a"
        href="https://www.facebook.com/DRHCOM"
        target="_blank"
        style={{ color: "#1877F2" }}
        onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
        onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        <FacebookIcon style={iconStyle} />
      </IconButton>

      <IconButton
        component="a"
        href="https://www.linkedin.com/company/DRHCOM"
        target="_blank"
        style={{ color: "#0A66C2" }}
        onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
        onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        <LinkedInIcon />
      </IconButton>

      <IconButton
        component="a"
        href="https://www.instagram.com/DRHCOM"
        target="_blank"
        style={{ color: "#E1306C" }}
        onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
        onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        <InstagramIcon />
      </IconButton>

      <IconButton
        component="a"
        href="https://twitter.com/DRHCOM"
        target="_blank"
        style={{ color: "#1DA1F2" }}
        onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
        onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        <TwitterIcon />
      </IconButton>

      <IconButton
        component="a"
        href="https://www.tiktok.com/@DRHCOM"
        target="_blank"
        style={{ color: "#000" }}
        onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
        onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        <TikTokIcon />
      </IconButton>
    </>
  );
};

export default SocialIcons;
