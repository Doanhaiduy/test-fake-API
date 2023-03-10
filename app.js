// Array.prototype.map2 = function (callback) {
//     var result = [];
//     for (i = 0; i < this.length; i++) {
//         let html = callback(this[i], i);
//         result.push(html);
//     }
//     return result;
// };

// var arr = ["duy", "tien", "viet"];
// let b = arr.map2((name) => {
//     return "ten: " + name;
// });
// console.log(b);

// Array.prototype.forEach2 = function (callback) {
//     var result = [];
//     for (i = 0; i < this.length; i++) {
//         callback(this[i], i);
//     }
// };

// var arr = ["duy", "tien", "viet"];
// arr.forEach2((item) => {
//     console.log(item);
// });

// Array.prototype.filter2 = function (callback) {
//     var result = [];
//     for (i = 0; i < this.length; i++) {
//         if (callback(this[i], i)) {
//             result.push(this[i]);
//         }
//     }
//     return result;
// };

// var arr = [1, 2, 5, 7, 4, 3, 8];
// var b = arr.filter2((item) => {
//     return item > 5;
// });

// console.log(b);

// Array.prototype.some2 = function (callback) {
//     var result = false;

//     for (i = 0; i < this.length; i++) {
//         if (callback(this[i], i)) {
//             result = true;
//         }
//     }
//     return result;
// };

// var arr = [1, 2, 5, 7, 4, 3, 8];
// var b = arr.some ((item) => {
//     return item > 11;
// });

// console.log(b);

// Array.prototype.every2 = function (callback) {
//     var result = true;
//     for (i = 0; i < this.length; i++) {
//         if (!callback(this[i], i)) {
//             return false;
//         }
//     }
//     return result;
// };

// var arr = [1, 2, 5, 7, 4, 3, 8];
// var b = arr.every2((item) => {
//     return item > 5;
// });

// console.log(b);

// console.log(document.querySelector("h2").innerText);

// document.querySelector("div").onclick = function (e) {
//     // console.log(e.target);
//     e.preventDefault();
//     console.log(e.target);
// };

// // let arr1 = [1, 2, 3, 4, 5, 6, 7];
// // let arr2 = [...arr1];
// // console.log(arr2 );

// let ip = document.querySelector("input");
// let list = document.querySelector("ul");

// list.onmousedown = function (e) {
//     e.preventDefault();
//     console.log(e.target);
// };

// document.querySelector("div").onclick = function (e) {
//     console.log("DIV");
// };

// document.querySelector("button").onclick = function (e) {
//     e.stopPropagation();
//     console.log("button");
// };

// var a = {
//     name: "doan hai duy",
//     age: 2,
//     address: "Nha Trang",
// };
// console.log(typeof JSON.stringify(a));

// setTimeout(function () {
//     console.log(1);
//     setTimeout(function () {
//         console.log(2);
//         setTimeout(function () {
//             console.log(3);
//             setTimeout(function () {
//                 console.log(4);
//                 setTimeout(function () {
//                     console.log(5);
//                 }, 1000);
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000);

// var promise = new Promise(function (resolve, reject) {
//     resolve();
//     // reject();
// });
// promise
//     .then(function () {
//         console.log("successfully");
//     })
//     .then(function () {
//         console.log("successfully");
//     })
//     .catch(function (data) {
//         console.log("error", data);
//     })

//     .finally(function () {
//         console.log("final");
//     });

// function sleep(ms) {
//     return new Promise((resolve) => {
//         setTimeout(resolve, ms);
//     });
// }
// sleep(1000)
//     .then(() => {
//         console.log(1);
//         return sleep(1000);
//     })
//     .then(() => {
//         console.log(2);
//         return new Promise((resolve, reject) => reject("loi"));
//     })
//     .then(() => {
//         console.log(3);
//         return sleep(1000);
//     })
//     .then(() => {
//         console.log(4);
//         return sleep(1000);
//     })
//     .catch((error) => {
//         console.log(error);
//     })
//     .finally(() => {
//         console.log("end");
//     });

// var promise = new Promise((resolve, reject) => {
//     resolve("success!");
//     reject("error");
// });

