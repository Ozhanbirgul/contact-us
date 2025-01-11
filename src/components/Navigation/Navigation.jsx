import React from 'react'
import styles from './Navigation.module.css'

const Navigation = () => {
    console.log(styles.navigation);


    return (
        <div className={`${styles.navigation}`}>
            <div className="container">
                <div className="row">
                    <nav>
                        <div className='logo'>
                            <img src="public/images/logo.png" alt="#" />
                        </div>

                        <ul>
                            <li>
                                <a href="">Home</a>
                            </li>
                            <li>
                                <a href="">About</a>
                            </li>
                            <li>
                                <a href="">Contact</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Navigation
