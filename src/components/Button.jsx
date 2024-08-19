import React from "react";
import { Link } from "react-router-dom";

const Button = ({ children, to, type }) => {
  const base =
    "rounded-md bg-slate-50 px-4 py-3 text-lg font-semibold text-slate-900 shadow-sm hover:bg-slate-50  ";

  const styles = {
    primary: base,
    small:
      "rounded-md bg-slate-50 px-6 py-1.5 text-lg font-semibold text-slate-900 shadow-sm hover:bg-slate-50",

    secondary: "text-lg font-semibold underline  text-slate-50",
    thin: "text-sm font-semibold underline text-slate-50",
  };

  if (to) {
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  }

  return <button className={styles[type]}>{children}</button>;
};

export default Button;
