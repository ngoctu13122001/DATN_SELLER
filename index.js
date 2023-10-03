const sideLinks = document.querySelectorAll('.sidebar-seller .side-menu-seller li a:not(.logout)');

sideLinks.forEach(item => {
    const li = item.parentElement;
    item.addEventListener('click', () => {
        sideLinks.forEach(i => {
            i.parentElement.classList.remove('active');
        })
        li.classList.add('active');
    })
});

const menuBar = document.querySelector('.content-seller nav .bx.bx-menu');
const sideBar = document.querySelector('.sidebar-seller');

menuBar.addEventListener('click', () => {
    sideBar.classList.toggle('close');
});

const searchBtn = document.querySelector('.content-seller nav form .form-input button');
const searchBtnIcon = document.querySelector('.content-seller nav form .form-input button .bx');
const searchForm = document.querySelector('.content-seller nav form');

// account
const switches = document.querySelectorAll('.switch');
        
// Duyệt qua từng switch
switches.forEach(switchEl => {

    // Đặt trạng thái ban đầu dựa trên class 'active'
    if (switchEl.classList.contains('active')) {
        switchEl.querySelector('input[type="checkbox"]').checked = true;
    } else {
        switchEl.querySelector('input[type="checkbox"]').checked = false;
    }

    // Thêm sự kiện lắng nghe click cho mỗi switch
    switchEl.addEventListener('click', function() {
        const checkbox = switchEl.querySelector('input[type="checkbox"]');
        
        if (checkbox.checked) {
            // Nếu checkbox được bật, thêm class 'active'
            switchEl.classList.add('active');
        } else {
            // Nếu checkbox được tắt, xóa class 'active'
            switchEl.classList.remove('active');
        }
    });
});

// model edit and delete
 // Get the modal elements
 const editForm = document.getElementById('editForm');
 const deleteModal = document.getElementById('deleteModal');
 
 // Get the buttons that open the modals
 const editBtn = document.querySelector('.edit-btn');
 const deleteBtn = document.querySelector('.delete-btn');
 
 // Get all the close buttons
 const closeBtns = document.querySelectorAll('.close-btn');
 
 // Show the edit form when the edit button is clicked
 editBtn.onclick = function() {
    editForm.style.display = 'block';
};
 // Show the delete confirmation modal when the delete button is clicked
 deleteBtn.addEventListener('click', function() {
     deleteModal.style.display = 'block';
 });
 
 // Close the modals when any close button is clicked
 closeBtns.forEach(btn => {
     btn.addEventListener('click', function() {
         editForm.style.display = 'none';
         deleteModal.style.display = 'none';
     });
 });

// model thêm mới

 // Lấy modal và nút thêm mới
const addForm = document.getElementById('addForm');
const addNewBtn = document.querySelector('.add-new-btn');

// Lấy nút đóng trong modal
const closeBtn = addForm.querySelector('.close-btn');

// Hiện form thêm mới khi nhấp vào nút Thêm mới
addNewBtn.addEventListener('click', function() {
    addForm.style.display = 'block';
});

// Đóng form khi nhấp vào nút đóng
closeBtn.addEventListener('click', function() {
    addForm.style.display = 'none';
});

// (Tùy chọn) Đóng form khi nhấp ra ngoài form
window.addEventListener('click', function(event) {
    if (event.target == addForm) {
        addForm.style.display = 'none';
    }
});


//modal xem chi tiết
// Lấy modal và nút xem
const xemForm = document.getElementById('chitietForm');
const xemchitietBtn = document.querySelector('.xem-btn');

// Lấy nút đóng trong modal
const dongBtn = xemForm.querySelector('.close-btn');

// Hiện form xem chi tiết  khi nhấp vào nút Xem
xemchitietBtn.onclick = function() {
    xemForm.style.display = 'block';
};
// Đóng form khi nhấp vào nút đóng
dongBtn.addEventListener('click', function() {
    xemForm.style.display = 'none';
});

// (Tùy chọn) Đóng form khi nhấp ra ngoài form
window.addEventListener('click', function(event) {
    if (event.target == chitietForm) {
        chitietForm.style.display = 'none';
    }
});