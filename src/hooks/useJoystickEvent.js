import { useModelRoot, usePublish, useSubscribe } from "@croquet/react";
import { useState } from "react";

const useJoystickEvent = () => {
  const model = useModelRoot();
  const [joyStickEvents, setJoyStickEvents] = useState(
    model.event || { x: 0, y: 0 }
  );

  const publishEvents = usePublish(
    (event) => [model.id, "changeEvent", event],
    []
  );
  console.log('1234567890-',joyStickEvents);
  useSubscribe(model.id, "event", () => setJoyStickEvents(model.event), []);
  return {joyStickEvents, publishEvents};
};
export default useJoystickEvent