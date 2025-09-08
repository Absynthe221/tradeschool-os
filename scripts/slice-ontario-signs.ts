/*
  Utility: Slice grid images of Ontario road signs into individual assets.

  Usage (node):
    ts-node scripts/slice-ontario-signs.ts \
      --input ./assets/raw/canadian-road-traffic-signs-1.png \
      --rows 5 --cols 4 \
      --category warning \
      --prefix sheet1-

  Notes:
  - You must place raw PNG/JPG sheets under ./assets/raw/.
  - Outputs to public/signs/ontario/<category>/.
*/

import fs from 'fs'
import path from 'path'
import sharp from 'sharp'

interface Args {
  input: string
  rows: number
  cols: number
  category: 'regulatory' | 'warning' | 'information' | 'construction'
  prefix?: string
}

function parseArgs(): Args {
  const m = new Map<string, string>()
  process.argv.slice(2).forEach((arg) => {
    const [k, v] = arg.split('=')
    if (k && v) m.set(k.replace(/^--/, ''), v)
  })
  const input = m.get('input') || ''
  const rows = Number(m.get('rows') || 0)
  const cols = Number(m.get('cols') || 0)
  const category = (m.get('category') || 'warning') as Args['category']
  const prefix = m.get('prefix') || 'sign-'
  if (!input || !rows || !cols) {
    console.error('Missing required args: --input= --rows= --cols= --category=')
    process.exit(1)
  }
  return { input, rows, cols, category, prefix }
}

async function main() {
  const { input, rows, cols, category, prefix } = parseArgs()
  const inputPath = path.resolve(process.cwd(), input)
  const outputDir = path.resolve(process.cwd(), `public/signs/ontario/${category}`)
  fs.mkdirSync(outputDir, { recursive: true })

  const img = sharp(inputPath)
  const meta = await img.metadata()
  if (!meta.width || !meta.height) throw new Error('Unable to read image size')

  const cellW = Math.floor(meta.width / cols)
  const cellH = Math.floor(meta.height / rows)

  let index = 0
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const left = c * cellW
      const top = r * cellH
      const out = path.join(outputDir, `${prefix}${String(index + 1).padStart(2, '0')}.png`)
      await img.extract({ left, top, width: cellW, height: cellH }).png().toFile(out)
      index++
    }
  }
  console.log(`Sliced ${index} signs to ${outputDir}`)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})


