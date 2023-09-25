import React, {useEffect, useState} from 'react';
import Sidebar from "../components/sidebar/Sidebar";


import CreateTmJContent from "../components/content/CreateTmJContent";



function CreateTjm() {

    return (
        <section className="dashboard">
            <div className="dashboard__inner">
                <Sidebar/>
                <CreateTmJContent />
            </div>
        </section>
    );
}

export default CreateTjm;