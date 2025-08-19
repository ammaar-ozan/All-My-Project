import React, { useContext } from "react"
import { DataForumGlobal, DataUser } from "./WebJSXManager"

export function HistoryPage () {

    const {titleBoolean} = useContext(DataForumGlobal)
    const {Data} = useContext(DataUser)


    console.log(Data)

    return (
      <>
        <section
          id="historysec"
          style={{
            backgroundColor: titleBoolean.titletheme
              ? "rgba(19, 19, 19, 1)"
              : "",
          }}
        >
          <div id="tablebox" style={{
            boxShadow: titleBoolean.titletheme ? "0 0 10px rgba(0, 104, 189, 0.418)" : ""
          }}>
            <div id="table">
                <div id="kolomhead" style={{
                    backgroundColor: titleBoolean.titletheme ? "rgba(19, 19, 19, 1)" : "",
                    color: titleBoolean.titletheme ? "white" : ""
                }}>
                    <h2 className={titleBoolean.titletheme ? "borderanim" : "" }>No</h2>
                    <h2 className={titleBoolean.titletheme ? "borderanim" : "" }>Nama Item</h2>
                    <h2 className={titleBoolean.titletheme ? "borderanim" : "" }>Harga Item</h2>
                </div>
                <div id="kolomchild" style={{
                    backgroundColor: titleBoolean.titletheme ? "rgba(19, 19, 19, 1)" : ""}}>
                      {Data.useritem?.map((item, index) => (
                        <div key={index} className="child" style={{
                          color: titleBoolean.titletheme ? "white" : ""
                        }}>
                          <h4>{index + 1}</h4>
                          <h4>{item.nama}</h4>
                          <h4>Rp.{item.harga.toLocaleString()}</h4>
                        </div>
                      ))}
                </div>
            </div>
          </div>
          <MoneyBox/>
        </section>
      </>
    );
}

function MoneyBox () {
  const {Data} = useContext(DataUser)

  let TotalItem = () => {
    return Data.useritem.reduce((acc, curr) => {
      return acc + curr.harga
    }, 0)
  }

  let MoneyTotal = () => {
    return Data.money - TotalItem()
  }

  console.log(TotalItem())

  return (
    <div id="moneybox">
      <h2>Money: Rp.{MoneyTotal().toLocaleString()}</h2>
    </div>
  );
}