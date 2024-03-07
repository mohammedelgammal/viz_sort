import { useMemo } from "react";
import { Flex, Typography } from "antd";
import useTimer from "src/hooks/useTimer";

export default (): JSX.Element => {
  const time = useTimer();

  return useMemo(() => {
    return (
      <Flex>
        <Typography.Text>
          Duration: &nbsp;
          <strong>{time} sec</strong>
        </Typography.Text>
      </Flex>
    );
  }, [time]);
};
