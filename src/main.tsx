import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import DinozCalculator from "./DinozCalculator.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <DinozCalculator />
  </StrictMode>,
)
