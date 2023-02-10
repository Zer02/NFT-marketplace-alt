import { FunctionComponent } from "react"

const BaseLayout: FunctionComponent = ({children}) => {
    return (
        <div>
            {children}
        </div>
    )
}

export default BaseLayout