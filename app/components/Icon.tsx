type Props = {
  name: string;
  className?: string;
}

export default function Icon({ name, className }: Props) {
  return (
    <svg className={className}>
      <use href={`/images/sprite.svg#${name}`} />
    </svg>
  )
}