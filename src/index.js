import fs from 'fs'
import independent from 'independent'

export default function tonicExample (opts) {
  opts = opts || {}
  const exampleCode = fs.readFileSync(opts.rawExamplePath, 'utf8')
  independent({
    code: exampleCode,
    path: opts.rawExamplePath,
  })
  .then(tonicExample => {
    fs.writeFileSync(opts.tonicExamplePath, tonicExample, 'utf8')
  })
  .catch(err => { throw err })
}
