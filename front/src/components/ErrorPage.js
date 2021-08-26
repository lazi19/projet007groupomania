import React from 'react'
import '../styles/ErrorPage.css'

function ErrorPage() {
    return (
        <main>
            <h1 className="h1ErrorPage">Page Not Found Oups, cette page n'existe pas</h1>
            <p className="p1ErrorPage">We couldn't find what you were looking for.</p>
            <p className="p2ErrorPage"> Please contact the owner of the site that linked you to the original URL and let them know their link is broken.</p>
        </main>
    )
}

export default ErrorPage
