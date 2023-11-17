import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { ILanguages, IState } from "../../../../../store/store";
import { generateGuid } from "../../../../helpers/generate-guid";
import { useHeaderStyles } from "./header.style";
import { ILang } from "../../../../../assets/lang/lang";
import { environment } from "../../../../configs/app.config";
import { useCallback, useEffect, useMemo } from "react";
import { setLocale } from "../../../../../store/store.reducer";
import "./header.style";


const HeaderComponent = () => {
  const classes = useHeaderStyles();
  const dispatch = useDispatch();
  const languages = useSelector((state: IState) => state.languages);
  const locale = useSelector((state: IState) => state.locale);
  const currentLang = useMemo(() => {
    return (
      (localStorage.getItem(
        `${environment.applicationName}-locale`
      ) as ILang) || "az"
    );
  }, [locale]);

  useEffect(() => {
    dispatch(setLocale(currentLang));
  }, [currentLang, dispatch]);

  const changeLanguage = useCallback(
    (e: React.ChangeEvent) => {
      dispatch(setLocale(e.target.value));
    },
    [dispatch]
  );
  return (
    <div className={classes.header}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <select
              name="select"
              id="select"
              onChange={changeLanguage}
              value={currentLang}
            >
              {languages.map((item: ILanguages) => (
                <option value={item.key} key={generateGuid()}>
                  {item.value}
                </option>
              ))}
            </select>
          </div>
          <div className="col-12"></div>
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
