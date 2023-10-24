import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "../styles/Form.css";

function EducationSupport() {
  const [formData, setFormData] = useState({
    applicantName: "",
    fatherHusbandName: "",
    nationality: "",
    selectedIdentity: "Voter ID",
    address: "",
    selectedConstituency: "",
    mobile: "",
    selectedGender: "",
    dateOfBirth: "",
    education: "",
    qualification: "",
    selectedScheme: "",
    attendedWorkshop: "no",
    workDescription: "",
    pollingStation: "",
    electoralArea: "",
    accountName: "",
    bank: "",
    branch: "",
    accountNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, you can send the data to the server or perform other actions
  };
  return (
    <div>
      <Navbar />
      <h1>Education Support Form</h1>
      <form onSubmit={handleSubmit}>
        <h1>Livelihood Schemes Application Form</h1>

        <fieldset>
          <legend>Personal Details</legend>

          <label htmlFor="applicantName">Name of the Applicant:</label>
          <input
            type="text"
            id="applicantName"
            name="applicantName"
            required
            value={formData.applicantName}
            onChange={handleChange}
          />

          <label htmlFor="fatherHusbandName">Father's/Husband's Name:</label>
          <input
            type="text"
            id="fatherHusbandName"
            name="fatherHusbandName"
            required
            value={formData.fatherHusbandName}
            onChange={handleChange}
          />

          <label htmlFor="nationality">Nationality:</label>
          <input
            type="text"
            id="nationality"
            name="nationality"
            required
            value={formData.nationality}
            onChange={handleChange}
          />

          <label htmlFor="selectedIdentity">National Identity</label>
          <select
            id="selectedIdentity"
            name="selectedIdentity"
            required
            value={formData.selectedIdentity}
            onChange={handleChange}
          >
            <option value="Voter ID">Voter ID</option>
            <option value="Ghana Card">Ghana Card</option>
            <option value="Passport">Passport</option>
            <option value="Driving Licence">Driving Licence</option>
            <option value="NHIS">NHIS</option>
          </select>

          <label htmlFor="address">Address:</label>
          <textarea
            id="address"
            name="address"
            rows="4"
            required
            value={formData.address}
            onChange={handleChange}
          />

          <label htmlFor="selectedConstituency">Select Constituency:</label>
          <select
            id="selectedConstituency"
            name="selectedConstituency"
            required
            value={formData.selectedConstituency}
            onChange={handleChange}
          >
            <option value="">Select Constituency</option>
            <option value="Gogamukh">Sanarigu</option>
          </select>

          <label htmlFor="mobile">Mobile No:</label>
          <input
            type="text"
            id="mobile"
            name="mobile"
            required
            value={formData.mobile}
            onChange={handleChange}
          />

          <label htmlFor="selectedGender">Male/Female:</label>
          <select
            id="selectedGender"
            name="selectedGender"
            required
            value={formData.selectedGender}
            onChange={handleChange}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>

          <label htmlFor="dateOfBirth">Date of birth:</label>
          <input
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            required
            value={formData.dateOfBirth}
            onChange={handleChange}
          />
        </fieldset>

        <fieldset>
          <legend>Education Details</legend>

          <label htmlFor="applicantName">Name of School:</label>
          <input
            type="text"
            id="applicantName"
            name="applicantName"
            required
            value={formData.applicantName}
            onChange={handleChange}
          />

          <label htmlFor="selectedScheme">Region of School:</label>
          <select
            id="selectedScheme"
            name="selectedScheme"
            required
            value={formData.selectedScheme}
            onChange={handleChange}
          >
            {/* <option value="">Select Constituency</option> */}
            <option value="ahafo">AHAFO</option>
            <option value="ashanti">ASHANTI</option>
            <option value="bono-east">BONO EAST</option>
            <option value="brong-ahafo">BRONG AHAFO</option>
            <option value="central">CENTRAL</option>
            <option value="eastern">EASTERN</option>
            <option value="greater-accra">GREATER ACCRA</option>
            <option value="north-east">NORTH EAST</option>
            <option value="northern">NORTHERN</option>
            <option value="oti">OTI</option>
            <option value="savannah">SAVANNAH</option>
            <option value="upper-east">UPPER EAST</option>
            <option value="upper-west">UPPER WEST</option>
            <option value="western">WESTERN</option>
            <option value="western-north">WESTERN NORTH</option>
            <option value="volta">VOLTA</option>
          </select>

          <label htmlFor="selectedScheme">School type:</label>
          <select
            id="selectedScheme"
            name="selectedScheme"
            required
            value={formData.selectedScheme}
            onChange={handleChange}
          >
            {/* <option value="">Select Constituency</option> */}
            <option value="jhs">JHS</option>
            <option value="shs">SHS</option>
            <option value="sss">SSS</option>
            <option value="university">Tertiary/University</option>
          </select>

          <label htmlFor="applicantName">What support do you need?:</label>
          <input
            type="text"
            id="applicantName"
            name="applicantName"
            required
            value={formData.applicantName}
            onChange={handleChange}
          />
        </fieldset>

        {/* <fieldset>
          <legend>Community</legend>

          <label htmlFor="selectedConstituency">Select Constituency:</label>
          <select
            id="selectedConstituency"
            name="selectedConstituency"
            required
            value={formData.selectedConstituency}
            onChange={handleChange}
          >
            <option value="">Select Constituency</option>
            <option value="Gogamukh">Sanarigu</option>
          </select>

          <label htmlFor="pollingStation">Polling Station:</label>
          <input
            type="text"
            id="pollingStation"
            name="pollingStation"
            required
            value={formData.pollingStation}
            onChange={handleChange}
          />

          <label htmlFor="electoralArea">Electoral Area:</label>
          <input
            type="text"
            id="electoralArea"
            name="electoralArea"
            required
            value={formData.electoralArea}
            onChange={handleChange}
          />
        </fieldset> */}

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default EducationSupport;
