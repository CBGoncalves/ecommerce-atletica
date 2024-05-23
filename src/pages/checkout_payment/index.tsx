import React, { useState } from 'react';
import './style.css';
import Navbar from "../../components/navbar";

export default function CheckoutPagePayment() {
    const [paymentMethod, setPaymentMethod] = useState<'card' | 'boleto' | 'pix'>('card');

    const renderMonthOptions = () => {
        let options = [];
        for (let i = 1; i <= 12; i++) {
            options.push(<option key={i} value={i}>{i}</option>);
        }
        return options;
    };

    const renderYearOptions = () => {
        let options = [];
        for (let i = 2024; i <= 2034; i++) {
            options.push(<option key={i} value={i}>{i}</option>);
        }
        return options;
    };

    return (
        <div>
            <Navbar />
            <div className="main-content">
                <div className="checkout-container">
                    <div className="left-section">
                        <div className="payment-section">
                            <h2>Pagamento</h2>
                            {paymentMethod === 'card' && (
                                <div className="payment-form">
                                    <div className="form-group">
                                        <input type="text" placeholder="Número do Cartão" required />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" placeholder="Nome Impresso no Cartão" required />
                                    </div>
                                    <div className="form-group form-row">
                                        <select className="input-small">
                                            <option value="" disabled selected>
                                                Mês
                                            </option>
                                            {renderMonthOptions()}
                                        </select>
                                        <select className="input-small">
                                            <option value="" disabled selected>
                                                Ano
                                            </option>
                                            {renderYearOptions()}
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" placeholder="Código de Segurança" required />
                                    </div>
                                    <div className="form-group">
                                        <select>
                                            <option>R$190,00 à Vista</option>
                                            <option>R$97,00 em 2x</option>
                                            <option>R$68,00 em 3x</option>
                                            <option>R$50,00 em 4x</option>
                                        </select>
                                    </div>
                                </div>
                            )}
                            {paymentMethod === 'pix' && (
                                <div className="payment-form">
                                    <p>Use o Pix Copia e Cola para realizar o pagamento. Seu pagamento será confirmado automaticamente.</p>
                                    <div className="qrcode-placeholder">
                                        <img src="/assets/qrcode_gerado_pelo_bing.png" alt="QR Code Pix" />
                                    </div>
                                </div>
                            )}
                            {paymentMethod === 'boleto' && (
                                <div className="payment-form">
                                    <div className="form-group">
                                        <input type="text" placeholder="CPF" required />
                                    </div>
                                    <p className="boleto-info">O boleto será enviado para o e-mail cadastrado no seu usuário.</p>
                                </div>
                            )}
                            <div className="payment-methods">
                                <button
                                    className={`payment-option ${paymentMethod === 'card' ? 'selected' : ''}`}
                                    onClick={() => setPaymentMethod('card')}
                                >
                                    Cartão de Crédito
                                </button>
                                <button
                                    className={`payment-option ${paymentMethod === 'boleto' ? 'selected' : ''}`}
                                    onClick={() => setPaymentMethod('boleto')}
                                >
                                    Boleto
                                </button>
                                <button
                                    className={`payment-option ${paymentMethod === 'pix' ? 'selected' : ''}`}
                                    onClick={() => setPaymentMethod('pix')}
                                >
                                    Pix
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="right-section">
                        <div className="summary-section">
                            <h2>Resumo</h2>
                            <p className="light-gray-text">Valor Total da Sua compra incluindo Taxa de Envio</p>
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
                        <div className="discount-section">
                            <h2>Código de Desconto</h2>
                            <div className="form-group">
                                <input type="text" placeholder="Código de Desconto" />
                            </div>
                        </div>
                        <button type="submit">Finalizar Compra</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
