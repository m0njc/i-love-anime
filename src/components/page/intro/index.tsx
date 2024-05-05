'use client'

import React, { useState } from 'react'
import UserInfoForm from '@/components/organisms/userInfoForm'
import { setCookieCustom } from '@/lib/cookieCustom'
import { useRouter } from 'next/navigation'

const UserIntroPage: React.FC = () => {
    const router = useRouter()

    const [userName, setUserNameState] = useState('')
    const [jobTitle, setJobTitleState] = useState('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setCookieCustom({ userName, jobTitle })
        router.push('/content')
    }

    return (
        <UserInfoForm
            headerText="Hello! Intro please..."
            handleSubmit={handleSubmit}
            userName={userName}
            setUserNameState={setUserNameState}
            jobTitle={jobTitle}
            setJobTitleState={setJobTitleState}
        />
    )
}

export default UserIntroPage
