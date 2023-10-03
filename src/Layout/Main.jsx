import React from 'react';
import { redirect } from 'react-router-dom'

const Main = () => {
    return redirect('/page/1')
    // return (
    //     <div>
    //         <Redirect to="/page/1" />
    //     </div>
    // );
};

export default Main;