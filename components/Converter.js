import React, { useState, useEffect } from 'react';

function Converter() {
  const [km, setKm] = useState(0);

  const handleChange = (e) => {
    setKm(e.target.value);
  };
  function convert(val) {
    return val * 1000;
  }
  return (
    <div>
      <h1>Convert KM to Meters App</h1>
      <input type="text" value={km} onChange={handleChange} />
      <h2>
        {km}km is {convert(km)} meters
      </h2>
    </div>
  );
}

export default Converter;
