import Nav from "../components/Nav";
import "../styles/globals.css"
export default function App({ Component, pageProps }) {
  return (
    <>
      <Nav />
      <Component {...pageProps} />
      <style jsx global>{`
          a {text-decoration:none;color:#ccc;}
      `}</style>
    </>
  );
} 
