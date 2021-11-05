import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import './App.css';

const addTip = (price, percent) => {
  
  const newTips = {
    price: price,
    percent: percent,
    value: ((percent / 100) * price).toFixed(2)
  };

    return {
      type: 'ADD_TIP',
      payload: {
        newTips
      }
    }
  };

const removeTip = (tips, index) => {
  let newTips = tips.splice(index, 1);
  
  return {
    type: 'CLEAR_TIP',
    payload: {
      newTips
    }
  }
};


const App = props => {
  console.log(props);

  const [price, setPrice ] = useState(0);
  const [percent, setPercent] = useState(0);
  const [tips, setTips] = useState(props.tips);

  useEffect(() => {
    setTips(props.tips);
  }, [props.tips]);
  
  return (
    <div className="App">
      <div>
        Price <input type="number" value={price} onChange={e => setPrice(e.target.value)} />
      </div>
      <div>
        Tip <input type="number" value={percent} onChange={e => setPercent(e.target.value)} />
      </div>
      <button onClick={() => {
        setTips(props.tips);
        props.addTip(price, percent)
      }}>
        Calculate
      </button>
      <div>
        <ul>
          {tips && tips.map((item, index) => {
            return <li key={index}>
              Price: ${item.price}, Tip: {item.percent}%, Value: ${item.value} <span onClick={() => props.removeTip(tips, index)}>X</span>
            </li>
          }
        )}
        </ul>

      </div>
    </div>
    
  );
}
  

function mapStateToProps(state) {

  return {
    tips: state.tips
  };
}

function mapDispatchToProps(dispatch) {

 return {
  addTip: (price, percent) => dispatch(addTip(price, percent)),
  removeTip: (tips, index) => dispatch(removeTip(tips, index))
 };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
