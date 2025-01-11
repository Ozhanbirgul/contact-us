import React from 'react'
import styles from './Button.module.css'
import { MdMessage } from "react-icons/md";

const Button = ({text, icon, isOutline}) => {
  return (
    <>
      <button 
      className={isOutline ? styles.outline_btn : styles.primary_btn}>
        {icon}
        {text}
      </button>
    </>
  )
}

export default Button
