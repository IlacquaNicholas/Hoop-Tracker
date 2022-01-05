import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import { useState } from 'react';


// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function InfoPage() {
  const history = useHistory();
  const dispatch = useDispatch();

  const [threeMade, setThreeMade]= useState(0)
  
  const playerReducer = useSelector((store) => store.playerReducer)

  const onMadeShot = (e) => {
    e.preventDefault();
    dispatch({
      type: 'SAGA_ADD_STAT',
      payload: {
        three_made: threeMade,
      }
    })
  }



    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Players</th>
              <th>3pt Made</th>
              <th>3pt Missed</th>
              {/* <th>2pt Made</th>
              <th>2pt Missed</th> */}
              <th>Reb</th>
              {/* <th>Ast</th>
              <th>Blks</th>
              <th>Stl</th> */}
            </tr>
          </thead>
          <tbody>
            <tr>
              {playerReducer.map((player) => {
                return <tr key={player.id}> {player.player_name}</tr>
              })}
              <td><button onClick={onMadeShot}>Made</button></td>
              <td><button>Missed</button></td>
              {/* <td><button>Made</button></td>
              <td><button>Missed</button></td> */}
              <td><button>Add</button></td>
              {/* <td><button>Add</button></td>
              <td><button>Add</button></td>
              <td><button>Add</button></td> */}
            </tr>
          </tbody>
        </table>
      </div>
  );
}
export default InfoPage;
