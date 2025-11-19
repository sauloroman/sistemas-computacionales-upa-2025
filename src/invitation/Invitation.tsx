import React from 'react'
import { Hero } from './Hero'
import { Student } from './Student'
import { Phrase } from './Phrase'
import { Timer } from './Timer'
import { Location } from './Location'
import { Students } from './Students'
import { Itinerary } from './Itinerary'
import { PhotoModal } from '../components/PhotoModal'
import { useUI } from '../hooks/useUI'
import { Farewell } from './Farewell'
import { Footer } from '../components/Footer'
import { ButtonMenu } from '../components/ButtonMenu'

export const Invitation: React.FC = () => {
  const { isModalOpen, isDrawerOpen } = useUI()

  return (
    <>
      <Hero />
      <Phrase />
      <Student />
      <Timer />
      <Location />
      <Students />
      <Itinerary />
      <Farewell />
      <Footer />
      { !isDrawerOpen && <ButtonMenu /> }
      { isModalOpen && <PhotoModal /> }
    </>
  )
}
  