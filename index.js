const clickmeBtn = document.querySelector(".submitBtn");
const modal = document.getElementById("modal");
const yesButton = document.querySelector(".yesBtn");
const noButton = document.querySelector(".noBtn");
const colseButton = document.querySelector(".closeBtn");
const modalEl = document.querySelector(".modalTitle");
const overlay = document.querySelector(".overlay");

function showMessage(Message) {
    const textEle = document.getElementById("text");
    textEle.innerHTML = Message || "";
};

function showModal(title, leftBtn, rightBtn) {
    overlay.classList.add('active');
    modal.classList.add("show");
    yesButton.innerHTML = leftBtn;
    noButton.innerHTML = rightBtn;
    modalEl.innerHTML = title;
};

function removeModal() {
    modal.classList.remove('show');
    overlay.classList.remove('active');
};

clickmeBtn.addEventListener('click', ()=> {
    showModal("Are you sure you want to continue?", "Yes", "No");
});

yesButton.addEventListener('click', ()=> {
    removeModal();
    showMessage(`You just clicked "Yes"`);
    
});

noButton.addEventListener('click', ()=> {
    removeModal();
    showMessage(`You just clicked "No"`);  
});

colseButton.addEventListener('click', ()=> {
    removeModal();  
    showMessage("You did not choose");
});