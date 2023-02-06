import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import List from "../../components/List";
import Overlay from "../../components/Overlay";
import notFund from "../../assets/not_fund.png";

import { FiUser, FiLogOut } from "react-icons/fi";
import { FaMoneyBillWave } from "react-icons/fa";
import "./home.css";
function Home() {
  const [showOverlay, setShowOverlay] = useState(false);
  const [showNotFund, setShowNotFund] = useState(false);
  const [data, setData] = useState([]);

  const formRef = useRef([]);
  const navigate = useNavigate();

  // Ação para listar os pagamentos via api
  /* useEffect(() => {
    fetch("http://localhost:3333/payment")
      .then((response) => response.json())
      .then((data) => {
        setShowNotFund(data.message.length === 0);
        setData(data.message);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [formRef.current]); */

  const handleSinOut = () => {
    navigate("/");
  };
  return (
    <div className="homeContainer">
      <header className="homeHeader">
        <h3>Home</h3>
        <div className="homeInfosHeader">
          <h3>Bem vindo Pablo</h3>
          <FiUser
            size={26}
            style={{
              background: "#5900d5",
              color: "#f8f9fa",
              borderRadius: 50,
            }}
          />
          <abbr title="😢">
            <button className="sair" onClick={handleSinOut}>
              <FiLogOut size={20} />
            </button>
          </abbr>
        </div>
      </header>
      <section className="homeInfosGeral">
        <div className="homeSaldoConta">
          <div className="valor">
            <h1>Saldo em Conta</h1>
            {data && <p>{data.valordopagamento}</p>}
            <button onClick={() => setShowOverlay(true)} className="homeMovi">
              <FaMoneyBillWave style={{ color: "#f8f9fa" }} size={30} />
            </button>
          </div>
        </div>
      </section>
      <section className="homeList">
        <h1>Movimentações</h1>
        {showNotFund && (
          <>
            <div className="notFund">
              <p>Você não possui movimentações</p>
              <img src={notFund} alt="erro" />
            </div>
          </>
        )}
        {/* Listando os pagamentos vindo da Api */}
        {/* {data.map((d, index) => (
          <List
            key={index}
            title={d.title}
            valor={d.valordopagamento}
            createdDete={d.paymentdate}
            status={d.status}
          />
        ))} */}
      </section>
      {showOverlay && (
        <Overlay formRef={formRef} setShowOverlay={setShowOverlay} />
      )}
    </div>
  );
}

export default Home;
