import React from "react";
import style from './AuthLayout.module.scss'

type AuthLayoutProps = {
    children: React.ReactNode
}

const AuthLayout = ({children}: AuthLayoutProps) => {
    return (
        <div className={style.layout}>{children}</div>
    )
}

export default AuthLayout;