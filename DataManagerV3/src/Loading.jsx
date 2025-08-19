import { useEffect, useState } from "react"

export function Loading () {

    const [loading, setLoading] = useState(null)

    useEffect(() => {
        

        let timerMuncul = setTimeout(() => {
            setLoading(true)
        }, 50)

        let timerIlang = setTimeout(() => {
            setLoading(false)
        }, 3000)


        return () => {
            clearTimeout(timerMuncul)
            clearTimeout(timerIlang)
        }
    }, [])

    return (
        <>
        <div id="loadingbox" className={loading ? "muncul" : "ilang"} style={{
            opacity: loading ? 1 : 0
        }}>
            <div id="loadbox">
                <h2>Data Manager 3.0</h2>
                <div id="lineload"></div>
                <h3>Amarix Project</h3>
            </div>
        </div>
        </>
    )
}