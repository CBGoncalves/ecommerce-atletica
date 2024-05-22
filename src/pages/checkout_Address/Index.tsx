import React, { useState } from 'react';
import './style.css';

const CheckoutPage: React.FC = () => {
  const [street, setStreet] = useState('');
  const [number, setNumber] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [city, setCity] = useState('');
  const [zip, setZip] = useState('');
  const [shippingMethod, setShippingMethod] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Processing Data');
  };

  return (
    <div className="checkout-container">
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
          <h2>Envio</h2>
          <div className={`form-group shipping-option ${shippingMethod === 'fedex' ? 'selected' : ''}`}>
            <label>
              <input
                type="radio"
                value="fedex"
                checked={shippingMethod === 'fedex'}
                onChange={(e) => setShippingMethod(e.target.value)}
              />
              FedEx - 4 a 5 Dias Úteis
            </label>
          </div>
          <div className={`form-group shipping-option ${shippingMethod === 'correios' ? 'selected' : ''}`}>
            <label>
              <input
                type="radio"
                value="correios"
                checked={shippingMethod === 'correios'}
                onChange={(e) => setShippingMethod(e.target.value)}
              />
              Correios Express - 2 a 3 Dias Úteis
            </label>
          </div>
          <div className={`form-group shipping-option ${shippingMethod === 'pickup' ? 'selected' : ''}`}>
            <label>
              <input
                type="radio"
                value="pickup"
                checked={shippingMethod === 'pickup'}
                onChange={(e) => setShippingMethod(e.target.value)}
              />
              Receber na Faculdade - 1 Dia Útil
            </label>
          </div>
        </form>
      </div>
      <div className="summary-section">
        <h2>Resumo</h2>
        <div className="summary-details">
          <p>Valor Total da Sua compra incluindo Taxa de Envio</p>
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
        <h2>Código de Desconto</h2>
        <div className="form-group">
          <input type="text" placeholder="Código de Desconto" />
        </div>
        <button type="submit" onClick={handleSubmit}>Finalizar Compra</button>
      </div>
    </div>
  );
};

export default CheckoutPage;
