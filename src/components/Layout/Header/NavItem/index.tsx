import Link from 'next/link'

interface Props {
  label: string
  href: string
}

const NavItem = ({ label, href = '/' }: Props) => {
  return (
    <Link href={href}>
      <a className='text-heading-4 text-dark hover:text-primary-green font-sans font-bold'>
        {label}
      </a>
    </Link>
  )
}

export default NavItem
