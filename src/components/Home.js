import React, { useState, useEffect } from "react";

export default function Home() {
  const API_KEY = "52b681c1faa85fcaef14b9a4";
  let url = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/USD`;
  // let url = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/USD`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCurrencyOptions([
          data.base_code,
          ...Object.keys(data.conversion_rates),
        ]);
        console.log(data.conversion_rates);
      });
    // eslint-disable-next-line
  }, []);

  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [fromCurrency, setFromCurrency] = useState("INR");
  const [fromValue, setFromValue] = useState("");
  const [toCurrency, setToCurrency] = useState("USD");
  const [toValue, setToValue] = useState("");
  const [conversionRate, setConversionRate] = useState("");
  const from = document.getElementById("from_input");
  const to = document.getElementById("to_input");

  const calculateForward = (amount, rate) => {
    fromValue !== ""
      ? setToValue(Number(parseFloat(amount * rate).toFixed(3)))
      : setToValue("");
  };

  const calculateBackward = (amount, rate) => {
    toValue !== ""
      ? setFromValue(Number(parseFloat(amount / rate).toFixed(3)))
      : setFromValue("");
  };

  const getConversionRate = (base, target) => {
    fetch(
      `https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${base}/${target}`
    )
      .then((res) => res.json())
      .then((data) => {
        setConversionRate(Number(parseFloat(data.conversion_rate)));
        console.log(conversionRate);
      });
  };

  useEffect(() => {
    getConversionRate(fromCurrency, toCurrency);
  }, [fromCurrency, toCurrency, conversionRate]);

  useEffect(() => {
    if ((from === document.activeElement)) {
      calculateForward(fromValue, conversionRate);
      // eslint-disable-next-line
    }
  }, [conversionRate, fromValue]);
  
  useEffect(() => {
    if ((to === document.activeElement)) {
      calculateBackward(toValue, conversionRate);
      // eslint-disable-next-line
    }
  }, [conversionRate, toValue]);

  const handleFromCurrency = (event) => {
    setFromCurrency(event.target.value);
  };

  const handleToCurrency = (event) => {
    setToCurrency(event.target.value);
  };

  const handleFromValue = (event) => {
    setFromValue(event.target.value);
  };

  const handleToValue = (event) => {
    setToValue(event.target.value);
  };

  const clear = () => {
    setFromValue("");
    setToValue("");
  };

  const removeButton = (props) => {
    return (
      <button
        style={{ opacity: toValue === "" ? "0" : "100" }}
        type="button"
        className="btn btn-outline-dark"
        onClick={props}
      >
        <i className="fas fa-eraser"></i>
      </button>
    );
  };

  return (
    <>
      <div className="container">
        <div className="input-group mb-3 mt-4">
          <div className="row g-2">
            <div className="col-md">
              <div className="form-floating">
                <select
                  value={fromCurrency}
                  onChange={handleFromCurrency}
                  className="form-select"
                  id="floatingSelectGrid"
                  aria-label="Floating label select example"
                >
                  {currencyOptions.map((currency, index) => (
                    <option key={index}>{currency}</option>
                  ))}
                </select>
                <label htmlFor="floatingSelectGrid">From</label>
              </div>
            </div>
          </div>
          <input
            value={fromValue}
            onChange={handleFromValue}
            id="from_input"
            type="number"
            className="form-control col-sm-4"
            aria-label="Text input with dropdown button"
            placeholder="0.00"
          />
          {removeButton(clear)}
        </div>
        <div className="input-group mb-3 mt-4">
          <div className="row g-2">
            <div className="col-md">
              <div className="form-floating">
                <select
                  value={toCurrency}
                  onChange={handleToCurrency}
                  className="form-select"
                  id="floatingSelectGrid"
                  aria-label="Floating label select example"
                >
                  {currencyOptions.map((currency, index) => (
                    <option key={index}>{currency}</option>
                  ))}
                </select>
                <label htmlFor="floatingSelectGrid">To</label>
              </div>
            </div>
          </div>
          <input
            value={toValue}
            onChange={handleToValue}
            id="to_input"
            type="number"
            className="form-control col-sm-4"
            aria-label="Text input with dropdown button"
            placeholder="0.00"
          />
          {removeButton(clear)}
        </div>
        <a
          href="https://www.easymarkets.com/int/learn-centre/discover-trading/currency-acronyms-and-abbreviations/"
          target="_blank"
          noreferrer="true"
          rel="noreferrer"
        >
          <div className="d-grid gap-2">
            <button className="btn btn-primary" type="button">
              Check Acronym for Your Currency
            </button>
          </div>
        </a>
      </div>
    </>
  );
}
