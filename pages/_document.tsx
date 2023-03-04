import React from 'react';
import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from 'next/document'
import { CssBaseline } from '@nextui-org/react';

/**
 * _document
 * Es un archivo de personalización de NextJS para la estructura general
 * del documento HTML generado para nuestra aplicación
 * - Cambiar el idioma
 * - Aplicar clases generales a la etiqueta body
 */
export default function MyDocument() {
  return (
    <Html lang="es-MX">
      <Head>
        {CssBaseline.flush()}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

MyDocument.getInitialProps = async(ctx: DocumentContext): Promise<DocumentInitialProps> => {
  const initialProps = await Document.getInitialProps(ctx);
  return {
    ...initialProps,
    styles: React.Children.toArray([initialProps.styles])
  };
}
