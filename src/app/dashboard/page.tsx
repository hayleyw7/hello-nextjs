// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL

// import React from 'react';
// import Link from 'next/link'
// import { usePathname } from 'next/navigation'
import { Links } from '../components/links'

export default function Page() {
  return (
    <div>
      <nav id="navbar">
        <Links />
      </nav>
      <h1>Dashboard</h1>
    </div>
  )
}
