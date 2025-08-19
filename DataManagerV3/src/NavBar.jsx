import { useContext } from 'react'
import './css/main.css'
import { DataForumGlobal } from './WebJSXManager'
import { useNavigate } from 'react-router-dom'

export function NavBar () {
    const {titleBoolean, setBolTitle} = useContext(DataForumGlobal)
    const PindahHalaman = useNavigate()

    return (
        <>
        <nav style={{
            backgroundColor: titleBoolean.titletheme ? "rgba(19, 19, 19, 1)" : 'white',
            boxShadow: titleBoolean.titletheme ? "0 5px 10px rgba(0, 162, 255, 0.47)" : "0 3px 4px rgba(0, 0, 0, 0.452)"
        }}>
            <h1>Amarix Project</h1>
            <div id="navlist" style={{
                color: titleBoolean.titletheme ? "white" : "black"
            }}>
                <p onClick={() => {
                    PindahHalaman('/home')
                }}>Home</p>
                <p onClick={() => {
                    PindahHalaman('/history')
                }}>History</p>
                <p onClick={() => setBolTitle(prev => ({
                    ...prev,
                    titletheme: !prev.titletheme
                }))}>Switch Mode</p>
                <p>About</p>
            </div>
        </nav>
        </>
    )
}