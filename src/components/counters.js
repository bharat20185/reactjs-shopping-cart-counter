import React from 'react'
import Counter from './counter'

const counters = props => {
  const counterBlocks = props.counters.map(
    counter =>
      <Counter
        key={counter.id}
        counter={counter}
        onIncrementHandler={props.onIncrementHandler}
        onDeleteHandler={props.onDeleteHandler}
      />
  )
  return (
    <>
      <button className="btn btn-primary" onClick={props.onResetHandler}>Reset</button>
      <hr />
      {counterBlocks}
    </>
  )
}

export default counters