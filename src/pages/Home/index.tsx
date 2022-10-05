import { createContext, useState } from 'react'

import { NewCycleForm } from './components/NewCycleForm'
// import { Countdown } from './components/Countdown'

import { HandPalm, Play } from 'phosphor-react'

import {
  HomeContainer,
  StartCountdownButton,
  StopCountdownButton,
} from './styles'

interface Cycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  interruptDate?: Date
  finishedDate?: Date
}

interface CyclesContextType {
  activeCycle: Cycle | undefined
}
export const CyclesContext = createContext({} as CyclesContextType)

export function Home() {
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  /* function handleCreateNewCycle(data: NewCycleFormData) {
    const id = String(new Date().getTime())

    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    }

    setCycles((oldState) => [...oldState, newCycle])
    setActiveCycleId(id)
    setAmountSecondsPassed(0)

    reset()
  } */

  function handleInterruptCycle() {
    setActiveCycleId(null)

    setCycles((oldState) =>
      oldState.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, interruptedDate: new Date() }
        } else {
          return cycle
        }
      }),
    )
  }

  /*   const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0

  const minutesAmount = Math.floor(currentSeconds / 60)
  const secondsAmount = currentSeconds % 60

  const minutes = String(minutesAmount).padStart(2, '0')
  const seconds = String(secondsAmount).padStart(2, '0') */

  /* useEffect(() => {
    if (activeCycle) {
      document.title = `${minutes}:${seconds}`
    } else {
      document.title = `Pomodoro`
    }
  }, [minutes, seconds, activeCycle]) */

  // const task = watch('task')
  // const isSubmitDisabled = !task

  return (
    <HomeContainer>
      <CyclesContext.Provider value={{ activeCycle }}>
        <form /* onSubmit={handleSubmit(handleCreateNewCycle)} */>
          <NewCycleForm />
          <Countdown />
          {activeCycle ? (
            <StopCountdownButton type="button" onClick={handleInterruptCycle}>
              <HandPalm size={24} />
              Interromper
            </StopCountdownButton>
          ) : (
            <StartCountdownButton
              /* disabled={isSubmitDisabled} */ type="submit"
            >
              <Play size={24} />
              Começar
            </StartCountdownButton>
          )}
        </form>
      </CyclesContext.Provider>
    </HomeContainer>
  )
}
