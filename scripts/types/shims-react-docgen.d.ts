
declare module 'react-docgen/dist/main.js' {
    interface ParseOption {
        filename?: string;
    }
    function parse(src: string, resolver: any, handlers: any, options: ParseOption): any;
}
