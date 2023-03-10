import React from 'react';
import Loading from './Loading';
import PersonCard from './PersonCard';

class PersonDetails extends React.Component {
    constructor() {
        super();

        this.state = {
            loading: true,
            person:[],
        };
    }

    componentDidMount() {
        const url = 'https://api.randomuser.me/';
        fetch(url).then((Response) => Response.json()).then((data) => {
            this.setState({
                person: data.results,
                loading: false,
            })
        })
    }

    shouldComponentUpdate(_nextProps, nextStates) {
        const AGE = 50;
        if (nextStates.person[0].dob.age < AGE) return true;
    }

    getUserElements(user) {
        return {
            name: `${user.name.first} ${user.name.last}`,
            email: user.email,
            age: user.dog.age,
            image: user.picture.thumbnail,
        }
    }


    render() {
        const { loading, person } = this.state;
        if (loading) return <Loading />
        return(
            <div>
                <PersonCard person={ this.getUserElements(person[0]) } />
            </div>
        )
    }
}

export default PersonDetails;