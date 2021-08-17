import { withLDConsumer } from 'launchdarkly-react-client-sdk'
import React from 'react'

function ExampleComponent(props: any): JSX.Element {
    return (
        <div>
            <h2>Flags:</h2>
            <pre>
                {JSON.stringify(props.flags)}
            </pre>
        </div>
    )
}

export default withLDConsumer()(ExampleComponent)
