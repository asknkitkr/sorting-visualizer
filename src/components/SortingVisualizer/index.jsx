import React from "react";
import { getBubbleSortAnimations } from "../../algorithms/bubbleSortAlgorithm";
import { getMergeSortAnimations } from "../../algorithms/mergeSortAlgorithm";
import { getInsertionSortAnimations } from "../../algorithms/insertionSortAlgorithm";
import "./style.css";

import {
  NO_OF_BARS,
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  SORT_ANIMATION_SPEED,
} from "../../constants/constants";

export default class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [],
    };
  }

  componentDidMount() {
    this.resetArray();
  }

  resetArray() {
    const array = [];
    for (let i = 0; i < NO_OF_BARS; i++) {
      array.push(randomIntFromIntervals(15, 500));
    }
    this.setState({ array });
  }

  animations1(animate) {
    for (let i = 0; i < animate.length; i++) {
      const bars = document.getElementsByClassName("array-bar");
      const isColorChange = i % 3 !== 2;

      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animate[i];
        const barOneStyle = bars[barOneIdx].style;
        const barTwoStyle = bars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;

        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * SORT_ANIMATION_SPEED);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animate[i];
          const barOneStyle = bars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * SORT_ANIMATION_SPEED);
      }
    }
  }

  animations2(animate) {
    for (let i = 0; i < animate.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animate[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * SORT_ANIMATION_SPEED);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight, barTwoIdx, newHeight2] = animate[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          const barTwoStyle = arrayBars[barTwoIdx].style;
          barOneStyle.height = `${newHeight}px`;
          barTwoStyle.height = `${newHeight2}px`;
        }, i * SORT_ANIMATION_SPEED);
      }
    }
  }

  bubbleSort() {
    const animate = getBubbleSortAnimations(this.state.array);
    this.animations2(animate);
  }

  mergeSort() {
    const animate = getMergeSortAnimations(this.state.array);
    this.animations1(animate);
  }

  insertionSort() {
    const animate = getInsertionSortAnimations(this.state.array);
    this.animations1(animate);
  }

  render() {
    const { array } = this.state;

    return (
      <>
        <nav className="nav navbar bg-dark text-white">
          <div className="container">
            <h3 className="fw-bold">Sorting Visualizer</h3>
            <button onClick={() => this.resetArray()} className="generate-new">
              Generate New Array
            </button>
            <div className="sorting-options">
              <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
              <button onClick={() => this.insertionSort()}>
                Insertion Sort
              </button>
              <button onClick={() => this.mergeSort()}>Merge Sort</button>
            </div>
          </div>
        </nav>
        <div className="container fixed-bottom">
          {array.map((value, index) => (
            <div
              className="array-bar"
              key={index}
              style={{ backgroundColor: "#333333", height: `${value}px` }}
            ></div>
          ))}
        </div>
      </>
    );
  }
}

const randomIntFromIntervals = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
