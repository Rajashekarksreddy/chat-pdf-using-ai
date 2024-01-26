'use client'

import { signIn } from 'next-auth/react'

export default function Login(){
    return(
        <button onClick={() => signIn()} className=' py-3 rounded-2xl'>
       sign in
        </button>
    )
}