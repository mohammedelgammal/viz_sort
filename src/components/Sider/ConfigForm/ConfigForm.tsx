import { Button, Flex, Select, Slider } from "antd";
import { EyeOutlined, ReloadOutlined } from "@ant-design/icons";
import algoOptions from "./data";
import Style from "./ConfigForm.module.css";

export default (): JSX.Element => {
  const speedFormatter = (value?: number) => `${value} ms`;
  const lengthFormatter = (value?: number) => `${value! * 10}`;

  return (
    <form className={Style.form}>
      <Flex className={Style.inputStack}>
        <Select
          placeholder="Sorting Algorithm"
          variant="outlined"
          style={{ width: "100%" }}
          options={algoOptions}
          defaultActiveFirstOption
        />
        <Flex>
          <Slider
            className={Style.slider}
            tooltip={{ formatter: speedFormatter }}
          />
          <span>Speed</span>
        </Flex>
        <Flex>
          <Slider
            className={Style.slider}
            tooltip={{ formatter: lengthFormatter }}
            min={0.5}
          />
          <span>Length</span>
        </Flex>
        <Flex className={Style.submit}>
          <Button type="primary" icon={<EyeOutlined />}>
            Visualize
          </Button>
          <Button type="default" icon={<ReloadOutlined />} />
        </Flex>
      </Flex>
    </form>
  );
};
