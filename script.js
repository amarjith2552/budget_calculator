function regi(){
    let budget={
        uname:uname.value,
        email:email.value,
        psd : document.getElementById('psd').value
    }

    if(budget.uname=='' || budget.email=='' || budget.psd==''){
        alert('fill all datas')
    }
    else{
        if(budget.uname in localStorage){
            alert('user already existed')
        }
        else{
            localStorage.setItem(budget.uname,JSON.stringify(budget))
            alert('account created successfully')
            window.location='./index.html'
        }
    }

}

function login(){
    let uname=document.getElementById('uname').value
    let psd=document.getElementById('psd').value

    if(uname=='' || psd==''){
        alert('fill all datas')
    }
    else{
        if(uname in localStorage){
           let budget= JSON.parse(localStorage.getItem(uname))
            if(psd==budget.psd){
                alert('login successfull')
                window.location='./home.html'
            }
            else{
                kk.innerHTML=`incorrect password`
            }
        }
        else{
            kk.innerHTML=`account does not exist...! create new account`
            window.location='./regi.html'
        }
    }
}

//-----home-----------


//log out
function logout(){
localStorage.clear()
window.location='./index.html'
}

//clear
function clear1(){
    localStorage.removeItem('budgetData')
}

//income
let balu = {
    balance: 0,
    spend: 0
  };
  
  function addIncome() {
    let type = document.getElementById('type').value;
    let amount = Math.floor(parseFloat(document.getElementById('amount').value));
  
    if (type === '' || isNaN(amount) || amount <= 0) {
        alert('Enter valid Data')
    } else {
      balu.balance += amount;
      updateLocalStorageAndUI();
      updateUI(type, amount, 'income');
    }
  }
  
  function addExpense() {
    let type1 = document.getElementById('type1').value;
    let amount1 = Math.floor(parseFloat(document.getElementById('amount1').value));
  
    if (type1 === '' || isNaN(amount1) || amount1 <= 0) {
      alert('Enter valid data');
    } else {
      if (amount1 <= balu.balance) {
        balu.spend += amount1;
        balu.balance -= amount1;
        updateLocalStorageAndUI();
        updateUI(type1, amount1, 'expense');
      } else {
        ee.innerHTML=`insufficient balance`
      }
    }
  }
  
  function updateLocalStorageAndUI() {
    localStorage.setItem('budgetData', JSON.stringify(balu));
  }
  
  function updateUI(type, amount, transactionType) {
    if (transactionType === 'income') {
      ball.innerHTML = `$${balu.balance}`;
      taa.innerHTML += `<tr>
        <td>${type}</td>
        <td><span class="text-success">+${amount}</span></td>
        <td>${balu.balance}</td>
      </tr>`;
    } else if (transactionType === 'expense') {
      spee.innerHTML = `$${balu.spend}`;
      ball.innerHTML = `$${balu.balance}`;
      exee.innerHTML += `<tr>
        <td>${type}</td>
        <td><span class="text-danger">-${amount}</span></td>
        <td>${balu.balance}</td>
      </tr>`;
    }
  }
  
  window.onload = function () {
    const storedData = localStorage.getItem('budgetData');
    if (storedData) {
      balu = JSON.parse(storedData);
      ball.innerHTML = `$${balu.balance}`;
      spee.innerHTML = `$${balu.spend}`;
      // Other elements to be updated as needed
    //   taa.innerHTML += `<tr>
    //     <td>${type}</td>
    //     <td><span class="text-success">+${amount}</span></td>
    //     <td>${balu.balance}</td>
    //   </tr>`;

    //   exee.innerHTML += `<tr>
    //     <td>${type}</td>
    //     <td><span class="text-danger">-${amount}</span></td>
    //     <td>${balu.balance}</td>
    //   </tr>`;
    }
  };
  
