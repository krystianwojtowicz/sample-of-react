class App extends React.Component {

  state = {
    text: ""
  }



  handleClicked = () => {
    const omen = ['pierwsza wróżba', 'druga wróżba', 'trzecia wróżba']
    const number = Math.floor(Math.random() * 3)
    this.setState({
      text: omen[number]
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClicked}>losuj wróżbę</button>
        <PanelResult text={this.state.text}></PanelResult>
      </div>
    );
  }
}

const PanelResult = (props) => {
  return (
    <h1>{props.text}</h1>
  )
}


ReactDOM.render(<App />, document.getElementById('root'))