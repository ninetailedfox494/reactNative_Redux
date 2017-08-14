import React, { Component } from 'react';
import {
    StyleSheet,
    Button,
    Text,
    View
} from 'react-native';
import  {connect} from 'react-redux'

 class Counter extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        const { number }=this.props.number;
        const { addNumber, subNumber }=this.props;

        return (
            <View style={ styles.counterView } >
                <Button onPress={ () => subNumber(number - 1 ) } title="Sub" />
                <Text>Counter: { number }</Text>
                <Button onPress={ () => addNumber( number + 1 ) } title="Add" />

            </View>
        );
    }
}


Counter.defaultProps = {
    number : 1
};


const styles = StyleSheet.create({
    counterView : {
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

//Action
const addNumber = (addVal) => {
    return {
        type: 'ADD_NUMBER',
        value: addVal
    }
};
const subNumber = (subVal) => {
    return {
        type: 'SUB_NUMBER',
        value: subVal
    }
};

export default connect(
    state => {
        return {
            number: state.number
        }
    },
    dispatch => {
        return {
            addNumber: (val) => dispatch(addNumber(val)),
            subNumber: (val) => dispatch( subNumber(val))
        }
    }
)(Counter);
