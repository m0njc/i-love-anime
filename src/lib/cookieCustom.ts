'use server'

import { User } from '@/app/model/User'
import { cookies } from 'next/headers'

export async function setCookieCustom(user: User) {
    const obj = { userName: user.userName, jobTitle: user.jobTitle }
    const cookie = cookies()
    cookie.set('userDetail', JSON.stringify(obj))
}

export async function getCookieCustom(): Promise<User> {
    const cookie: string | undefined = cookies().get('userDetail')?.value
    return cookie && JSON.parse(cookie)
}
