import React from 'react';
import { useFooterStyles } from "./footer.style";
import useLocalization from "../../../../../assets/lang";

const FooterComponent = () => {
    const classes = useFooterStyles();
    const translate = useLocalization();
  const date = new Date().getFullYear();
  return (
    <div className={classes.footer}>
      <div className="row m-0">
        <div className="col-12">
          {translate("rights")} { date }.
        </div>
      </div>
    </div>
  );
};

export default FooterComponent;
