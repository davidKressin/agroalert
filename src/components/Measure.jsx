import React from 'react';
import { Flex, Progress, Slider, Typography } from 'antd';

export const Measure = ({data}) => {
  const [stepsCount, setStepsCount] = React.useState(5);
  const [stepsGap, setStepsGap] = React.useState(7);
  return (
    <>
      <Flex
        wrap
        gap="middle"

        style={{
          marginTop: 16,
        }}
      >

        <Progress
          className='mx-auto'
          type="dashboard"
          steps={8}
          percent={data.porcentaje}
          trailColor="rgba(0, 0, 0, 0.06)"
          strokeWidth={20}
        />
      </Flex>
    </>
  );
};