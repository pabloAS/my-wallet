import React, { useState } from "react";
import { FaMoneyBillWave } from "react-icons/fa";
import Loading from "../Loading";

function Overlay({ setShowOverlay, formRef }) {
  const [formValues, setFormValues] = useState({});
  const [showLoading, setShowLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const isChecked = type === "checkbox";
    const dataValue = formValues[name] || {};
    if (isChecked) {
      if (value === "depositar") {
        dataValue[value] = checked === true;
      }
      if (value === "pagar") {
        dataValue[value] = checked === false;
      }
    }
    const newValue = isChecked ? dataValue : value;
    setFormValues({ ...formValues, [name]: newValue });
  };

  // Ação para criar um pagamento
  /*  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log(data);
    try {
      fetch("http://localhost:3333/payment", {
        method: "post",
        body: JSON.stringify(data),
      })
        .then((r) => r.json())
        .then((response) => {
          setShowLoading(true);
          setTimeout(() => {
            setShowOverlay(false);
          }, 700);
        })
        .catch((error) => {
          alert(error.message);
        });
    } catch (e) {
      console.error(e.message);
    }
  }; */

  return (
    <section className="overlay">
      <form
        className="formOverlay"
        ref={formRef} /*  onSubmit={handleSubmit} */
      >
        <h2>Escolha uma opção</h2>
        <div className="formOpt">
          <input
            type="checkbox"
            name="status"
            value={true}
            checked={formValues.value || null}
            onChange={handleChange}
          />
          <label>Depositar</label>
          <input
            type="checkbox"
            name="status"
            value={false}
            checked={formValues.value || null}
            onChange={handleChange}
          />
          <label>Pagar</label>
        </div>
        <div className="formOpt2">
          <input
            type="text"
            name="title"
            placeholder="Digite um titulo..."
            className="description"
            value={formValues.title || ""}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="valordopagamento"
            placeholder="R$"
            className="valorDinheiro"
            value={formValues.valordopagamento || ""}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="formOverlayBtn">
          <FaMoneyBillWave style={{ color: "#f8f9fa" }} size={30} />
        </button>
      </form>
      {showLoading && <Loading />}
      <button onClick={() => setShowOverlay(false)}>sair</button>
    </section>
  );
}

export default Overlay;
