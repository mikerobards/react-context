import React from "react"
import { ThemeContextConsumer } from './ThemeContext'

function Header(props) {
    return (
        <ThemeContextConsumer>
            {context => (
                <header className={`${context.theme}-theme`}>
                    <h2>{context.theme === "light" ? "Light" : "Dark"} Theme</h2>
                </header>
            )}
        </ThemeContextConsumer>
    )
}

// Header.contextType = ThemeContext
// used static to replace

export default Header
