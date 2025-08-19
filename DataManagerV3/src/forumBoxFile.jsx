import { useContext, useState } from "react";
import { DataForumGlobal, DataUser, NotifObj } from "./WebJSXManager";

export function MoneyInputBox({setMoney}) {

  const [rawMoney, setRaw] = useState(0)
  const {setNotifData} = useContext(NotifObj)
  const {titleBoolean} = useContext(DataForumGlobal)
  const {Data, setDataUser} = useContext(DataUser)

  return (
    <>
      <div id="borderColor">
        <div id="forumBox" style={{
          backgroundColor: titleBoolean.titletheme ? "rgba(19, 19, 19, 1)" : "white",
          color: titleBoolean.titletheme ? "white" : "black",
          boxShadow: titleBoolean.titletheme? "0 0 20px blue" : ""
        }}>
          <h2>Input Your Money</h2>
          <input type="text" placeholder="Set Money Value"
          onChange={(e) => setRaw(parseInt(e.target.value))}
          style={{
            backgroundColor: titleBoolean.titletheme ? "rgba(61, 61, 61, 1) " : "",
            color: titleBoolean.titletheme ? "white" : ""
          }} />
          <button onClick={() => {
            setMoney(prev => ({
            ...prev,
            money: rawMoney
          }))
          setNotifData(true)
          setDataUser(prev => ({
            ...prev,
            money: rawMoney
          }))
          }}>Submit Data</button>
        </div>
      </div>
    </>
  );
}

export function DataMoneyUsageInput () {

  const {titleBoolean} = useContext(DataForumGlobal)
  const [inputdata, setData] = useState({})
  const {Data, setDataUser} = useContext(DataUser)
  
    return (
      <div id="borderColor">
        <div
          id="DataUsageInput"
          style={{
            backgroundColor: titleBoolean.titletheme
              ? "rgba(19, 19, 19, 1)"
              : "white",
            color: titleBoolean.titletheme ? "white" : "black",
            boxShadow: titleBoolean.titletheme ? "0 0 20px blue" : "",
          }}
        >
          <h2>
            What You Doin <br />
            With Your <span>Money?</span>
          </h2>
          <input
            type="text"
            placeholder="Set Item Name"
            value={inputdata.nama || ""}
            style={{
              backgroundColor: titleBoolean.titletheme
                ? "rgba(61, 61, 61, 1) "
                : "",
              color: titleBoolean.titletheme ? "white" : "",
            }}
            onChange={(e) =>
              setData((prev) => ({
                ...prev,
                nama: e.target.value,
              }))
            }
          />
          <input
            type="text"
            placeholder="Set Item Value"
            value={inputdata.harga || ""}
            style={{
              backgroundColor: titleBoolean.titletheme
                ? "rgba(61, 61, 61, 1) "
                : "",
              color: titleBoolean.titletheme ? "white" : "",
            }}
            onChange={(e) =>
              setData((prev) => ({
                ...prev,
                harga: parseInt(e.target.value),
              }))
            }
          />
          <button
            onClick={() => {
              setDataUser((prev) => ({
                ...prev,
                useritem: [
                  ...prev.useritem,
                  { nama: inputdata.nama, harga: inputdata.harga },
                ],
              }));
            }}
          >
            Submit Data
          </button>
          <button onClick={() => console.log(Data)}></button>
        </div>
      </div>
    );
}
