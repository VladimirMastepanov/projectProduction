import React from "react";
import { classNames } from "06_shared/lib/classNames/classNames";
import "./Loader.scss";

interface LoaderProps {
  className?: string;
}

export const Loader = ({ className = "" }: LoaderProps) => {
  return (
    <div className={classNames("lds-ellipsis", {}, [className])}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
