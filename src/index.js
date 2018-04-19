import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

const MOUNT_NODE = document.getElementById('root')

let render = () => {
	ReactDOM.render(
    	<App />,
    	MOUNT_NODE
    )
}

render()