const fs = require('fs')
const path = require('path')

const read = (filePath, encoding = 'utf8') => {
  return new Promise((resolve, reject) => {
    fs.readFile(path.resolve(__dirname, `../${filePath}`), (error, data) => {
      if (error) {
        throw error
      } else {
        encoding === 'buffer' ? resolve(data) : resolve(data.toString(encoding))
      }
    })
  })
}
module.exports = read