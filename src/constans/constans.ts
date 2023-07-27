import dayjs from "dayjs";

export const category = [
  {label: 'Все', value: ''},
  {label: 'Монитор', value: 'Monitors'},
  {label: 'Клавиатура', value: 'Keyboard'},
]

export const textAnimation = {
  hidden: {
    x: 60,
    opacity: 0,
  },
  visible: (custom: number) => ({
    x: 0,
    opacity: 1,
    transaction: {delay: custom * 0.2}
  })
}

export const weekday = dayjs(new Date().toDateString()).format('dddd')
export const month = dayjs(new Date().toDateString()).format('D MMM, YYYY')