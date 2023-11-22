import React from 'react'
import '../css/setting.css'

export default function Setting() {

    const d = { d: 'data', d: 'james' }

    const deleteAccountHandler = async () => {
        const deleteUser = await fetch('http://localhost:1000/delete-user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(d),
        });


        if (deleteUser.ok) {
            console.log('deleting user');
        }
    }



    return (
        <div className='root-setting'>


            <div className="container-setting">
                <div id="setting-options">
                    <ul>
                        <li><a href={null} className="setting-menus"><span>&gt;</span>Profile</a></li>
                        <li><a href={null} className="setting-menus"><span>&gt;</span>General</a></li>
                        <li><a href={null} className="setting-menus"><span>&gt;</span>Extras</a></li>
                        <li><a href={null} className="setting-menus"><span>&gt;</span>Logout</a></li>
                    </ul>
                </div>

                <div className="option-full-view">
                    <button onClick={() => deleteAccountHandler()} >logout</button>
                </div>
            </div>


        </div>
    )
}
