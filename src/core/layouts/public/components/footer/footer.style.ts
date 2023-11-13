import { createUseStyles } from "react-jss";

const styles = {
  footer: {
    position: "fixed",
    width: "100%",
    padding: "50px",
    display: "flex", // Use flex container
    justifyContent: "center", // Center content horizontally
    alignItems: "center",
    backgroundColor: "#edeef1",
    bottom: 0,
    zIndex: 100,
    left: 0,
  },
};

export const useFooterStyles = createUseStyles(styles);
