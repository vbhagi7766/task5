import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './App.css'; // Import your CSS file for styling

const AgeCalculator = () => {
  const [birthDate, setBirthDate] = useState(null);
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    if (birthDate) {
      const today = new Date();
      const birthYear = birthDate.getFullYear();
      const birthMonth = birthDate.getMonth();
      const birthDay = birthDate.getDate();

      const ageNow = today.getFullYear() - birthYear;
      const isBeforeBirthday = today.getMonth() < birthMonth || (today.getMonth() === birthMonth && today.getDate() < birthDay);

      const calculatedAge = isBeforeBirthday ? ageNow - 1 : ageNow;
      setAge(calculatedAge);
    } else {
      setAge(null);
    }
  };

  return (
    <div >
      <center>

      <h1>Age Calculator</h1>
      <h3>Enter your date of birth</h3>
      <DatePicker
        selected={birthDate}
        onChange={(date) => setBirthDate(date)}
        dateFormat="dd/MM/yyyy"
        placeholderText="Select your birthdate"
        className="date-picker" // Apply CSS class for styling if necessary
      />
      <p></p>
      <button onClick={calculateAge}>Calculate Age</button>
      {age !== null && <h3>Your are {age} years old</h3>}
      </center>
    </div>
  );
};

export default AgeCalculator;
