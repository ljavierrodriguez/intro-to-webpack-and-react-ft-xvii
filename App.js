import React, { Fragment, useState, useEffect } from 'react';

export class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: 'Luis',
            lastname: 'Rodriguez'
        }
    }

    componentDidMount(){
        // componentDidMount
        console.log('Hola')
    }

    render() {
        return (
            <Fragment>
                <h1 className="">Hola, {this.props.name} {this.props.lastname}</h1> // JSX
                <h1 className="">Hola, {this.state.name} {this.state.lastname}</h1> // JSX
                <ComponentA name="Hugo" />
                <ComponentA name="Paco" />
                <ComponentA name="Luis" />
            </Fragment>
        )
    }
}

export function App(props) {

    const [state, setState] = useState({ name: 'Luis', lastname: 'Rodriguez' });

    const [name, setName] = useState("Luis");
    const [lastname, setLastname] = useState("Rodriguez");

    useEffect(() => {
        console.log('Hola')
    }, [])

    return (
        <>
            <h1>Hola, {props.name} {props.lastname}</h1>
            <h1>Hola, {state.name} {state.lastname}</h1>
            <ComponentA name="Hugo" />
            <ComponentA name="Paco" />
            <ComponentA name="Luis" />
        </>
    )
}

const ComponentA = () => {
    return (
        <h1>Component A</h1>
    )
}

//export default App;