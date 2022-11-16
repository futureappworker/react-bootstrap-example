import React, { useState, useEffect, useCallback } from 'react';
import classNames from 'classnames';
import _ from 'lodash';

import useWindowResize from '../../hooks/useWindowResize';

import styles from './styles.module.css';

type PropsTypes = {
  points: Array<number>,
  defaultValue: number,
  onChange?: (value: number) => void,
};

function Slider(props: PropsTypes) {
  const {
    points,
    defaultValue,
    onChange = () => {},
  } = props;

  const { width: windowWidth } = useWindowResize(300);

  const [valueIndex, setValueIndex] = useState('0');
  useEffect(() => {
    const findIndex = _.indexOf(points, defaultValue);
    if (findIndex !== -1) {
      onChange(defaultValue);
      setValueIndex(findIndex.toString());
    }
  }, [points, defaultValue]);

  const [max, setMax] = useState(1);
  useEffect(() => {
    setMax(points.length - 1);
  }, [points]);

  const [sliderWidth, setSliderWidth] = useState(0);
  useEffect(() => {
    const sliderElement = document.querySelector(`.${styles.baseBox}`);
    if (sliderElement) {
      const { width } = sliderElement.getBoundingClientRect();
      setSliderWidth(width);
    }
  }, [windowWidth]);

  const [basePointWidth, setBasePointWidth] = useState(0);
  const [barWidth, setBarWidth] = useState(0);
  const [pointLeft, setPointLeft] = useState(0);
  useEffect(() => {
    const parseValue = parseInt(valueIndex, 10);

    setBasePointWidth(sliderWidth / (points.length - 1));
    setBarWidth((sliderWidth / (points.length - 1)) * parseValue);
    setPointLeft((sliderWidth / (points.length - 1)) * parseValue);
  }, [valueIndex, points, sliderWidth]);

  const handleOnChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setValueIndex(e.target.value);
      onChange(points[+e.target.value]);
    },
    [points],
  );

  return (
    <div className={styles.slider}>
      <div className={styles.baseBox}>
        <div className={styles.bgBox} />
        <div
          className={styles.bar}
          style={{ width: barWidth }}
        />
        <div
          className={styles.point}
          style={{ left: pointLeft }}
        >
          <div className={styles.innerPoint} />
        </div>
        <input
          className={styles.input}
          type="range"
          min={0}
          max={max}
          step={1}
          value={valueIndex}
          onChange={handleOnChange}
        />
        <div className={styles.numberBox}>
          {
            points && points.map((point, index) => (
              <div
                className={
                  classNames(
                    styles.number,
                    {
                      [styles.numberActive]: point === +points[parseInt(valueIndex, 10)],
                    },
                  )
                }
                style={{ left: basePointWidth * index }}
                key={point}
              >
                {point}
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default Slider;
