import { useState, MouseEvent } from 'react'
import Head from 'next/head'

import HomeContainer from '@/container/HomeContainer'
import Modal from '@/components/Modal'

// "/" 시작점
export default function Home() {

  const [ modalDisplay, setModalDisplay ] = useState<string>('none') ;
  const [ url, _ ] = useState<string>('https://www.figma.com/file/lvUDqIdcbotFW89qopLd8K/G') ;

  const onClickModalDisplay = ( e : MouseEvent<HTMLElement> ) => {
    setModalDisplay(modalDisplay !== 'none' ? 'none' : 'flex') ;
  }

  return (
    <>
      <Head>
      </Head>
      <main id = "wrap">
        <HomeContainer 
          onClickModalDisplay = { onClickModalDisplay }
        />
        <Modal 
          modalDisplay = { modalDisplay }
          url = { url }
          onClickModalDisplay = { onClickModalDisplay }
        />
      </main>
    </>
  )
}
