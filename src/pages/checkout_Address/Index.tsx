// CheckoutPage.tsx
import React, { useState } from 'react';
import './style.css';
import Navbar from "../../components/navbar";
import { Link } from 'react-router-dom';

export default function CheckoutPage() {

  const [street, setStreet] = useState('');
  const [number, setNumber] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [city, setCity] = useState('');
  const [zip, setZip] = useState('');
  const [shippingMethod, setShippingMethod] = useState('');

  const handleSubmit = () => {
    alert('Processando dados de endereço!');
  };

  return (
    <div>
      <Navbar />
      <div className="main-content">
        <div className="checkout-container">
          <div className="left-section">
            <div className="address-section">
              <h2>Endereço</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Rua"
                    value={street}
                    onChange={(e) => setStreet(e.target.value)}
                    required
                    className="input-large"
                  />
                  <input
                    type="text"
                    placeholder="Nº"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    required
                    className="input-small"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Bairro"
                    value={neighborhood}
                    onChange={(e) => setNeighborhood(e.target.value)}
                    required
                    className="input-large"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Cidade"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    required
                    className="input-large"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="CEP"
                    value={zip}
                    onChange={(e) => setZip(e.target.value)}
                    required
                    className="input-large"
                  />
                </div>
              </form>
              <h2>Envio</h2>
              <div className="form-group shipping-options">
                <div
                  className={`shipping-option ${shippingMethod === 'fedex' ? 'selected' : ''}`}
                  onClick={() => setShippingMethod('fedex')}
                >
                  FedEx - 4 a 5 Dias Úteis
                </div>
                <div
                  className={`shipping-option ${shippingMethod === 'correios' ? 'selected' : ''}`}
                  onClick={() => setShippingMethod('correios')}
                >
                  Correios Express - 2 a 3 Dias Úteis
                </div>
                <div
                  className={`shipping-option ${shippingMethod === 'pickup' ? 'selected' : ''}`}
                  onClick={() => setShippingMethod('pickup')}
                >
                  Receber na Faculdade - 1 Dia Útil
                </div>
              </div>
            </div>
          </div>
          <div className="right-section">
            <div className="summary-section">
              <h2>Resumo</h2>
              <div className="summary-details">
                <div className="summary-item">
                  <span>Compra</span>
                  <span>R$190,00</span>
                </div>
                <div className="summary-item">
                  <span>Taxa de Envio</span>
                  <span>R$0,00</span>
                </div>
                <div className="summary-total">
                  <span>VALOR TOTAL</span>
                  <span>R$190,00</span>
                </div>
              </div>
            </div>
            <div className="discount-section">
              <h2>Código de Desconto</h2>
              <div className="form-group">
                <input type="text" placeholder="Código de Desconto" />
              </div>
            </div>
            <button type="submit" onClick={handleSubmit}><Link className="button-submit" to="/checkoutpayment">Continuar</Link></button>
          </div>
        </div>
      </div>
    </div>
  );
};
