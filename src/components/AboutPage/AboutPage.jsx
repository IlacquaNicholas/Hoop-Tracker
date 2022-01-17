import React from 'react';
import'./AboutPage.css'
// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <div>
        <h1>What is Hoop Tracker?</h1>
        <p>Hoop tracker is an app to help someone keep stats for a basketball game. 
          I came up with the idea while playing in a league for the last 7 years. 
          Our team can never remember what we scored a few games in the past. 
          I thought that this app could help with that.</p>

          <h1>Technologies used:</h1>
          <ul>
            <li>React</li>
            <li>React-Redux</li>
            <li>Node.js</li>
            <li>Sagas</li>
            <li>PostgreSQL</li>
            <li>Material UI</li>
            <li>CSS</li>
          </ul>


          <h1>What I would like to add to the project:</h1>
        <ul>
          <li>A leader board</li>
          <li>Find a more efficient way for the stat keeper.</li>
        </ul>




      </div>
    </div>
  );
}

export default AboutPage;
