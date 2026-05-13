import React, { useRef } from 'react'
import Head from 'next/head'
import emailjs from 'emailjs-com'
import { BsWhatsapp, BsFacebook } from 'react-icons/bs'
import { AiOutlinePhone } from 'react-icons/ai'
import { AiOutlineMail } from 'react-icons/ai'

export default function Contact() {
  const form = useRef<HTMLFormElement>(null)
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!form.current) {
      return
    }

    emailjs
      .sendForm(
        'service_p8f68rz',
        'template_ixeh0fe',
        form.current,
        '-xo0bQBMsXWq4CwN9'
      )
      .then()
    e.currentTarget.reset()
  }

  return (
    <div className='max-w-screen-3xl font-sans'>
      <Head>
        <title>Contact - Custom Peinture et Nettoyage</title>
        <meta
          name='description'
          content='Contact us - Service de NETTOYAGE et de PEINTURE RÉSIDENTIEL'
        />
        <meta
          name='keywords'
          content='Montréal, nettoyage, peinture résidentiel, cleaning, house painting, contact'
        />
        <meta
          name='author'
          content='Marco Antonio'
        />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1'
        />
        <link
          rel='icon'
          href='/favicon.png'
        />
      </Head>
      <div className='header fixed z-10 h-16 w-full bg-neutral-950 font-sans md:h-32' />
      <div className='flex min-h-[90vh]'>
        <div className='mx-auto gap-11 pt-24 md:flex md:pt-44'>
          <div className='max-w-xs'>
            <h2 className='max-w-sm text-2xl'>
              Appelez-nous ou remplissez le formulaire pour démarrer votre
              projet.
            </h2>
            <form
              ref={form}
              onSubmit={sendEmail}
              className='flex max-w-sm flex-col'
            >
              <div className='flex gap-2'>
                <label
                  className='sr-only'
                  htmlFor='name'
                >
                  Name
                </label>
                <input
                  className='my-1 max-w-[49%] rounded border-[1px] bg-neutral-200 p-3 outline-none focus:border-neutral-400'
                  id='name'
                  type='text'
                  placeholder='Name'
                  name='name'
                  required
                />
                <label
                  className='sr-only'
                  htmlFor='email'
                >
                  Email Address
                </label>
                <input
                  className='my-1 max-w-[49%] rounded border-[1px] bg-neutral-200 p-3 outline-none focus:border-neutral-400'
                  id='email'
                  type='email'
                  placeholder='Email Address'
                  name='email'
                  required
                />
              </div>
              <label
                className='sr-only'
                htmlFor='subject'
              >
                Subject
              </label>
              <input
                className='my-1 block w-full rounded border-[1px] bg-neutral-200 p-3 outline-none focus:border-neutral-400'
                id='subject'
                type='text'
                placeholder='Subject'
                name='subject'
                required
              />
              <label
                className='sr-only'
                htmlFor='message'
              >
                Message
              </label>
              <textarea
                className='my-1 w-full resize-none rounded border-[1px] bg-neutral-200 p-3 outline-none focus:border-neutral-400'
                id='message'
                placeholder='Message'
                name='message'
                required
              />
              <button
                className='duration-250 my-1 rounded bg-orange-500 py-2 font-semibold text-white transition-all ease-in hover:bg-orange-600 active:bg-orange-700'
                type='submit'
              >
                Envoyer le message
              </button>
            </form>
          </div>
          <div className='my-4 max-w-xs'>
            <h2 className='text-base font-semibold uppercase'>
              contactez-nous
            </h2>
            <a
              href='https://wa.me/15147108532'
              target='_blank'
              rel='noreferrer'
              className='no-underline hover:underline'
            >
              <div className='flex'>
                <BsWhatsapp
                  size={14}
                  className='mt-1'
                />
                <h2 className='ml-0.5 flex text-sm font-normal'>Whatsapp</h2>
              </div>
            </a>
            <a
              href='https://www.facebook.com/renovation.cmg'
              target='_blank'
              rel='noreferrer'
              className='no-underline hover:underline'
            >
              <div className='flex'>
                <BsFacebook
                  size={14}
                  className='mt-1'
                />
                <h2 className='ml-1 flex text-sm font-normal'>Facebook</h2>
              </div>
            </a>
            <hr />
            <h2 className='text-base font-semibold uppercase'>appelez-nous</h2>
            <a
              href='tel:514 710-8532'
              target='_blank'
              rel='noreferrer'
              className='no-underline hover:underline'
            >
              <div className='flex'>
                <AiOutlinePhone
                  size={18}
                  className='-ml-0.5 mt-0.5'
                />
                <h2 className='flex text-sm font-normal'>514 710-8532</h2>
              </div>
            </a>
            <a
              href='tel:514 805-5539'
              target='_blank'
              rel='noreferrer'
              className='no-underline hover:underline'
            >
              <div className='flex'>
                <AiOutlinePhone
                  size={18}
                  className='-ml-0.5 mt-0.5'
                />
                <h2 className='flex text-sm font-normal'>514 805-5539</h2>
              </div>
            </a>
            <hr />
            <h2 className='text-base font-semibold uppercase'>
              envoyez-nous un email
            </h2>
            <a
              href='mailto:budget.cmg@gmail.com'
              target='_blank'
              rel='noreferrer'
              className='no-underline hover:underline'
            >
              <div className='flex'>
                <AiOutlineMail
                  size={16}
                  className='mt-0.5'
                />
                <h2 className='ml-0.5 flex text-sm font-normal'>
                  budget.cmg@gmail.com
                </h2>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
