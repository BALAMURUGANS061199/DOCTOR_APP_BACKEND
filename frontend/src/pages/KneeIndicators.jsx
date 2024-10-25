// pages/KneeIndicators.jsx
import React from "react";

function KneeIndicators({ handleChange, formData }) {
  return (
    <section>
      <h3 className="text-xl font-semibold mb-4">Objective Knee Indicators</h3>
      <div className="grid grid-cols-1 gap-4">
        <input
          type="text"
          name="alignment"
          placeholder="Alignment"
          onChange={handleChange}
          className="input-field"
        />
        <select
          name="medialLateralInstability"
          onChange={handleChange}
          className="input-field"
        >
          <option value="">Medial / Lateral Instability</option>
          <option value="None">None (15 pts)</option>
          <option value="Little">Little &lt; 5mm (10 pts)</option>
          <option value="Moderate">Moderate (5 mm) (5 pts)</option>
          <option value="Severe">Severe &gt; 5mm (0 pts)</option>
        </select>
      </div>
    </section>
  );
}

export default KneeIndicators;
