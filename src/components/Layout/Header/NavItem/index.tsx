import Link from 'next/link'
import cn from 'classnames'
import styles from './NavItem.module.css'

interface Props {
  label: string
  href: string
  fullWidth?: boolean
  outlined?: boolean
  textLink?: string
  primary?: boolean
  className?: string
}

const NavItem = ({
  label,
  href = '/',
  fullWidth,
  outlined,
  textLink,
  primary,
  className = '',
}: Props) => {
  return (
    <Link href={href}>
      <a
        className={cn((styles.text, className), {
          [styles.primary]: primary,
          [styles.fullWidth]: fullWidth,
          [styles.outlined]: outlined,
        })}
      >
        {label}
      </a>
    </Link>
  )
}

export default NavItem