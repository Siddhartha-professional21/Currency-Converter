import React, { useState } from "react";
import "./App.css";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import InputBox from "./components/InputBox";

function App() {
  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const rates = useCurrencyInfo(from);
  const options = Object.keys(rates);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  const convert = (e) => {
    e.preventDefault();
    if (rates[to]) {
      setConvertedAmount((amount * rates[to]).toFixed(2));
    }
  };

  return (
    <div
      className="
        min-h-screen flex items-center justify-center 
        bg-gradient-to-br from-purple-900 via-indigo-800 to-black 
        px-6
      "
    >
      <form
        onSubmit={convert}
        className="
          w-full max-w-md 
          bg-gray-900 bg-opacity-50 backdrop-blur-lg 
          border border-gray-700 
          rounded-2xl p-6 
          shadow-2xl
        "
      >
        <h1 className="text-2xl font-bold text-white text-center mb-6">
          CURRENCY CONVERTER
        </h1>

        <InputBox
          label="FROM"
          amount={amount}
          currencyOptions={options}
          selectedCurrency={from}
          onAmountChange={setAmount}
          onCurrencyChange={setFrom}
          className="mb-5"
        />

        <div className="flex justify-center my-5">
          <button
            type="button"
            onClick={swap}
            className="
              p-3 bg-transparent 
              border-2 border-blue-400 
              rounded-full 
              hover:bg-blue-500 hover:bg-opacity-20 
              transition 
              shadow-lg
            "
          >
            
            🔄
          </button>
        </div>

        <InputBox
          label="TO"
          amount={convertedAmount}
          currencyOptions={options}
          selectedCurrency={to}
          onCurrencyChange={setTo}
          className="mb-6"
        />

        <button
          type="submit"
          className="
            w-full py-3 
            bg-blue-500 hover:bg-blue-400 
            text-white font-semibold 
            rounded-2xl 
            transition-shadow 
            shadow-xl hover:shadow-2xl
          "
        >
          Convert {from.toUpperCase()} → {to.toUpperCase()}
        </button>
      </form>
    </div>
  );
}

export default App;
