// pages/DemographicInfo.jsx
import React from "react";

function DemographicInfo({ handleChange, formData }) {
  return (
    <section>
      <h3 className="text-xl font-semibold mb-4">Demographic Information</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="date"
          name="dateOfBirth"
          placeholder="Date of Birth"
          onChange={handleChange}
          className="input-field"
        />
        <input
          type="text"
          name="height"
          placeholder="Height "
          onChange={handleChange}
          className="input-field"
        />
        <input
          type="text"
          name="weight"
          placeholder="Weight (lbs)"
          onChange={handleChange}
          className="input-field"
        />
        <select name="sex" onChange={handleChange} className="input-field">
          <option value="">Sex</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>
    </section>
  );
}

export default DemographicInfo;
