import { createContext, useState } from "react";
import { MainSection } from "./MainSection";
import { NavBar } from "./NavBar";
import { MoneyEntered } from "./notification";
import { Loading } from "./Loading";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { HistoryPage } from "./HistoryPage";

export let DataForumGlobal = createContext()
export let NotifObj = createContext()
export let DataUser = createContext()

export function WebCore () {

    const [titleBoolean, setBolTitle] = useState({
        titletheme: null,
        money: 0
    })
    const [notifdata, setNotifData] = useState(null)
    const [Data, setDataUser] = useState({
      money: 0,
      useritem: []
    })



    return (
      <BrowserRouter>
        <DataUser.Provider value={{ Data, setDataUser }}>
          <DataForumGlobal.Provider value={{ titleBoolean, setBolTitle }}>
            <NotifObj.Provider value={{ notifdata, setNotifData }}>
              <Loading />
              <NavBar />
              <MoneyEntered />
              <Routes>
                <Route index element={<MainSection />} />
                <Route path="/home" element={<MainSection />} />
                <Route path="/history" element={<HistoryPage />} />
              </Routes>
            </NotifObj.Provider>
          </DataForumGlobal.Provider>
        </DataUser.Provider>
      </BrowserRouter>
    );
}