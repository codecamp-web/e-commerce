
import { useState, type ReactElement } from "react"

export function multiStepForm(steps: ReactElement[]) {
    const [stepIndex, setStepIndex] = useState(0)

    function next() {
        setStepIndex(i => {
            if (i >= steps.length) return i
            return i + 1
        })
    }

    function back(){
        setStepIndex(i => {
            if (i <= 0) return i
            return i -1 
        })
    }

    function goTo(index : number) {
        setStepIndex(index)
    }

  return {
    steps,
    step:steps[stepIndex],
    goTo,
    next, 
    back,
    stepIndex,
    isNext2Pages: stepIndex >= 1,
    isFirstStep: stepIndex === 1,
    isLastStep: stepIndex === steps.length - 1
  }
}
