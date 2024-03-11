
import '../App.css'
import { productListPath } from "../routing/navigationPaths"
export function Dashboard() {
    return (
        <>
            <div className="App">
                <header className="App-header">
                    <p>
                        Hi welcome to {process.env.REACT_APP_NAME} Dashboard
                    </p>
                    <a
                        className="App-link"
                        href={productListPath}
                        rel="noopener noreferrer"
                    >
                        View Products
                    </a>
                </header>
            </div>
        </>

    )
}