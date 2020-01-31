import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'

import NavBar from './components/navbar'
import Counters from './components/counters'

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4, selected: false },
      { id: 2, value: 0, selected: false },
      { id: 3, value: 0, selected: false },
      { id: 4, value: 0, selected: false },
      { id: 5, value: 0, selected: false },
    ]
  }
  onIncrementHandler = counter => {
    const counters = [...this.state.counters]
    const counterIndex = counters.indexOf(counter)
    counters[counterIndex] = { ...counter }
    counters[counterIndex].value++
    counters[counterIndex].selected = true
    this.setState({
      counters
    })
  }

  onResetHandler = () => {
    const counters = this.state.counters.map(counter => {
      counter.value = 0
      counter.selected = false
      return counter
    })
    this.setState({
      counters
    })
  }

  onDeleteHandler = (counter) => {
    const counters = this.state.counters.filter(c => c.id !== counter.id)
    this.setState({
      counters
    })
  }

  selectedCounters = () => {
    const counters = this.state.counters.filter(c => c.selected)
    return counters.length
  }

  render() {
    return (
      <React.Fragment>
        <NavBar counter={this.selectedCounters()} />
        <main className="containers m-2">
          <Counters
            counters={this.state.counters}
            onIncrementHandler={this.onIncrementHandler}
            onResetHandler={this.onResetHandler}
            onDeleteHandler={this.onDeleteHandler}
          />
        </main>
      </React.Fragment>
    )
  }
}

export default App;
