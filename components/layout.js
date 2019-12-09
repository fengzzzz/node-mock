// /components/Layout.js
import Head from 'next/head';
import 'antd/dist/antd.css'

export default ({ children }) => (
    <div>
        <Head>
            <meta name='viewport' content='width=device-width, initial-scale=1' />
            <meta charSet='utf-8' />
            <title>Next-Antd-Scafflod</title>
        </Head>
        <style jsx global>{`
      body {
      }
    `}</style>
        {children}
    </div>
);