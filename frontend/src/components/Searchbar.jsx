import React from "react";
import { useTranslation } from "react-i18next";

export default function Searchbar() {
  const { t } = useTranslation();
  return (
    <>
      <div className="container d-flex justify-content-start align-items-center mb-2 mt-4">
        <form className="d-flex w-100 " role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder={t("searchBar.placeholder")}
            aria-label="Search"
          />
          <button className="btn btn-outline-primary" type="submit">
            {t("searchBar.button")}
          </button>
        </form>
      </div>
    </>
  );
}
