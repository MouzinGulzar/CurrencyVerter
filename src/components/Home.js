import React, { useState, useEffect } from "react";

export default function Home() {
  const API_KEY = "c719d132abc4d5414d13fd30";
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
      });
  }, []);

  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [fromCurrency, setFromCurrency] = useState("INR");
  const [fromValue, setFromValue] = useState("");
  const [toCurrency, setToCurrency] = useState("USD");
  const [toValue, setToValue] = useState("");
  const [conversionRate, setConversionRate] = useState(0.01345);

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
        setConversionRate(Number(parseFloat(data.conversion_rate).toFixed(3)));
        console.log(Number(parseFloat(data.conversion_rate).toFixed(3)));
      });
  };

  useEffect(() => {
    getConversionRate(fromCurrency, toCurrency);
  }, [fromCurrency, toCurrency, conversionRate]);

  useEffect(() => {
    calculateForward(fromValue, conversionRate);
  }, [fromCurrency, toCurrency, fromValue, conversionRate]);

  useEffect(() => {
    calculateBackward(toValue, conversionRate);
  }, [fromCurrency, toCurrency, toValue, conversionRate]);

  const handleFromCurrency = (event) => {
    setFromCurrency(event.target.value);
  };

  const handleToCurrency = (event) => {
    setToCurrency(event.target.value);
  };

  const handleFromValue = (event) => {
    // calculateForward(fromValue, conversionRate);
    setFromValue(event.target.value);
  };

  const handleToValue = (event) => {
    // calculateBackward(toValue, conversionRate);
    setToValue(event.target.value);
  };

  const fromRemove = () => {
    setFromValue();
  };

  const toRemove = () => {
    setToValue();
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
            type="number"
            className="form-control col-sm-4"
            aria-label="Text input with dropdown button"
            placeholder="0.00"
          />
          {removeButton(fromRemove)}
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
            type="number"
            className="form-control col-sm-4"
            aria-label="Text input with dropdown button"
            placeholder="0.00"
          />
          {removeButton(toRemove)}
        </div>
          <a
            href="https://www.easymarkets.com/int/learn-centre/discover-trading/currency-acronyms-and-abbreviations/"
            target="_blank"
            noreferrer
          >
        <div class="d-grid gap-2">
          <button class="btn btn-primary" type="button">
            Check Acronym for Your Currency
          </button>
        </div>
          </a>
      </div>
    </>
  );
}
