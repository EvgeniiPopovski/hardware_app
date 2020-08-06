import React from 'react'
import styles from './UserInfo.module.scss'
import { Button } from 'antd'
import { Redirect } from 'react-router'

const UserInfo = ({userId}) => {
    
    return (
        <>
            <div сlassName={styles.userNameRow}>

            </div>
            <div сlassName={styles.organizationRow}>

            </div>
            <div сlassName={styles.contactsRow}>

            </div>
            <div сlassName={styles.buttonsRow}>
                <Button>Сохранить</Button>
                <Button>Сброситьы</Button>
            </div>
        </>
    )
}

export {
    UserInfo
}