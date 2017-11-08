
import * as React from 'react';
import { render } from 'react-dom';


// tslint:disable-next-line
import './less/index.less';

interface HomeStateInfo {
  title: string;
}

interface HomePropsInfo {
}

class Home extends React.Component<HomePropsInfo, HomeStateInfo> {
  state: HomeStateInfo;

  constructor(props: HomePropsInfo) {
    super(props);
    this.state = {
      title: 'title'
    };
  }

  render() {
    const { title } = this.state;

    return (
      <div>
        <span>Choose a color</span>
        <select id='dropdown'>
          <option selected disabled hidden value=''></option>
          <option value='white'>White</option>
          <option value='pink'>Pink</option>
          <option value='green'>Green</option>
          <option value='yellow'>Yellow</option>
        </select>
      </div>
    );
  }
}

render(<Home />, document.getElementById('container'));
