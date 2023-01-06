const fs = require('fs')

fs.readFile('text.docx', 'utf-8', (err, data) => {
  console.log(data, 'data')
})

