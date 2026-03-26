import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'

interface ContentRow {
  id: string
  section: string
  key: string
  value: string
}

const SECTION_LABELS: Record<string, string> = {
  hero: 'באנר ראשי',
  services: 'שירותים',
  resources: 'משאבים',
}

const SECTION_ORDER = ['hero', 'services', 'resources']

export default function AdminPanel() {
  const [rows, setRows] = useState<ContentRow[]>([])
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [publishing, setPublishing] = useState(false)
  const [message, setMessage] = useState('')
  const [dirty, setDirty] = useState<Set<string>>(new Set())

  useEffect(() => {
    loadContent()
  }, [])

  const loadContent = async () => {
    const { data, error } = await supabase
      .from('site_content')
      .select('*')
      .order('section')
      .order('key')

    if (error) {
      setMessage(`שגיאה בטעינה: ${error.message}`)
    } else {
      setRows(data ?? [])
    }
    setLoading(false)
  }

  const handleChange = (id: string, value: string) => {
    setRows((prev) => prev.map((r) => (r.id === id ? { ...r, value } : r)))
    setDirty((prev) => new Set(prev).add(id))
  }

  const handleSave = async () => {
    setSaving(true)
    setMessage('')

    const updates = rows.filter((r) => dirty.has(r.id))
    const { error } = await supabase.from('site_content').upsert(updates)

    if (error) {
      setMessage(`שגיאה בשמירה: ${error.message}`)
    } else {
      setMessage(`נשמרו ${updates.length} שינויים`)
      setDirty(new Set())
    }
    setSaving(false)
  }

  const handlePublish = async () => {
    const hookUrl = import.meta.env.VITE_DEPLOY_HOOK_URL as string
    if (!hookUrl) {
      setMessage('לא הוגדר Deploy Hook URL')
      return
    }

    setPublishing(true)
    try {
      await fetch(hookUrl, { method: 'POST' })
      setMessage('בנייה מחדש התחילה — האתר יתעדכן תוך דקה-שתיים')
    } catch {
      setMessage('שגיאה בפרסום')
    }
    setPublishing(false)
  }

  const handleLogout = async () => {
    await supabase.auth.signOut()
    window.location.reload()
  }

  const grouped = SECTION_ORDER.map((section) => ({
    section,
    label: SECTION_LABELS[section] ?? section,
    items: rows.filter((r) => r.section === section),
  }))

  if (loading) return <div className="admin-panel"><p>טוען...</p></div>

  return (
    <div className="admin-panel">
      <div className="admin-header">
        <h1>ניהול תוכן</h1>
        <div className="admin-actions">
          <button onClick={handleSave} disabled={saving || dirty.size === 0} className="admin-btn save">
            {saving ? 'שומר...' : `שמירה (${dirty.size})`}
          </button>
          <button onClick={handlePublish} disabled={publishing} className="admin-btn publish">
            {publishing ? 'מפרסם...' : 'פרסום לאתר'}
          </button>
          <button onClick={handleLogout} className="admin-btn logout">יציאה</button>
        </div>
      </div>

      {message && <p className="admin-message">{message}</p>}

      {grouped.map(({ section, label, items }) => (
        <div key={section} className="admin-section">
          <h2>{label}</h2>
          {items.map((row) => (
            <div key={row.id} className="admin-field">
              <label>
                <span className="admin-key">{row.key}</span>
                {row.value.includes('\n') || row.value.length > 80 ? (
                  <textarea
                    value={row.value}
                    onChange={(e) => handleChange(row.id, e.target.value)}
                    rows={3}
                  />
                ) : (
                  <input
                    type="text"
                    value={row.value}
                    onChange={(e) => handleChange(row.id, e.target.value)}
                  />
                )}
              </label>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
