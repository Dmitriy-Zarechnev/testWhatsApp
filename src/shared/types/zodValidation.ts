import {z} from 'zod'

const idInstanceRegex = /^\d+$/
const phoneNumberRegex = /^\+?[1-9]\d{1,14}$/

export const AddInstancesSchema = z.object({
    idInstance: z.string()
        .regex(idInstanceRegex, 'Поле должно содержать только цифры')
        .min(1, 'Поле не может быть пустым'),
    apiTokenInstance: z.string().min(1, 'Поле не может быть пустым')
})

export const AddPhoneNumberSchema = z.object({
    phoneNumber: z.string()
        .regex(phoneNumberRegex, 'Неверный формат номера телефона')
        .min(10, 'Номер телефона должен содержать минимум 10 цифр')
        .max(15, 'Номер телефона не может содержать более 15 цифр')
})

export type AddInstancesFormValues = z.infer<typeof AddInstancesSchema>
export type AddPhoneNumberFormValues = z.infer<typeof AddPhoneNumberSchema>
