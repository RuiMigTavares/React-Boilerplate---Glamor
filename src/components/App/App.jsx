/* External Dependencies */
import React, { Component } from 'react';
import { ThemeProvider } from 'glamorous';

/* Internal Dependencies */
import Header from '../Header';

/* Import Styles */
import '../../styles/globalStyles';
import { Text } from './appStyles';

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <main>
                    <Text>Main</Text>
                </main>
            </div>
        );
    }
}

export default App;
