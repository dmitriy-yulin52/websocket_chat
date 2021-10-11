import React from 'react';
import styles from '../../App.module.css';
import {FormAddMessage} from '../../Components/FormAddMesasge/FormAddMessage'
import logo from '../../img/icons8-people-working-together-50.png'

export const Chat = () => {


    return (<>
            <div className={styles.header}><img src={logo} alt={'logo'} /></div>
            <div className={styles.wrapChat}>

                <div className={styles.userList}>
                    <div className={styles.userList__title}>
                        <span>Room: </span>
                        <span>Online:</span>
                    </div>
                    <div>
                        <ul className={styles.userList__body}>
                                <li>userName</li>
                        </ul>
                    </div>
                </div>

                <div className={styles.wrapChatContent}>
                    <div className={styles.messagesList}>
                        <div>message</div>
                    </div>

                    <div>
                        <FormAddMessage />
                    </div>
                </div>
            </div>
        </>
    )
};