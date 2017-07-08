import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import file from './data.js';
var data = file.data;

const NewGame  = (props) => {

     return (
      <div className="row">
        <div className="col-md-4 image">
          <img src={props.data.landmark.imageUrl} alt='mountains' style={{width:'300px',height:'300px'}}/>
        </div>
        
        <div className="col-md-7">
          {props.data.answerSelection.map((val, i) => {
            return (
              <div key={i}>
                <div className="answers">
                  <p>&nbsp;{val}</p>
                </div>
              </div>
            )
          })}

        </div>
      </div>
    );
};

class Quiz extends React.Component {

 
  constructor() {
    super();
    this.state = {
      startGame: data.selectGame(),
    };
  }

  render() {
  return (
    <div>
       <NewGame data={this.state.startGame} />
    </div>
  )
  }
}


ReactDOM.render(<Quiz />, document.getElementById('root'));