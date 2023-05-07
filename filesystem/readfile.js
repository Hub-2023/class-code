import { getFileInfo } from './date.js'

let fileName = document.getElementById('name')
let output = document.getElementById('output')

export const fileInput = document.getElementById('file-input')
const fileButton = document.getElementById('file-button')

fileButton.addEventListener('click', () => {
    fileInput.click()
})

fileInput.addEventListener('change', () => {
    let fr = new FileReader();
    fr.readAsText(fileInput.files[0])

    fr.onload = async function() {
        output.textContent = fr.result 
        let fileInfo = await getFileInfo(fileInput.files[0])
        fileName.textContent = fileInfo
        
        console.log('Rendered at: ', new Date)
    } 
})