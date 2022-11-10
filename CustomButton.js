import React from 'react';
import {Button} from 'react-native';

const MarshButton = props => {
  return (
    <Button
      title={props.title}
      onPress={props.onPressHandler}
      color={props.color}
    />
  );
};
// const styles = StyleSheet.create({});
export default MarshButton;
