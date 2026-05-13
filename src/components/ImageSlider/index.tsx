import React, { type TouchEvent, useRef, useState } from 'react'
import Image, { type StaticImageData } from 'next/image'
import { HiSelector } from 'react-icons/hi'
import useModal from '@/stores/useModal'

type SliderProps = {
  Image1: StaticImageData
  Image2: StaticImageData
}

export default function ImageSlider({ Image1, Image2 }: SliderProps) {
  const [imageRevealFraction, setImageRevealFraction] = useState(0.5)
  const imageContainer = useRef<HTMLDivElement>(null)

  const slide = (xPosition: number): void => {
    const containerBoundingRect =
      imageContainer.current?.getBoundingClientRect()
    if (containerBoundingRect) {
      setImageRevealFraction(() => {
        if (xPosition < containerBoundingRect.left) {
          return 0
        }

        if (xPosition > containerBoundingRect.right) {
          return 1
        }

        return (
          (xPosition - containerBoundingRect.left) / containerBoundingRect.width
        )
      })
    }
  }

  const handleMouseMove = (event: MouseEvent): void => {
    slide(event.clientX)
  }

  const handleMouseDown = (): void => {
    window.onmousemove = handleMouseMove
    window.onmouseup = handleMouseUp
  }

  const handleMouseUp = (): void => {
    window.onmousemove = null
    window.onmouseup = null
  }

  const handleTouchMove = (event: TouchEvent<HTMLButtonElement>): void => {
    slide(event.touches.item(0).clientX)
  }

  const { setModal, setModalImage, setModalTitle } = useModal()

  const handleClickImage1 = () => {
    setModal(true)
    setModalImage(Image1)
    setModalTitle('Avant')
  }

  const handleClickImage2 = () => {
    setModal(true)
    setModalImage(Image2)
    setModalTitle('Après')
  }

  return (
    <div
      ref={imageContainer}
      className='relative mx-auto w-full max-w-lg select-none'
    >
      <div className='flex justify-start'>
        <button
          type='button'
          className='absolute top-72 z-10 h-20 w-1/2 border-0 bg-neutral-950/70 p-0'
          onClick={handleClickImage1}
        >
          <h3 className='mt-3 cursor-pointer text-center text-white hover:underline'>
            Avant
          </h3>
        </button>
        <Image
          src={Image2}
          alt=''
          className='pointer-events-none h-[23rem] object-cover'
        />
      </div>
      <div className='flex justify-end'>
        <button
          type='button'
          className='absolute top-72 z-10 h-20 w-1/2 border-0 bg-neutral-950/70 p-0'
          onClick={handleClickImage2}
        >
          <h3 className='mt-3 cursor-pointer text-center text-white hover:underline'>
            Après
          </h3>
        </button>
        <Image
          src={Image1}
          alt=''
          className='pointer-events-none absolute inset-0 h-[23rem] object-cover'
          style={{
            clipPath: `polygon(
              0 0,
              ${imageRevealFraction * 100}% 0,
              ${imageRevealFraction * 100}% 100%,
              0 100%
              )`,
          }}
        />
      </div>
      <div
        className='absolute inset-y-0'
        style={{ left: `${imageRevealFraction * 100}%` }}
      >
        <div className='relative h-full'>
          <div className='absolute inset-y-0 -ml-px w-0.5 bg-white opacity-50'></div>
          <button
            type='button'
            aria-label='Déplacer le séparateur des images avant et après'
            onMouseDown={handleMouseDown}
            onTouchMove={handleTouchMove}
            className='absolute top-1/2 -ml-6 -mt-6 flex size-12 cursor-pointer items-center justify-center rounded-full border-0 bg-white p-0 shadow-xl'
            style={{ touchAction: 'none' }}
          >
            <HiSelector
              size={24}
              className='rotate-90 transform text-neutral-400'
            />
          </button>
        </div>
      </div>
    </div>
  )
}
