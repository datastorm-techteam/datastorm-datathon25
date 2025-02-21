import React from 'react';

import Header from './Header';
import Main from './Main';
import Mission from './Mission';
import Schedule from './Schedule';

const Home = () => {
    return (
        <div class="w-screen h-screen">
            <Header />
            <Main />
            <Mission />
            <Schedule />
        </div>
    );
};

export default Home;