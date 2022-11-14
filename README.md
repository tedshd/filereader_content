# filereader_content

Use FileReader API get upload file content.

It can parse content split `,` and `\n` as array in **.txt** file.

`test.txt`, `test1.txt`, `test2.txt` is test file.

## Usage

### use async await

```JavaScript
document.querySelector('input[type=file]').addEventListener('change', async (e) => {
  console.log(e.target)
  let res = await initFileContentAsync(e.target)
  console.log(res)
})
```

### normal use

```JavaScript
document.querySelector('input[type=file]').addEventListener('change', async (e) => {
  console.log(e.target)
  initFileContent(e.target, (item) => {
    console.log(item)
  })
})
```