'use client'
import { signOut } from 'next-auth/react'

export default function Login(){
    return(
        <button onClick={ () => signOut()} className=' py-3 rounded-2xl'>
       sign out
        </button>
    )
}