'use client'

import { useMemo, useState } from 'react'
import { Copy, Plus, Trash2 } from 'lucide-react'

interface DefectRow {
  id: string
  text: string
}

export function Schedule1Form() {
  const [part, setPart] = useState('Part X')
  const [system, setSystem] = useState('System / Component')
  const [minor, setMinor] = useState<DefectRow[]>([])
  const [major, setMajor] = useState<DefectRow[]>([])

  const addMinor = () => setMinor(prev => [...prev, { id: crypto.randomUUID(), text: '' }])
  const addMajor = () => setMajor(prev => [...prev, { id: crypto.randomUUID(), text: '' }])
  const removeMinor = (id: string) => setMinor(prev => prev.filter(r => r.id !== id))
  const removeMajor = (id: string) => setMajor(prev => prev.filter(r => r.id !== id))

  const json = useMemo(() => {
    return {
      id: part.trim().toLowerCase().replace(/\s+/g, '-'),
      part,
      systemOrComponent: system,
      minorDefects: minor.map(m => m.text).filter(Boolean),
      majorDefects: major.map(m => m.text).filter(Boolean)
    }
  }, [part, system, minor, major])

  const jsonString = useMemo(() => JSON.stringify(json, null, 2), [json])

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(jsonString)
      alert('Copied JSON to clipboard. Paste into data/schedule1.ts')
    } catch {}
  }

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
      <h3 className="text-lg font-semibold mb-4">Schedule 1 Builder</h3>
      <p className="text-sm text-gray-600 mb-6">Enter a Schedule 1 row and copy the generated JSON into <code>data/schedule1.ts</code>.</p>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Part</label>
          <input value={part} onChange={e => setPart(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">System / Component</label>
          <input value={system} onChange={e => setSystem(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-medium">Minor Defects</h4>
            <button onClick={addMinor} className="text-primary-600 text-sm inline-flex items-center"><Plus className="w-4 h-4 mr-1"/>Add</button>
          </div>
          <div className="space-y-2">
            {minor.map((row, idx) => (
              <div key={row.id} className="flex items-center gap-2">
                <span className="text-xs text-gray-500 w-5">{idx+1}.</span>
                <input value={row.text} onChange={e => setMinor(prev => prev.map(r => r.id === row.id ? { ...r, text: e.target.value } : r))} className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm" placeholder="Enter minor defect" />
                <button onClick={() => removeMinor(row.id)} className="text-red-600"><Trash2 className="w-4 h-4"/></button>
              </div>
            ))}
            {minor.length === 0 && <div className="text-xs text-gray-500">No minor defects added</div>}
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-medium">Major Defects</h4>
            <button onClick={addMajor} className="text-primary-600 text-sm inline-flex items-center"><Plus className="w-4 h-4 mr-1"/>Add</button>
          </div>
          <div className="space-y-2">
            {major.map((row, idx) => (
              <div key={row.id} className="flex items-center gap-2">
                <span className="text-xs text-gray-500 w-5">{idx+1}.</span>
                <input value={row.text} onChange={e => setMajor(prev => prev.map(r => r.id === row.id ? { ...r, text: e.target.value } : r))} className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm" placeholder="Enter major defect" />
                <button onClick={() => removeMajor(row.id)} className="text-red-600"><Trash2 className="w-4 h-4"/></button>
              </div>
            ))}
            {major.length === 0 && <div className="text-xs text-gray-500">No major defects added</div>}
          </div>
        </div>
      </div>

      <div className="mt-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">Generated JSON</label>
        <div className="relative">
          <pre className="bg-gray-50 rounded-lg p-4 text-xs overflow-auto border border-gray-200 whitespace-pre-wrap">{jsonString}</pre>
          <button onClick={copy} className="absolute top-2 right-2 text-sm bg-primary-600 text-white px-2 py-1 rounded inline-flex items-center"><Copy className="w-4 h-4 mr-1"/>Copy</button>
        </div>
      </div>
    </div>
  )
}


