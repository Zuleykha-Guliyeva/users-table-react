import React from "react";
import useLocalization from "../../assets/lang";
function HomeComponent() {
  const translate = useLocalization();
  return <div>{translate("home")}</div>;
}

export default HomeComponent;
