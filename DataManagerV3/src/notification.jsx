import { useContext, useEffect } from "react"
import { DataForumGlobal, NotifObj } from "./WebJSXManager"

export function MoneyEntered () {

    const {notifdata, setNotifData} = useContext(NotifObj)
    const {titleBoolean} = useContext(DataForumGlobal)

    useEffect(() => {
        let timer = setTimeout(() => {
          setNotifData(false);
        }, 3000);

        return () => clearTimeout(timer)
    }, [notifdata])

    return (
        <>
        <div id="notifbox" className={notifdata ? "muncul" : ""} style={{
            backgroundColor: titleBoolean.titletheme ? "rgba(19, 19, 19, 1)" : "white",
            color: titleBoolean.titletheme ? "white" : "black"
        }}>
            {titleBoolean.money <= 0 ? <p>Nothing to entered</p> : <p>Rp.{titleBoolean.money.toLocaleString()} Entered</p>}
        </div>
        </>
    )
}