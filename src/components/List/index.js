import moment from "moment";
import React, { useEffect, useRef } from "react";
import { FiArrowDownCircle, FiArrowUpCircle, FiCalendar } from "react-icons/fi";
import { TbNotes } from "react-icons/tb";

function List({ valor, title, createdDete, status }) {
  const checkStatus = () => {
    if (status === true) {
      return (
        <>
          <FiArrowDownCircle size={25} color="#97f784" />
          <span className="entrada">R${valor}</span>
        </>
      );
    } else
      return (
        <>
          <FiArrowUpCircle size={25} color="#fb6e6e" />
          <span className="saida" color="#fb6e6e">
            R${valor}
          </span>
        </>
      );
  };

  useEffect(() => {
    checkStatus();
  }, []);

  return (
    <div className="listItem">
      <div className="movItem">{checkStatus()}</div>
      <div className="descriptionIcon">
        <TbNotes />
        <p>{title}</p>
      </div>
      <div className="dataIcon">
        <FiCalendar />
        <span>{moment(createdDete).format("DD/MM/YYYY")}</span>
      </div>
    </div>
  );
}

export default List;
