import React from "react";
import {ErrorIndicator} from "../index";

export default class extends React.Component {

    state = {
        hasError: false
    }

    componentDidCatch(error, errorInfo) {
        console.error(error, errorInfo)
        this.setState({
            hasError: true
        })
    }

    render() {
        const {hasError} = this.state;

        if (hasError) {
            return <ErrorIndicator />
        }

        return this.props.children
    }
}