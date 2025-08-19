import { useContext} from "react";
import { DataMoneyUsageInput, MoneyInputBox } from "./forumBoxFile";
import { DataForumGlobal } from "./WebJSXManager";

export function MainSection () {

    const {titleBoolean, setBolTitle} = useContext(DataForumGlobal)

    return (
      <>
        <section
          id="MainSection"
          style={{
            backgroundColor: titleBoolean.titletheme ? "rgba(19, 19, 19, 1)" : "",
          }}
        >
          <div id="MainTitle">
            <div
              id="title"
              onMouseEnter={() => setBolTitle(prev => ({
                ...prev,
                titletheme: true
              }))}
              onMouseLeave={() => setBolTitle(prev => ({
                ...prev,
                titletheme: false
              }))}
              style={{
                color: titleBoolean.titletheme ? "white" : ""
              }}
            >
              <h2>Data Manager Updated 3.0</h2>
              <div id="line" style={{
                width: titleBoolean.titletheme ? "70%" : "0%",
                boxShadow: titleBoolean.titletheme ? "0 -5px 10px rgb(0, 162, 255), 0 -10px 30px rgb(0, 162, 255)" : ""
              }}></div>
              <p>New Version Of Old Data Manager</p>
            </div>
          </div>
          <div id="MainForum">
            {titleBoolean.money > 0 ? <DataMoneyUsageInput /> : <MoneyInputBox setMoney={setBolTitle} state={titleBoolean}/>}
          </div>
        </section>
      </>
    );
}