import React from 'react'
import styles from './Card.module.css'

interface CardProps {
  title: string
  description: string
  footer?: React.ReactNode
  onClick?: () => void
}

const Card: React.FC<CardProps> = ({ title, description, footer, onClick }) => {
  return (
    <div
      className={`${styles.card} ${onClick ? styles.clickable : ''}`}
      onClick={onClick}
    >
      <h4 className={styles.title}>{title}</h4>
      <p className={styles.description}>{description}</p>
      {footer && <div className={styles.footer}>{footer}</div>}
    </div>
  )
}

export default Card
