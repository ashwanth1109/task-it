// ------------------------------------------------------------
// import dependencies
// ------------------------------------------------------------
import Document, { Head, Main, NextScript } from "next/document"; // Import default Document from Next JS
// ------------------------------------------------------------
// Customizing the default Document
// ------------------------------------------------------------
class MyDoc extends Document {
    render() {
        return (
            <html lang="en">
                <Head>
                    <meta charSet="utf-8" />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1, shrink-to-fit=no"
                    />
                    <link
                        href="https://fonts.googleapis.com/css?family=Lato:400"
                        rel="stylesheet"
                    />
                    {/* global styles go here - also hover, keyframe animations etc. */}
                    <style>{`
                        * {
                            margin: 0;
                            padding: 0;
                        }
                        *:focus {
                            outline: none;
                        }
                        .btn {
                            background-color: #2b88d9;
                        }
                        .btn:hover {
                            background-color: #4094dd;
                        }
                    `}</style>
                </Head>
                {/* Add body styles here */}
                <body>
                    {/* from next js documentation */}
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}
// ------------------------------------------------------------
// export customized document
// ------------------------------------------------------------
export default MyDoc;
