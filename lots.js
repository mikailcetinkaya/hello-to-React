import React, { Component } from 'react';
import LottieView from 'lottie-react-native';

export class BasicExample extends React.Component {
  componentDidMount() {
    this.animation.play();
  }

  render() {
    return (
      <LottieView
        ref={animation => {
          this.animation = animation;
        }}
        source={require('./pp.json')}
        style={{ position: 'absolute',
        top: "40%",
        left: "40%",
        width: "40%",
        height: "40%"}}
      />
    );
  }
}