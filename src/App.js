import logo from './logo.svg';
import './App.css';
import { InCroquetSession } from '@croquet/react';
import { Model, View } from '@croquet/croquet';
import { Suspense, useEffect } from 'react';
import ModelRender from './components/Model';
import Loader from './components/Loader';
import JoyStick from './components/JoyStick';

class MyappModel extends Model {
  init(option) {
    super.init(option);
    this.event = { x: 0, y: 0 };
    this.subscribe(this.id, "changeEvent", this.handleChangeEvent);
  }
  handleChangeEvent(event) {
    this.event = event;
    this.publish(this.id, 'event')
  }
}

MyappModel.register("MyappModel");


function App() {
  
  return (
    <InCroquetSession
      apiKey="1JDJ86Kxb7bxssoPm92G0EhCujjxoCnfr2ErDtgjo"
      appId="com.makoitlab.kayser.myapp"
      password={"abc"}
      name={"myapp"}
      model={MyappModel}
    >
      <Suspense fallback={<Loader />}>
        <ModelRender />
        <JoyStick />
      </Suspense>
    </InCroquetSession>
  );
}

export default App;