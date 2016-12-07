
class App extends React.Component {

  constructor (props) {
    super (props);
    this.state = {
      list:[],
      input:''
    }

  }

  queryWord (query) {
    this.props.sendRequest(query, (data) => {
      this.setState({
        list: data
      });
    });
  }


  render () {
    return (
      <div>
        <Form queryWord = {this.queryWord.bind(this)} input = {this.state.input} />
        <List list = {this.state.list} />
      </div>
    )
  }
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;