class App extends React.Component {

  state = {
    value: "",
    omens: ['pierwsza wróżba', 'druga wróżba', 'trzecia wróżba'],
    text: null,
  }

  handleSelectOmen = () => {
    const number = Math.floor(Math.random() * this.state.omens.length)
    this.setState({
      text: this.state.omens[number]
    })
  }

  handleInputChange = e => {
    this.setState({
      value: e.target.value,
    })
  }

  handleAddOmen = () => {
    const omens = this.state.omens.concat(this.state.value);
    this.setState({
      omens,
      value: "",
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.handleSelectOmen}>losuj wróżbę</button>
        <br />
        <input type="text" value={this.state.value} onChange={this.handleInputChange}></input>
        <button onClick={this.handleAddOmen}>dodaj wróżbę</button>
        {this.state.text ? <h1>{this.state.text}</h1> : null}
      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('root'))
