import React from 'react';
import * as api from '../lib/api';

class Image extends React.Component {

    state = {
        loading: null,
        image: null
    }

    getAPI = async () => {
        if (this.state.loading) return;

        this.setState({
            loading: true
        });

        try {
            const response = await api.getAPI();
            const { data } = response.data
            this.setState({
                data
            });
        } catch (e) {
            console.log(e);
        }

        this.setState({
            loading: false
        })
    }
    
    componentDidMount() {
        this.getAPI();
    }

    render() {

        const { image, loading } = this.state;

        return (
            <img src={image} title="image" />
        )
    }
}

export default Image;