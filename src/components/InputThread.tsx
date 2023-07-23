'use client'

import { IconContext } from 'react-icons'
import { IoMdClose } from 'react-icons/io'
import {
  Button,
  Radio,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Textarea,
} from '@material-tailwind/react'
import useSelect from '@/hooks/useSelect'
import { useDispatch } from 'react-redux'
import { closeModalActionCreator, openModalActionCreator } from '@/states/openModal/action'

type InputProps = {
  name: string
  type: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

type TextareaProps = {
  item: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}

type OptionProps = {
  name: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

type InputThreadProps = {
  dialogHeader: string
  input?: InputProps[]
  textArea?: TextareaProps[]
  option?: OptionProps[]
  sendDialog: string
  submitHandler: React.MouseEventHandler<HTMLButtonElement>
}

export default function InputThread({
  dialogHeader,
  input,
  textArea,
  option,
  sendDialog,
  submitHandler,
}: InputThreadProps) {
  const openModal = useSelect('openModal')

  const dispatch = useDispatch()

  const onOpenModal = () => {
    dispatch(openModalActionCreator())
  }

  const onCloseModalHandler = () => {
    dispatch(closeModalActionCreator())
  }

  return (
    <div className='hidden'>
      <Dialog open={openModal} handler={onOpenModal}>
        <div className='flex items-center justify-between px-3'>
          <DialogHeader>{dialogHeader}</DialogHeader>
          <button onClick={onCloseModalHandler}>
            <IconContext.Provider value={{ size: '20px' }}>
              <IoMdClose />
            </IconContext.Provider>
          </button>
        </div>
        <DialogBody divider>
          <div className='grid gap-6'>
            {input &&
              input.map(({ name, type, value, onChange }, index) => (
                <Input key={index} label={name} name={name} type={type} onChange={onChange} value={value} />
              ))}
            {textArea &&
              textArea.map(({ item, value, onChange }, index) => (
                <Textarea key={index} label={item} name={item} onChange={onChange} value={value} />
              ))}
            {option &&
              option.map(({ name, value, onChange }, index) => (
                <Radio key={index} label={name} name={name} onChange={onChange} value={value} />
              ))}
          </div>
        </DialogBody>
        <DialogFooter className='space-x-2'>
          <Button variant='outlined' color='red' onClick={onCloseModalHandler}>
            Tutup
          </Button>
          <Button variant='gradient' color='blue' type='submit' onClick={submitHandler}>
            {sendDialog}
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  )
}
