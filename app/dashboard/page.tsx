 "use client"
 
 import { Button } from '@/components/ui/button'
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs'
import React from 'react'

function Dashboard() {
  return (
    <div>
      dashboard
      <Button className='rounded-xl font-bold'>
        <LogoutLink>
LogOut
        </LogoutLink>
        </Button>
    </div>
  )
}

export default Dashboard
