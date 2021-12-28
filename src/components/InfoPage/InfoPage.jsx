import React from 'react';


// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function InfoPage() {

    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Players</th>
              <th>3pt Made</th>
              <th>3pt Missed</th>
              <th>2pt Made</th>
              <th>2pt Missed</th>
              <th>Total Pts</th>
              <th>Reb</th>
              <th>Ast</th>
              <th>Blks</th>
              <th>Stl</th>
            </tr>
          </thead>
          <tbody>
            <td>Players</td>
            <td><button>Made</button></td>
            <td><button>Missed</button></td>
            <td><button>Made</button></td>
            <td><button>Missed</button></td>
            <td>PTS</td>
            <td><button>Add</button></td>
            <td><button>Add</button></td>
            <td><button>Add</button></td>
            <td><button>Add</button></td>
          </tbody>
        </table>
      </div>
  );
}
export default InfoPage;
