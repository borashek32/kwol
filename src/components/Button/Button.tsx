import styles from './Button.module.css'
import clsx from 'clsx'
import arrow from './../../assets/icons/arrow.svg'
import trash from './../../assets/icons/trash.svg'
import plus from './../../assets/icons/plus.svg'

type Props = {
  title?: string
  color: 'gray' | 'red'
  intensity: '400' | '600' | '700' | '800'
  size?: 's' | 'm' | 'lg'
}

export const Button = ({
  title,
  color,
  intensity,
  size,
}: Props) => {

  const buttonSize = size === 's' ? styles.sSizeButton :
    size === 'm' ? styles.mSizeButton :
    size === 'lg' ? styles.lgSizeButton : {}

  const buttonStyles = clsx(styles.button, {
    [styles.cursorDefault]: intensity === '400',
  })

  return (
    <button
      className={`bg-${color}-${Number(intensity)} ${buttonStyles} ${title ? buttonSize : styles.roundButton} rounded-lg text-white font-[500]`}
    >
      {title ? (
        <>
          <img src={trash} alt='trash-icon' />
          {title}
          <img src={arrow} alt='arrow-icon' />
        </>
      ) : (
        <img src={plus} alt='plus-icon' />
      )
    }
    </button>
  )
}