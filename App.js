class App extends React.Component {

  state = {
    omen: ['pierwsza wróżba', 'druga wróżba', 'trzecia wróżba'],
    text: null
  }

  handleClicked = () => {
    const number = Math.floor(Math.random() * this.state.omen.length)
    this.setState({
      text: this.state.omen[number]
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClicked}>losuj wróżbę</button>
        {this.state.text ? <h1>{this.state.text}</h1> : null}
      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('root'))
