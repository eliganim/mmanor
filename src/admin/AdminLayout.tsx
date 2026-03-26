import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'
import AdminLogin from './AdminLogin'
import AdminPanel from './AdminPanel'
import './admin.css'

export default function AdminLayout() {
  const [authed, setAuthed] = useState<boolean | null>(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setAuthed(!!data.session)
    })

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setAuthed(!!session)
    })

    return () => listener.subscription.unsubscribe()
  }, [])

  if (authed === null) return <div className="admin-loading">טוען...</div>
  if (!authed) return <AdminLogin onLogin={() => setAuthed(true)} />
  return <AdminPanel />
}
