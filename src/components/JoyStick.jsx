import { useModelRoot, usePublish, useSubscribe } from "@croquet/react";
import { useState } from "react";
import { Joystick } from "react-joystick-component";
import useJoystickEvent from "../hooks/useJoystickEvent";

const JoyStick = () => {
  const model = useModelRoot();

  const { joyStickEvents, publishEvents } = useJoystickEvent();
  //   const [joyStickEvents, setJoyStickEvents] = useState(
  //     model.event || { x: 0, y: 0 }
  //   );

  //   useSubscribe(model.id, "event", () => setJoyStickEvents(model.event), []);

  //   const publishEvents = usePublish(
  //     (event) => [model.id, "changeEvent", event],
  //     []
  //   );
  console.log(joyStickEvents, "0987654321");
  return (
    <div id="joystick-container">
      <Joystick
        size={100}
        baseColor="#c9c9c9"
        stickColor="#fff"
        move={publishEvents}
      />

      <h1>X: {joyStickEvents?.x}</h1>
      <h1>Y: {joyStickEvents?.y}</h1>
    </div>
  );
};
export default JoyStick;
