import { Field, Input, Label } from '@headlessui/react'

export default function Inpute () {

  return(

    <Field>
      <Label>Name</Label>
      <Input name="full_name" />
    </Field>
   
)
}