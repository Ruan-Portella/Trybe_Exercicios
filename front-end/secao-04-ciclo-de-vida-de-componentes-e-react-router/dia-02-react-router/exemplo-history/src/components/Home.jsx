import React  from "react";

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            userName: 'Tryber',
            role: 'Admin',
        }
    }

    render() {
        const { history } = this.props
        return(
            <>
            <h1>Home Page</h1>
            <button type="button" onClick={ () => history.push('/welcome') }>
                Acesse a página de Boas-Vindas
            </button>
            </>
        );
    }
}

export default Home;