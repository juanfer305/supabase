import clsx from 'clsx'
import { FC } from 'react'

interface Props {
  options: any
  width?: number
  activeOption: any
  onClickOption: any
  borderOverride: string
}

const TwoOptionToggle: FC<Props> = ({
  options,
  width = 50,
  activeOption,
  onClickOption,
  borderOverride = 'border-gray-600 dark:border-gray-800',
}) => {
  const buttonStyle = (
    isActive: boolean
  ) => `absolute top-0 z-1 text-xs inline-flex h-full items-center justify-center font-medium
    ${
      isActive ? 'hover:text-white' : 'hover:text-gray-600'
    } dark:hover:text-white focus:z-10 focus:outline-none focus:border-blue-300 focus:ring-blue
    transition ease-in-out duration-150`

  return (
    <div
      className={`relative border ${borderOverride} rounded-md h-8`}
      style={{ padding: 1, width: (width + 1) * 2 }}
    >
      <span
        style={{ width, translate: activeOption === options[1] ? '0px' : `${width - 2}px` }}
        aria-hidden="true"
        className={clsx(
          'z-0 inline-block rounded h-full dark:bg-scale-600 shadow transform',
          'transition-all ease-in-out border border-scale-700'
        )}
      ></span>
      {options.map((option: any, index: number) => (
        <span
          key={`toggle_${index}`}
          style={{ width: width + 1 }}
          className={`
              ${activeOption === option ? 'text-scale-1200' : 'text-scale-1000'} 
              ${index === 0 ? 'right-0' : 'left-0'} 
              ${buttonStyle(activeOption === option)}
              cursor-pointer
            `}
          onClick={() => onClickOption(option)}
        >
          <span className="text-color-inherit capitalize">{option}</span>
        </span>
      ))}
    </div>
  )
}

export default TwoOptionToggle
