'use client'

import React, { useEffect, useState } from 'react'
import UserInfoForm from '@/components/organisms/userInfoForm'
import { getCookieCustom, setCookieCustom } from '@/lib/cookieCustom'
import { useRouter } from 'next/navigation'

const UserIntroUpdatePage: React.FC = () => {
    const router = useRouter()

    const [userName, setUserNameState] = useState('')
    const [jobTitle, setJobTitleState] = useState('')

    useEffect(() => {
        const fetchCookie = async () => {
            const existingCookie = await getCookieCustom()
            setUserNameState(existingCookie?.userName)
            setJobTitleState(existingCookie?.jobTitle)
        }
        fetchCookie()
    }, [])

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setCookieCustom({ userName, jobTitle })
        router.push('/content')
    }

    return (
        <UserInfoForm
            headerText="Update your detail here"
            handleSubmit={handleSubmit}
            userName={userName}
            setUserNameState={setUserNameState}
            jobTitle={jobTitle}
            setJobTitleState={setJobTitleState}
        />
    )
}

export default UserIntroUpdatePage
