const submitbutton = document.getElementById('submit')
const submitfilter = document.getElementById('filter')
const output = document.getElementById('outputbox')
const clear = document.getElementById('clear')
const total = document.getElementById('total')

let UserData = []
let editIndex = null

function UserDataProcess () {
    output.innerHTML = ""
    UserData.forEach((item, i) => {
        const div = document.createElement('div')
        div.classList.add('outputchild')
        div.dataset.index = i
        div.addEventListener('click', (e) => {
            const index = (e.currentTarget.dataset.index)
            const selected = UserData[index]

            document.getElementById('nama').value = selected.nama
            document.getElementById('nilai').value = selected.nilai
            document.getElementById('sekolah').value = selected.sekolah

            editIndex = index
            submitbutton.textContent = "Update Data"
        })
        Object.keys(item).forEach(keys => {
            const p = document.createElement('p')
            p.textContent = `${keys}: ${item[keys]}`
            div.appendChild(p)
        })
        output.appendChild(div)
    })
}

function UserDataRenderHandle (nama, nilai, sekolah) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!nama || !nilai || !sekolah) {
            reject("invalid bro")
            } else {
            UserData.push({
                nama: nama,
                nilai: nilai,
            sekolah: sekolah
            })
            UserDataProcess()
            resolve("successss")
        }
        }, 2000)
    })
}

async function DataRender(nama, nilai, sekolah) {
    output.innerHTML = "loading..."
    try {
        const msg = await UserDataRenderHandle(nama, nilai, sekolah)
        console.log(msg)

        document.getElementById('nama').value = ""
        document.getElementById('nilai').value = ""
        document.getElementById('sekolah').value = ""
    } catch (err) {
        console.log(err)
        output.innerHTML = "Error No Input :)"
        alert("Error")
        setTimeout(() => {
            UserDataProcess()
        }, 2000)
    }
}

submitbutton.addEventListener('click', () => {
    const nama = document.getElementById('nama').value
    const nilai = parseInt(document.getElementById('nilai').value)
    const sekolah = document.getElementById('sekolah').value

    if(editIndex !== null) {
        UserData[editIndex] = { nama, nilai, sekolah }
        editIndex = null
        submitbutton.textContent = "Submit Form"
        output.innerHTML = "Changing Data..."
        setTimeout(() => {
          UserDataProcess()
        }, 2000)
    } else {
        DataRender(nama, nilai, sekolah)
    }

    document.getElementById('nama').value = ""
    document.getElementById('nilai').value = ""
    document.getElementById('sekolah').value = ""
})

function FilterUser (FilterValue) {
    output.innerHTML = ""

    UserData.forEach(item => {
        if (item.nilai > FilterValue) {
            const DivFilter = document.createElement('div')
            DivFilter.classList.add('outputchild')
            Object.keys(item).forEach(keys => {
                const p = document.createElement('p')
                p.textContent = `${keys}: ${item[keys]}`
                DivFilter.appendChild(p)
            })
            output.appendChild(DivFilter)
        }
    })
}

function FilterUserPromise(FilterValue) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!FilterValue) {
                reject("Enter Valid Input (-__-)")
            } else {
                resolve("Good Job")
            }
        }, 2000)
    })
}

async function FilterUserHandle (FilterValue) {
    output.innerHTML = "Filtering Process..."
    try {
        const msg =  await FilterUserPromise(FilterValue)
        console.log(msg)
        FilterUser(FilterValue)
    } catch (err) {
        console.log(err)
        output.innerHTML = err
        setTimeout(() => {
            UserDataProcess()
        }, 2000)
    }
}

submitfilter.addEventListener('click', () => {
    const FilterValue = parseInt(document.getElementById('filterinput').value)
    FilterUserHandle(FilterValue)
})

clear.addEventListener('click', () => {
    output.innerHTML = "Cleaning Your Heart (UwU)...."
    setTimeout(() => {
        UserDataProcess()
    }, 1500)
})

total.addEventListener("click", () => {
  let totalnilai = 0;
  UserData.forEach((item) => {
    totalnilai += item.nilai;
  });

  output.innerHTML = "Counting... Please wait...";
  setTimeout(() => {
    if (UserData.length === 0) {
      alert("Error, no data...");
      UserDataProcess();
      return;
    } else {
      alert(`Your Nilai is ${totalnilai}...`);
      UserDataProcess();
    }
  }, 2000);
});