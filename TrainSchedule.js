// src/TrainSchedule.js

import React from 'react';
import trainSchedule from './trainData';

function TrainSchedule() {
  return (
    <div>
      <h1>Train Schedule</h1>
      <table>
        <thead>
          <tr>
            <th>Train Name</th>
            <th>Departure Time</th>
            <th>Destination</th>
          </tr>
        </thead>
        <tbody>
          {trainSchedule.map((train) => (
            <tr key={train.id}>
              <td>{train.name}</td>
              <td>{train.departureTime}</td>
              <td>{train.destination}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TrainSchedule;
