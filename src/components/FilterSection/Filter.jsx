import React from 'react'
import styles from './Filter.module.scss'

const Filter = () => {
    return (
        <div className={styles.filterSection}>
            <form action="post" name='filter'>
                <p className={styles.filterHeader}>Материал</p>
                <label> Цинковый сплав <input type='checkbox' name='filter'value='zink'/> </label> <br/>
                <label> Латунь <input type='checkbox' name='filter'value='brass'/> </label><br/>
                <label> Нержавеющая сталь <input type='checkbox' name='filter'value='chrome'/> </label><br/>

                <p className={styles.filterHeader}>Цвет</p>
                <label> Хром <input type='checkbox' name='filter'value='chrome'/> </label><br/>
                <label> Сатин <input type='checkbox' name='filter'value='satin'/> </label><br/>
                <label> Черный  <input type='checkbox' name='filter'value='black'/> </label><br/>
                <label> Бронза <input type='checkbox' name='filter'value='bronse'/> </label><br/>
                <label> Золото <input type='checkbox' name='filter'value='gold'/> </label><br/>
            </form>
        </div>
    )
}

export default Filter