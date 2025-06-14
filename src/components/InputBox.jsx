import React, { useId } from "react";

export default function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectedCurrency = "",
  amountDisabled = false,
  currencyDisabled = false,
  className = "",
}) {
  const id = useId();

  return (
    <div
      className={`
        bg-gray-900 bg-opacity-60 backdrop-blur-sm
        p-5 rounded-2xl shadow-lg
        flex items-start gap-6
        ${className}
      `}
    >
      
      <div className="flex-1">
        <label
          htmlFor={id}
          className="block text-sm font-medium text-gray-300 mb-1"
        >
          {label}
        </label>
        <input
          id={id}
          type="number"
          className="
            w-full bg-gray-800 bg-opacity-50
            placeholder-gray-500 text-white
            py-2 px-4 rounded-xl
            focus:outline-none focus:ring-2 focus:ring-blue-400
            shadow-inner
          "
          placeholder="0.00"
          disabled={amountDisabled}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>

      
      <div className="flex-1 text-right">
        <label className="block text-sm font-medium text-gray-300 mb-1">
          CURRENCY
        </label>
        <select
          className="
            w-full bg-gray-800 bg-opacity-50
            text-white py-2 px-4 rounded-xl
            focus:outline-none focus:ring-2 focus:ring-blue-400
            shadow-inner cursor-pointer
          "
          value={selectedCurrency}
          disabled={currencyDisabled}
          onChange={(e) =>
            onCurrencyChange && onCurrencyChange(e.target.value)
          }
        >
          {currencyOptions.map((cur) => (
            <option key={cur} value={cur} className="bg-gray-800">
              {cur.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
