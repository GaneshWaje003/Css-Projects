import React from 'react'
import '../css/adminoptions.css'

export default function AdminOptions() {
    return (
        <div id='root-admin-options'>

            <div className="main-admin-div">

                <div className="heading-admin-options"><p>Admin Options</p></div>

                <div className="nav-options-admin">
                    <ol className='list-container-admin'>
                        <li className="list-admin list-1"><a href="#" className="link-1">Change Title</a></li>
                        <li className="list-admin list-2"><a href="#" className="link-2">Users</a></li>
                        <li className="list-admin list-3"><a href="#" className="link-3">Users</a></li>
                        <li className="list-admin list-4"><a href="#" className="link-4">Users</a></li>
                    </ol>
                </div>

            </div>


        </div>
    )
}
