import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faHouse } from "@fortawesome/free-solid-svg-icons";

export default function Breadcrumbs({ items }) {
  return (
    <div className="auxzn-breadcrumb-wrapper">
      <div className="container">
        <nav className="auxzn-breadcrumb">
          {items.map((item, index) => (
            <span key={index} className="auxzn-breadcrumb-item">
              
              {/* HOME ICON ONLY FOR FIRST */}
              {index === 0 && (
                <FontAwesomeIcon
                  icon={faHouse}
                  className="auxzn-breadcrumb-home"
                />
              )}

              {item.link ? (
                <Link to={item.link}>{item.label}</Link>
              ) : (
                <span className="active">{item.label}</span>
              )}

              {index !== items.length - 1 && (
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="auxzn-breadcrumb-separator"
                />
              )}
            </span>
          ))}
        </nav>
      </div>
    </div>
  );
}