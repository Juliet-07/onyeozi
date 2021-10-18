import React from 'react';
import {Input} from 'react-native-elements';
import { Text, View} from 'react-native';
import propTypes from 'prop-types';
import {useField} from 'formik';
import {styles}from './styles';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

 
// INPUT WRAPPED WITH FORMIK
export const InputField = (props) => {
  const {
    name,
    value,
    label,
    errorMsg,
    keyboardType,
    multiline,
    numberOfLines,
    containerStyles,
    inputContainerStyles,
    leftLabel,
    handleChange,
    rightIcon,
    ...otherProps
  } = props;
  const [field, meta, helpers] = useField(props);
console.log(meta.err)
  return (
    <React.Fragment>
      <View style={styles.main}>
      <Input
        name={name}
        id={[label, name].join('-')}
        value={value[name]}
        onChange={handleChange}
        placeholder={leftLabel ? null : label}
        multiline={multiline}
        numberOfLines={numberOfLines}
        placeholderTextColor="#00000080"
        keyboardType={keyboardType}
        inputContainerStyle={{
          ...styles.inputContainer,
          // ...inputContainerStyles,
        }}
        containerStyle={{...styles.container, 
        }}
        errorStyle={{color: 'red', marginTop: 0}}
        errorMessage={errorMsg}
        underlineColorAndroid="transparent"
        leftIcon={
          leftLabel ? (
            <Text style={{color: '#fff', marginRight: 5}}>{leftLabel}</Text>
          ) : null
        }
        rightIcon={rightIcon}
        {...field[name]}
        {...props}
        {...otherProps}
      />
      <Text style={styles.errorMessage}>{meta.touched && meta.error}</Text>
      </View>
      
    </React.Fragment>
  );
};


// PLAIN INPUT WITHOUT FORMIK
export const InputPlain = (props) => {
  const {
    name,
    value,
    label,
    errorMsg,
    keyboardType,
    multiline,
    numberOfLines,
    containerStyles,
    inputContainerStyles,
    leftLabel,
    handleChange,
    rightIcon,
    ...otherProps
  } = props;

  return (
    <React.Fragment>
      <Input
        name={name}
        id={[label, name].join('-')}
        value={value[name]}
        onChange={handleChange}
        placeholder={leftLabel ? null : label}
        multiline={multiline}
        numberOfLines={numberOfLines}
        placeholderTextColor="#00000080"
        keyboardType={keyboardType}
        inputContainerStyle={{
          ...styles.inputContainer,
          ...inputContainerStyles,
        }}
        containerStyle={{...styles.container, ...containerStyles}}
        errorStyle={{color: 'red', marginTop: 0}}
        errorMessage={errorMsg}
        underlineColorAndroid="transparent"
        leftIcon={
          leftLabel ? (
            <Text style={{color: '#fff', marginRight: 5}}>{leftLabel}</Text>
          ) : null
        }
        rightIcon={rightIcon}
  
        {...props}
        {...otherProps}
      />
    
    </React.Fragment>
  );
};


InputField.propTypes = {
  value: propTypes.string.isRequired,
  label: propTypes.string,
  name: propTypes.string.isRequired,
  keyboardType: propTypes.string,
  errorMsg: propTypes.string,
  containerStyles: propTypes.object,
  inputContainerStyles: propTypes.object,
  // leftLabel: propTypes.bool,
};

InputPlain.propTypes = {
  value: propTypes.string.isRequired,
  label: propTypes.string,
  name: propTypes.string.isRequired,
  keyboardType: propTypes.string,
  errorMsg: propTypes.string,
  containerStyles: propTypes.object,
  inputContainerStyles: propTypes.object,
  // leftLabel: propTypes.bool,
};