import styles from './components/Heading.module.css'
import type { ReactNode } from 'react'


interface HeadingProps {
  children: ReactNode
}

export function Heading({ children }: HeadingProps) {

  let cor = 'black'

  if (typeof children === 'string') {
    if (children.includes('Lucro')) {
      cor = 'blue'
    } else if (children.includes('Prejuízo')) {
      cor = 'red'
    }
  }

  return (
    <h1 style={{ color: cor }} className={styles.heading}>
      {children}
    </h1>
  )
}