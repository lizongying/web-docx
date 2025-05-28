/**
 * Web-DOCX Library - TypeScript Declaration
 * Converts HTML content to DOCX documents with customizable options
 */
declare namespace HtmlToDocx {
    /**
     * Document margin configuration (units: twips, 1twip = 1/20 point = 1/1440 inch)
     */
    interface Margins {
        top?: number;       // Top margin
        right?: number;     // Right margin
        bottom?: number;    // Bottom margin
        left?: number;      // Left margin
        header?: number;    // Header margin
        footer?: number;    // Footer margin
        gutter?: number;    // Gutter margin for binding
    }

    /**
     * Page size configuration (units: twips)
     */
    interface PageSize {
        width?: number;     // Page width
        height?: number;    // Page height
    }

    /**
     * Table row configuration
     */
    interface Row {
        cantSplit?: boolean; // Prevent row from splitting across pages
    }

    /**
     * Table configuration
     */
    interface Table {
        row?: Row;          // Row-specific configuration
    }

    /**
     * Line numbering configuration options
     */
    interface LineNumberOptions {
        start: number;                 // Starting line number
        countBy: number;               // Increment step for line numbers
        restart: 'continuous' | 'newPage' | 'newSection'; // Restart mode
    }

    /**
     * Document metadata configuration
     */
    interface DocumentMeta {
        title?: string;              // Document title
        subject?: string;            // Document subject
        creator?: string;            // Document creator
        keywords?: string[];         // Document keywords
        lastModifiedBy?: string;     // Last modified by
        revision?: number;           // Revision number
        createdAt?: Date;            // Creation date
        modifiedAt?: Date;           // Modification date
    }

    /**
     * Document configuration options
     */
    interface DocumentOptions extends DocumentMeta {
        orientation?: 'portrait' | 'landscape'; // Page orientation
        pageSize?: PageSize;                   // Page dimensions
        margins?: Margins;                     // Page margins
        headerType?: 'default' | 'first' | 'even'; // Header type
        footerType?: 'default' | 'first' | 'even'; // Footer type
        footer?: boolean;                      // Include footer
        font?: string;                         // Default font
        fontSize?: number;                     // Default font size
        complexScriptFontSize?: number;        // Complex script font size
        table?: Table;                         // Table configuration
        pageNumber?: boolean;                  // Include page numbers
        skipFirstHeaderFooter?: boolean;       // Skip header/footer on first page
        lineNumber?: boolean;                  // Include line numbers
        lineNumberOptions?: LineNumberOptions; // Line number options
        numbering?: {                          // Numbering configuration
            defaultOrderedListStyleType?: string; // Default ordered list style
        };
        decodeUnicode?: boolean;               // Decode Unicode characters
        lang?: string;                         // Document language (BCP 47)
    }
}

/**
 * Convert HTML string to DOCX document
 * @param htmlString Main content HTML string
 * @param documentOptions Document configuration options (optional)
 * @param headerHTMLString Header HTML string (optional)
 * @param footerHtmlString Footer HTML string (optional)
 * @returns Promise resolving to a Buffer (Node.js) or Blob (browser) containing the DOCX file
 */
declare function HtmlToDocx(
    htmlString: string,
    documentOptions?: HtmlToDocx.DocumentOptions,
    headerHTMLString?: string | null,
    footerHtmlString?: string | null
): Promise<Blob | Buffer>

/**
 * Web-DOCX module for converting HTML to DOCX documents
 */
declare module 'web-docx' {
    export default HtmlToDocx
}