import styles from "../../styles/About.module.css";
export default function About() {
    return(
        <>
        {/* it  access global css */}
        {/* <h1 class="red">This is About Page</h1>  */}
         {/* it  access local css means about.module.css */}
        <h1 className={styles.red}>This is About Page</h1>
        </>
    )
}