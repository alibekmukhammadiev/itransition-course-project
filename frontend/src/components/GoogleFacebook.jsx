import React from "react";
import { useTranslation } from "react-i18next";

// react icons
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";

export default function GoogleFacebook({ type }) {
  const { t } = useTranslation();
  console.log(type);
  return (
    <>
      <div className="d-flex align-items-center my-2">
        <hr className="flex-grow-1" />
        <span className="px-2 text-muted">
          {type === "login" ? t("login.alter.login") : t("login.alter.signup")}
        </span>
        <hr className="flex-grow-1" />
      </div>
      <div className="d-flex flex-column flex-sm-row justify-content-between gap-3">
        <button
          type="button"
          className="btn btn-outline-secondary d-flex justify-content-center  align-items-center flex-grow-1  gap-2"
        >
          <FaGoogle />
          Google
        </button>

        <button
          type="button"
          className="btn btn-outline-secondary d-flex justify-content-center  align-items-center flex-grow-1 gap-2 "
        >
          <FaFacebookF />
          Facebook
        </button>
      </div>
    </>
  );
}