// promise
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((err) => {
//         console.log(err);
//     });
// var promise1 = Promise.resolve("success!");
// var promise2 = Promise.reject("error!");

// var promise = new Promise(function (resolve) {
//     setTimeout(() => {
//         resolve([1]);
//     }, 2000);
// });

// var promise2 = new Promise(function (resolve) {
//     setTimeout(() => {
//         resolve([2, 3]);
//     }, 5000);
// });

// Promise.all([promise, promise2]).then((result) => {
//     var result1 = result[0];
//     var result2 = result[1];
//     console.log(result1.concat(result2));
// });

// var users = [
//     {
//         id: 1,
//         name: "Kien Dam",
//     },
//     {
//         id: 2,
//         name: "Son Dang",
//     },
//     {
//         id: 3,
//         name: "Hung Dam",
//     },
// ];

// var comments = [
//     {
//         id: 1,
//         user_id: 1,
//         content: "Anh son chua ra video",
//     },
//     {
//         id: 2,
//         user_id: 2,
//         content: "vua ra xong em oi",
//     },
//     {
//         id: 3,
//         user_id: 1,
//         content: "cam on anh",
//     },
// ];

// // lấy comment
// // từ comment lấy ra user_id
// // từ user_id lấy ra user

// // fake API
// function getComments() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(comments);
//         }, 1000);
//     });
// }

// function getUsersByIds(userIds) {
//     return new Promise((resolve) => {
//         var result = users.filter((user) => {
//             return userIds.includes(user.id);
//         });
//         setTimeout(() => {
//             console.log(result);
//             resolve(result);
//         }, 1000);
//     });
// }

// getComments()
//     .then((comments) => {
//         var userIds = comments.map((comment) => {
//             return comment.user_id;
//          });
//         console.log(userIds);
//         return getUsersByIds(userIds).then((users) => {
//             return {
//                 users: users,
//                 comments: comments,
//             };
//         });
//     })
//     .then(function (data) {
//         console.log(data);
//         // var commentBlock = document.querySelector("#comment-block");
//         var html = "";
//         data.comments.forEach((comment) => {
//             var user = data.users.find((user) => {
//                 return user.id === comment.user_id;
//             });
//             html += `<li> ${user.name}: ${comment.content}</li>`;
//             console.log(user.name + ": " + comment.content);
//         });
//         // commentBlock.innerHTML = html;
//     });

// var PostApi = "https://jsonplaceholder.typicode.com/posts";
// fetch(PostApi)
//     .then((response) => {
//         return response.json();
//     })
//     .then((posts) => {
//         var htmls = posts.map((post) => {
//             return `<li>
//                 <h2>${post.title}</h2>
//                 <p>${post.body}</p>
//             </li>`;
//         });
//         var html = htmls.join("");
//         document.getElementById("post-block").innerHTML = html;
//     })
//     .catch(() => {
//         console.log("Call API fail");
//     });

// var API = "http://localhost:3000/courses";
// fetch(API)
//     .then((response) => {
//         return response.json();
//     })
//     .then((data) => {
//         var html = data.map((element) => {
//             return `<li>
//                 <h2>${element.name}</h2>
//                 <p>${element.description}</p>
//             </li>`;
//         });
//         document.querySelector("#post-block").innerHTML = html.join("");
//     });

// CRUD
//     - Create: tạo mới => POST
//     - Read: lấy dữ liệu => GET
//     - Update: chỉnh sửa => PUT / PATCH
//     - Delete: xóa => DELETE
// PUT: tạo ra một resource mới nếu như nó không tồn tại.
//  Nôm na đó là, khi sử dụng PUT để Update chúng ta phải tạo ra một bản ghi đầy đủ
//  các field để yêu cầu cập nhật và nó sẽ thực hiện ghi đè nên các field đã tồn tại.
// PATCH: được dùng để thay đổi data thế nhưng nó chỉ thay đổi những field được yêu cầu thay đổi thay vì toàn bộ resource
// Chú ý rằng, bạn không thể dùng method PATCH cho một resource không tồn tại như PUT

// -------------------------------------

var courseApi = "http://localhost:3000/courses";

function start() {
    getCourses(renderCourses);
    handleCreateForm();
}

start();

// function
function getCourses(callback) {
    fetch(courseApi)
        .then((response) => {
            return response.json();
        })
        .then(callback);
}

function CreateCourse(data, callback) {
    var options = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        },
    };
    fetch(courseApi, options)
        .then((response) => response.json())
        .then(callback);
}

function handleDeleteCourse(id) {
    var options = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    };
    fetch(courseApi + "/" + id, options)
        .then((response) => response.json())
        .then(() => {
            // getCourses(renderCourses);
            var courseItem = document.querySelector(".course-item-" + id);
            courseItem.remove();
        });
}

function updateCourse(data, id) {
    var options = {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        },
    };
    fetch(courseApi + "/" + id, options)
        .then((response) => response.json())
        .then(() => {
            document.querySelector(`.course-item-${id} h4`).innerText = data.name;
            document.querySelector(`.course-item-${id} p`).innerText = data.description;
            document.querySelector('input[name = "name"]').value = "";
            document.querySelector('input[name = "description"]').value = "";
            document.querySelector("#create").innerText = "Create";
            handleCreateForm();
        });
}

function renderCourses(courses) {
    var listCoursesBlock = document.querySelector("#list-courses");
    var htmls = courses.map((course) => {
        return `<li class="course-item-${course.id}">
            <h4>${course.name}</h4>
            <p>${course.description}</p>
            <button onclick = "handleDeleteCourse(${course.id})">Xóa</button>
            <button onclick = "handleUpdateCourse(${course.id})">Sửa</button>
        </li>
        `;
    });
    listCoursesBlock.innerHTML = htmls.join("");
}

function handleCreateForm() {
    var createBtn = document.querySelector("#create");
    createBtn.onclick = function () {
        var name = document.querySelector('input[name = "name"]');
        var description = document.querySelector('input[name = "description"]');
        if (description.value === "" || name.value === "") {
            return;
        } else {
            var formData = {
                name: name.value,
                description: description.value,
            };
            CreateCourse(formData, () => {
                getCourses(renderCourses);
                name.value = "";
                description.value = "";
            });
        }
    };
}

function handleUpdateCourse(id) {
    var updateBtb = document.querySelector("#create");
    updateBtb.textContent = "update";
    var name = document.querySelector('input[name = "name"]');
    var description = document.querySelector('input[name = "description"]');
    name.value = document.querySelector(`.course-item-${id} h4`).innerText;
    description.value = document.querySelector(`.course-item-${id} p`).innerText;

    name.focus();
    updateBtb.onclick = function () {
        if (name.value === "" && description.value === "") {
            handleDeleteCourse(id);
        } else {
            var formData = {
                name: name.value,
                description: description.value,
            };
            updateCourse(formData, id);
        }
    };
}

// // if (true) {
// console.log("testvar" + testvar);
// // console.log("testlet" + testlet);
// // console.log("testconst" + testconst);

// var testvar = 1;
// let testlet = 2;
// const testconst = 3;
// // }
// // testconst = 1;
