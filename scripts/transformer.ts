// TODO
// @ts-ignore
import TS from 'typescript';

export default function (program: TS.Program): TS.TransformerFactory<TS.SourceFile> {
    return (context: TS.TransformationContext) => (file: TS.SourceFile) => {
        console.log(file);
        return file;
    };
}
