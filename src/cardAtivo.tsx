import styles from './styles/cardAtivo.module.css'
import type { ReactNode } from 'react'

interface CardAtivoProps {
  titulo: string
  children: ReactNode
}

export function CardAtivo({ titulo, children }: CardAtivoProps) {
  return (
    <div className={styles.card}>
      <h2>{titulo}</h2>
      <div>
        {children}
      </div>
    </div>
  )
}