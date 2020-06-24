import React from "react";
import "./App.css";

function App() {
  const date = new Date();
  const pets = ["Cat", "Dog", "Bird"];
  return (
    <>
      <h1>Localization Demo</h1>

      <p>
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat">
          MDN
        </a>
      </p>

      <h2>Date &amp; Time</h2>
      <p>
        <a href="https://devhints.io/wip/intl-datetime">Helpful cheat sheet</a>{" "}
        |{" "}
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat">
          MDN
        </a>
      </p>

      <p>US format: {new Intl.DateTimeFormat("en-US").format(date)}</p>
      <p>UK format: {new Intl.DateTimeFormat("en-GB").format(date)}</p>

      <p>
        Buddhist format:{" "}
        {new Intl.DateTimeFormat("en-US-u-ca-buddhist").format(date)}
      </p>

      <p>
        Custom format:{" "}
        {new Intl.DateTimeFormat("en-GB", {
          weekday: "long",
          era: "long",
          year: "numeric",
          month: "short",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }).format(date)}
      </p>

      <h2>List Formatting</h2>

      <p>
        English list:{" "}
        {new Intl.ListFormat("en", {
          style: "long",
          type: "conjunction",
        }).format(pets)}
      </p>
      <p>
        German list:{" "}
        {new Intl.ListFormat("de", {
          style: "long",
          type: "conjunction",
        }).format(pets)}
      </p>

      <h2>Numbers</h2>

      <p>
        Euros:{" "}
        {new Intl.NumberFormat("de-DE", {
          style: "currency",
          currency: "EUR",
        }).format(123.456)}
      </p>
      <p>
        Yen (doesn't use a minor unit):{" "}
        {new Intl.NumberFormat("ja-JP", {
          style: "currency",
          currency: "JPY",
        }).format(123.456)}
      </p>
      <p>
        Limit to three significant digits:{" "}
        {new Intl.NumberFormat("en-IN", { maximumSignificantDigits: 3 }).format(
          123.456
        )}
      </p>

      <h2>Relative Times</h2>

      <p>
        One minute ago:{" "}
        {new Intl.RelativeTimeFormat("en", { numeric: "auto" }).format(
          -1,
          "minute"
        )}
      </p>
    </>
  );
}

export default App;
