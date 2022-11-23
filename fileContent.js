const e = require("express")

function initFileContent(inputFileDom, callback) {
  const [file] = inputFileDom.files
  const reader = new FileReader()

  function checkResult(res) {
    let tmpArr = []
    let tmpArr2 = []
    let resultArr = []
    tmpArr = res.split('\n')
    for (let i = 0; i < tmpArr.length; i++) {
      const element = tmpArr[i]
      if (element === '\n' ||
        element === '') {
        continue
      }
      if (element.includes(',')) {
        tmpArr2 = element.split(',')
        for (let k = 0; k < tmpArr2.length; k++) {
          const element2 = tmpArr2[k];
          if (element2 === '\n' ||
            element2 === '') {
            continue
          }
          resultArr.push(element2.trim())
        }
        continue
      }
      resultArr.push(element.trim())
    }
    return resultArr
  }

  if (file) {
    reader.readAsText(file)
  }
  reader.addEventListener('load', () => {
    if (callback) {
      callback(checkResult(reader.result))
    } else {
      console.error('initFileContent: not set callback to get item')
    }
  }, false)
}

function initFileContentAsync(inputFileDom) {
  const [file] = inputFileDom.files
  const reader = new FileReader()

  function checkResult(res) {
    let tmpArr = []
    let tmpArr2 = []
    let resultArr = []
    tmpArr = res.split('\n')
    for (let i = 0; i < tmpArr.length; i++) {
      const element = tmpArr[i]
      if (element === '\n' ||
        element === '') {
        continue
      }
      if (element.includes(',')) {
        tmpArr2 = element.split(',')
        for (let k = 0; k < tmpArr2.length; k++) {
          const element2 = tmpArr2[k];
          if (element2 === '\n' ||
            element2 === '') {
            continue
          }
          resultArr.push(element2.trim())
        }
        continue
      }
      resultArr.push(element.trim())
    }
    return resultArr
  }

  console.log(file)

  if (file) {
    if (file.type === 'text/plain' ||
      file.type === 'text/csv') {
        reader.readAsText(file)
    } else {
      console.error('file type error: only txt or csv')
    }
  }

  return new Promise(resolve => {
    reader.addEventListener('load', () => {
      console.log(reader)
      resolve(checkResult(reader.result))
    }, false)
  })

}