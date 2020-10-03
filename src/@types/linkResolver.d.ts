import 'prismic-reactjs'

declare module 'prismic-reactjs' {
    interface RichTextProps {
        linkResolver?: (doc:any) => string;
    }
}