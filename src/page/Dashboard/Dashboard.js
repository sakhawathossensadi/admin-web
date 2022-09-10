import React from "react";
import { Avatar, Button } from "antd";
import { UserOutlined } from '@ant-design/icons'
import './style.scss'

function Dashboard () {

    const signOut = () => {}

    return (
        <div className="dashboard">
            <div className="dashboard-topbar">
                <div className="dashboard-topbar-title">
                    <h1 className="dashboard-topbar-title-h1">Talent Hiring</h1>
                </div>
                <div className="dashboard-topbar-profile">
                    <div className="dashboard-topbar-profile-style">
                        <div className='dashboard-topbar-profile-style-name'>
                            <span className='dashboard-topbar-profile-style-name-span'>
                                Hello, {"userName"}
                            </span>
                            <Avatar size={42}  icon={<UserOutlined />} />
                        </div>
                        <div className="dashboard-topbar-profile-style-button">
                            <Button type="primary"
                                onClick={() => signOut()}
                                className='dashboard-topbar-profile-style-button-logout'
                                >
                                    <span>Logout</span>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="dashboard-candidates"></div>
        </div>
    )
}

export default Dashboard;