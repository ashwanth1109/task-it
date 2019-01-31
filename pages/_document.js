// ------------------------------------------------------------
// import dependencies
// ------------------------------------------------------------
import Document, { Head, Main, NextScript } from "next/document"; // Import default Document from Next JS
import color from "../styles/color";
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
                            box-sizing: border-box;
                        }
                        *:focus {
                            outline: none;
                        }
                        .btn1 {
                            background-color: ${color.royalBlue};
                        }
                        .btn1:hover {
                            background-color: ${color.lightRoyal};
                        }
                        .btn2 {
                            background-color: ${color.salmon}
                        }
                        .btn2:hover {
                            background-color: ${color.coral}
                        }
                    `}</style>
                </Head>
                {/* Add body styles here */}
                <body style={{ backgroundColor: color.royalBlue }}>
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
