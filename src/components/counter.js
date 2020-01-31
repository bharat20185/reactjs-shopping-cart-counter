import React from 'react'

const counter = props => {

  let counterClasses = 'mr-2 badge badge-'
  counterClasses += props.counter.value === 0 ? 'warning' : 'primary'

  return (
    <div className="m-2">
      <span className={counterClasses}>{props.counter.value === 0 ? 'zero' : props.counter.value}</span>
      <button
        className="btn btn-secondary"
        onClick={() => props.onIncrementHandler(props.counter)}
      >
        Increment
      </button>
      <button
        className="btn btn-danger ml-2"
        onClick={() => props.onDeleteHandler(props.counter)}
      >
        Delete
      </button>
    </div>
  )
}

export default counter