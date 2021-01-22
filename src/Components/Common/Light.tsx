import React from 'react';
import { connect } from 'react-redux';
import { fetchLightById } from '../../Redux/Actions/index';

interface IProps {
    match: any,
    fetchLightById: any
};

class Light extends React.Component<IProps> {
    componentDidMount() {
        console.log('props', this.props);
        this.props.fetchLightById(this.props.match.params.id);
    }

    render() {
        return (
            <div>Light</div>
        )
    }
};

const mapDispatchToProps = {
    fetchLightById
}

export default connect(null, mapDispatchToProps)(Light);