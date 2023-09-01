import { useState } from "react";
import "./App.css";
import { Button, Popover, message } from "antd";
const math = require("mathjs");

function App() {
  const [output, setOutput] = useState(0);
  const btn = ["7", "8", "9", "+", "4", "5", "6", "-", "1", "2", "3"];
  const handleAdd = (val) => {
    if (output === 0) setOutput(val);
    else setOutput(output + val);
  };
  const handleEquation = () => {
    try {
      setOutput(math.evaluate(output));
    } catch (e) {
      message.error("Error: " + e.message);
    }
  };
  const content = (
    <div className="calcOthers">
      <Button type="primary" onClick={() => setOutput(0)}>
        Clear Output
      </Button>
      <Button type="primary" onClick={() => handleAdd(0)}>
        Add Zero
      </Button>
    </div>
  );

  return (
    <div className="calLayout">
      <div className="calcOutput">
        <div className="calcAnswer">{output}</div>
      </div>
      <div className="calcButtons">
        {btn.map((val, index) => (
          <span
            className="seperateButtons"
            key={index}
            onClick={() => handleAdd(val)}
          >
            {val}
          </span>
        ))}
        <span className="seperateButtons" onClick={handleEquation}>
          =
        </span>
      </div>
      <div className="btn">
        <Popover content={content} title="Other Options">
          <Button type="primary">OTHER OPTIONS</Button>
        </Popover>
      </div>
    </div>
  );
}

export default App;
