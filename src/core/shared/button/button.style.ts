import { createUseStyles } from "react-jss";

const styles = {
  danger: {
    padding: "15px 5px",
    backgroundColor: "#3B71CA",
    borderRadius:"4px",
    border:"none"
  },
};
export const useButtonStyles = createUseStyles(styles);
