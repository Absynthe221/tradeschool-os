'use client'

import { useEffect, useMemo, useState } from 'react'
import { CheckCircle, Square } from 'lucide-react'
import { schedule1Parts } from '@/data/schedule1'

interface Props {
  partId?: string // if provided, show only that part; else show all
  storageKey: string // e.g., course+module id
}

export function Schedule1Checklist({ partId, storageKey }: Props) {
  const [checked, setChecked] = useState<Record<string, boolean>>({})

  useEffect(() => {
    try {
      const raw = localStorage.getItem(`sched1:${storageKey}`)
      if (raw) setChecked(JSON.parse(raw))
    } catch {}
  }, [storageKey])

  useEffect(() => {
    try {
      localStorage.setItem(`sched1:${storageKey}`, JSON.stringify(checked))
    } catch {}
  }, [checked, storageKey])

  const items = useMemo(() => {
    const parts = partId ? schedule1Parts.filter(p => p.id === partId) : schedule1Parts
    const list: { id: string; label: string; type: 'minor' | 'major' }[] = []
    for (const p of parts) {
      p.minorDefects.forEach((d, i) => list.push({ id: `${p.id}-m${i+1}`, label: `${p.systemOrComponent}: ${d}`, type: 'minor' }))
      p.majorDefects.forEach((d, i) => list.push({ id: `${p.id}-M${i+1}`, label: `${p.systemOrComponent}: ${d}`, type: 'major' }))
    }
    return list
  }, [partId])

  const completed = Object.values(checked).filter(Boolean).length
  const total = items.length

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4">
      <div className="flex items-center justify-between mb-3">
        <h4 className="font-semibold text-gray-900">Schedule 1 Checklist {partId ? `( ${partId} )` : ''}</h4>
        <div className="text-sm text-gray-600">{completed}/{total} completed</div>
      </div>
      <div className="space-y-2 max-h-72 overflow-auto pr-1">
        {items.map((it) => {
          const isChecked = !!checked[it.id]
          return (
            <button
              key={it.id}
              onClick={() => setChecked(prev => ({ ...prev, [it.id]: !prev[it.id] }))}
              className={`w-full flex items-start gap-2 text-left px-2 py-2 rounded border ${isChecked ? 'bg-trade-50 border-trade-200' : 'border-gray-200 hover:bg-gray-50'}`}
            >
              {isChecked ? <CheckCircle className="w-4 h-4 text-trade-600 mt-1"/> : <Square className="w-4 h-4 text-gray-400 mt-1"/>}
              <span className={`text-sm ${it.type === 'major' ? 'text-red-700' : 'text-gray-700'}`}>{it.label}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}


