import Link from 'next/link'
import React from 'react'
import styles from "./links.module.css"


const Links = () => {

    const links = [
        {
            title : "Home" ,
            path : "/"
        },
        {
            title : "About" ,
            path : "/about"
        },
        {
            title : "Blog" ,
            path : "/blog"
        },
        {
            title : "Contact" ,
            path : "/contact"
        },
    ]


  return (
    <div className={styles.links}>
        {links.map((link) => {
            return(
                <Link key={link.path} href={link.path}>{link.title}</Link> 
            )
        })}
    </div>
  )
}


export default Links