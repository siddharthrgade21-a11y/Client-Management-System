// -------------------------------
// LOGIN + SIGNUP SYSTEM
// -------------------------------

function showSignup() {
    document.getElementById("loginPage").classList.add("hidden");
    document.getElementById("signupPage").classList.remove("hidden");
}

function showLogin() {
    document.getElementById("signupPage").classList.add("hidden");
    document.getElementById("loginPage").classList.remove("hidden");
}

function createAccount() {
    const user = document.getElementById("newUser").value;
    const pass = document.getElementById("newPass").value;

    if (user === "" || pass === "") {
        alert("Enter username and password");
        return;
    }

    localStorage.setItem("cmsUser", user);
    localStorage.setItem("cmsPass", pass);

    alert("Account created successfully!");
    showLogin();
}

function loginUser() {
    const user = document.getElementById("loginUser").value;
    const pass = document.getElementById("loginPass").value;

    const savedUser = localStorage.getItem("cmsUser");
    const savedPass = localStorage.getItem("cmsPass");

    if (user === savedUser && pass === savedPass) {
        document.getElementById("loginPage").classList.add("hidden");
        document.getElementById("signupPage").classList.add("hidden");
        document.getElementById("mainApp").classList.remove("hidden");
    } else {
        alert("Wrong username or password");
    }
}

// -------------------------------
// DASHBOARD NAVIGATION
// -------------------------------

function showSection(id) {
    document.querySelectorAll(".section").forEach(sec => sec.classList.add("hidden"));
    document.getElementById(id).classList.remove("hidden");
}

// -------------------------------
// CLIENT SYSTEM
// -------------------------------

let clients = [];
let projects = [];
let payments = [];

function addClient() {
    const name = document.getElementById("clientName").value;
    const email = document.getElementById("clientEmail").value;
    const phone = document.getElementById("clientPhone").value;

    if (name === "") return alert("Enter client name");

    clients.push({ name, email, phone });
    updateClients();
}

function updateClients() {
    const list = document.getElementById("clientList");
    list.innerHTML = "";

    clients.forEach(client => {
        const li = document.createElement("li");
        li.innerText = `${client.name} | ${client.email} | ${client.phone}`;
        list.appendChild(li);
    });

    document.getElementById("totalClients").innerText = clients.length;
    document.getElementById("reportClients").innerText = clients.length;
}

// -------------------------------
// PROJECT SYSTEM
// -------------------------------

function addProject() {
    const name = document.getElementById("projectName").value;
    const client = document.getElementById("projectClient").value;
    const budget = document.getElementById("projectBudget").value;

    if (name === "") return alert("Enter project name");

    projects.push({ name, client, budget });
    updateProjects();
}

function updateProjects() {
    const list = document.getElementById("projectList");
    list.innerHTML = "";

    projects.forEach(project => {
        const li = document.createElement("li");
        li.innerText = `${project.name} | ${project.client} | ₹${project.budget}`;
        list.appendChild(li);
    });

    document.getElementById("totalProjects").innerText = projects.length;
    document.getElementById("reportProjects").innerText = projects.length;
}

// -------------------------------
// PAYMENT SYSTEM
// -------------------------------

function addPayment() {
    const client = document.getElementById("paymentClient").value;
    const amount = document.getElementById("paymentAmount").value;

    if (amount === "") return alert("Enter amount");

    payments.push({ client, amount });
    updatePayments();
}

function updatePayments() {
    const list = document.getElementById("paymentList");
    list.innerHTML = "";

    let total = 0;

    payments.forEach(payment => {
        const li = document.createElement("li");
        li.innerText = `${payment.client} paid ₹${payment.amount}`;
        list.appendChild(li);
        total += Number(payment.amount);
    });

    document.getElementById("totalRevenue").innerText = `₹${total}`;
    document.getElementById("reportRevenue").innerText = total;
}

// -------------------------------
// DARK MODE
// -------------------------------

function toggleDarkMode() {
    document.body.classList.toggle("dark");
}

// -------------------------------
// CHART.JS GRAPH
// -------------------------------

const ctx = document.getElementById("revenueChart").getContext("2d");

new Chart(ctx, {
    type: "bar",
    data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May"],
        datasets: [{
            label: "Revenue",
            data: [12000, 19000, 8000, 15000, 22000]
        }]
    }
});