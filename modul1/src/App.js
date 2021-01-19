import React, {Component} from 'react';
import './App.css';
import Alert from './components/Alert';
import Media from './components/Media'

class App extends Component {
  render(){
      return (
          <div className="App container col-sm-6">
              <Media image="react.png" title="React JS">
                  Csvdwkmremwnrbtecgrekfnjecmbfcerbckhk
                  cebfrcmfjgvbrchxksxmjnjfcgbnsdjfhncsj
                  fhbemnuibrefemwlxjneryfneimfjbhndcfnghmd]
                  hbdgfenwbjxhdbfbdfb.
              </Media>

              <Media image="angular.png" title="Angular JS">
                  Cjnbvnfduk jnbsjd ghhsxkncbxd hjsdnxkjdk hjsdnxk
                  bnsdnm,s jmnsjh hjscndh hjsdncxd, hjsfkbfsdj, hjasxsmandn
                  jsndjsbfshj jdjghmjs jsdhfbsjd sdfbjh jshdjxm jnsjn
              </Media>
          </div>
      );
  }
}

export default App;