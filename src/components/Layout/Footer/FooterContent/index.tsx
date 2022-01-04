import Link from 'next/link'

interface Props {
  title?: string
  content: Content[] | string[]
}

interface Content {
  label: string
  href: string
}

const FooterContent = ({ title, content }: Props) => {
  return (
    <div>
      <div className='flex flex-col'>
        <h2 className='text-dark font-sans font-bold text-heading-4 mb-4'>
          {title}
        </h2>
        {content.map((item: Content | string, index: number) => {
          if (typeof item !== 'string') {
            return (
              <Link href={item.href} key={index}>
                <a className='text-heading-5 text-gray mb-2'>{item.label}</a>
              </Link>
            )
          }

          return (
            <p className='text-heading-5 text-gray mb-2' key={index}>
              {item}
            </p>
          )
        })}
      </div>
    </div>
  )
}

export default FooterContent
