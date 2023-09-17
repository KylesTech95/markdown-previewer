import './App.css';
import TextInput from './textinput.js'


function App() {
  let headerStyle = {
    background: "#fff",
    textAlign: "center",
    margin: "0 auto",
    padding:".5rem 0",
    position: 'sticky',
    top:'0',
    left:'0'

  }

  return (
    <div className="container">
      <header style={headerStyle}><h1>Markdown Previewer</h1></header>
      <TextInput/>
    </div>
  )
}

export default App;
