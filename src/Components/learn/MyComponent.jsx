//JSX
//Fragment

import './style.css'
const MyComponent = () => {
    return (
        <>
            <div>Hello World</div>
            <div className="child"
                style={{ border: '1px solid red', padding: '10px' }}
            >React</div>
        </>
    )
}

export default MyComponent