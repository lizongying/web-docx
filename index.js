/* eslint-disable no-useless-escape */
import JSZip from 'jszip';
import addFilesToContainer from './src/html-to-docx';

const minifyHTMLString = (htmlString) => {
  try {
    if (typeof htmlString === 'string' || htmlString instanceof String) {
      const minifiedHTMLString = htmlString
        .replace(/[\n\r\t]+/g, ' ')
        .replace(/\s{2,}/g, ' ')
        .replace(/>\s+</g, '><')
        .trim();
      return minifiedHTMLString;
    }

    throw new Error('invalid html string');
  } catch (error) {
    console.error('[HTML Minify Error]', error.message);
    return null;
  }
};

async function generateContainer(
  htmlString,
  headerHTMLString = '',
  documentOptions = {},
  footerHTMLString = ''
) {
  const zip = new JSZip();
  await addFilesToContainer(zip, htmlString, documentOptions, headerHTMLString, footerHTMLString);
  const buffer = await zip.generateAsync({ type: 'arraybuffer' });
  if (typeof Buffer !== 'undefined') {
    return Buffer.from(new Uint8Array(buffer));
  }
  if (typeof Blob !== 'undefined') {
    return new Blob([buffer], {
      type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    });
  }
  throw new Error(
    'Add blob support using a polyfill eg https://github.com/bjornstar/blob-polyfill'
  );
}

export default generateContainer;
