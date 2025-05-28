import JSZip from 'jszip'
import addFilesToContainer from './html-to-docx'

async function generateContainer(
    htmlString,
    documentOptions = {},
    headerHTMLString = '',
    footerHTMLString = ''
) {
    const zip = new JSZip()
    await addFilesToContainer(zip, htmlString, documentOptions, headerHTMLString, footerHTMLString)
    const buffer = await zip.generateAsync({type: 'arraybuffer'})
    if (typeof Buffer !== 'undefined') {
        return Buffer.from(new Uint8Array(buffer))
    }
    if (typeof Blob !== 'undefined') {
        return new Blob([buffer], {
            type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
        })
    }
    throw new Error(
        'Add blob support using a polyfill eg https://github.com/bjornstar/blob-polyfill'
    )
}

export default generateContainer
