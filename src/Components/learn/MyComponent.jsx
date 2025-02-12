//JSX
//Fragment

import './style.css'
const MyComponent = () => {
    // const hoidanit = 'Eric 1'; //string
    // const hoidanit = 25; //number
    // const hoidanit = undefined; //number
    // const hoidanit = null;
    // const hoidanit = [1, 2, 3]
    const hoidanit = { name: 'Eric', age: 25 }
    return (
        <>
            <div>Hello {JSON.stringify(hoidanit)}</div>
            <div>{console.log(hoidanit.name)}</div>
            <div className="child"
                style={{ border: '1px solid red', padding: '10px' }}
            >React</div>
        </>
    )
}

export default MyComponent