const axios = require("axios");

describe("Testing the Departments  API", () => {
  const department = {
    departmentName: "Test Department",
  };

  it("GET/Department -> get an array of departments", async () => {
    const response = await axios.get(
      "https://csse-procumentry-api-test.herokuapp.com/api/departments"
    );
    expect(response.status).toBe(200);
  });

  it("POST/Department/ -> add a department", async () => {
    const response = await axios.post(
      "https://csse-procumentry-api-test.herokuapp.com/api/departments",
      department
    );
    expect(response.status).toBe(201);
  });
});

describe("Testing the Manager  API", () => {
  it("GET/Managers -> get an array of managers", async () => {
    const response = await axios.get(
      "https://csse-procumentry-api-test.herokuapp.com/api/managers"
    );
    expect(response.status).toBe(200);
  });

  it("GET/Products/Unapproved -> get a list of unapproved products", async () => {
    const response = await axios.get(
      "https://csse-procumentry-api-test.herokuapp.com/api/managers/products"
    );
    expect(response.status).toBe(200);
  });
});

describe("Testing the Order Requests  API", () => {
  it("GET/Orders/Pending -> get an array of orders to approve", async () => {
    const response = await axios.get(
      "https://csse-procumentry-api-test.herokuapp.com/api/orderrequests/pending"
    );
    expect(response.status).toBe(200);
  });

  it("GET/Orders/Approved -> get an array of orders to approve", async () => {
    const response = await axios.get(
      "https://csse-procumentry-api-test.herokuapp.com/api/orderrequests/approved"
    );
    expect(response.status).toBe(200);
  });

  it("GET/Orders/Declined -> get a list of declined orders", async () => {
    const response = await axios.get(
      "https://csse-procumentry-api-test.herokuapp.com/api/orderrequests/declined"
    );
    expect(response.status).toBe(200);
  });
});

describe("Testing the Site Manager  API", () => {
  const sitemanager = {
    name: "Site Mangaer",
    contactNumber: "12345678",
    email: "manager@test.com",
    password: "password",
  };

  it("GET/SiteManagers -> get an array of managers", async () => {
    const response = await axios.get(
      "https://csse-procumentry-api-test.herokuapp.com/api/sitemanagers"
    );
    expect(response.status).toBe(200);
  });

  it("POST/SiteManagers/ -> add a manager", async () => {
    const response = await axios.post(
      "https://csse-procumentry-api-test.herokuapp.com/api/sitemanagers",
      sitemanager
    );
    expect(response.status).toBe(201);
  });
});

describe("Testing the Delivery Advices  API", () => {
  it("GET/DeliveryAdvice/Pending -> get an array of orders to delivery advice", async () => {
    const response = await axios.get(
      "https://csse-procumentry-api-test.herokuapp.com/api/deliveryadvice/pending"
    );
    expect(response.status).toBe(200);
  });

  it("GET/DeliveryAdvice/Approved -> get an array of delivery advice to approve", async () => {
    const response = await axios.get(
      "https://csse-procumentry-api-test.herokuapp.com/api/deliveryadvice/approved"
    );
    expect(response.status).toBe(200);
  });

  it("GET/DeliveryAdvice/Drafts -> get a list of delivery advices drafts", async () => {
    const response = await axios.get(
      "https://csse-procumentry-api-test.herokuapp.com/api/deliveryadvice/drafts"
    );
    expect(response.status).toBe(200);
  });
});

describe("Testing the Manager  API", () => {
  it("GET/managers -> get an array of managers", async () => {
    const response = await axios.get(
      "https://csse-procumentry-api-test.herokuapp.com/api/managers"
    );
    expect(response.status).toBe(200);
  });

  it("POST/Manager/ -> add a manager", async () => {
    const response = await axios.post(
      "https://csse-procumentry-api-test.herokuapp.com/api/managers",
      {
        department: "63671eccc40249c4a481d7b8",
        contactNumber: "23424324",
        email: "test@manager.com",
        password: "sadsd",
      }
    );

    expect(response.status).toBe(201);
  });
});

describe("Testing the Procument officer  API", () => {
  const testAdmin = {
    employeeName: "Admin",
    contactNumber: "12345",
    email: "procument@industry.com",
    password: "test",
  };

  const testAdminLogin = {
    email: "procument@industry.com",
    password: "test",
  };

  it("POST/Admin Officer/ -> Create a admin officer", async () => {
    const response = await axios.post(
      "https://csse-procumentry-api-test.herokuapp.com/api/admin/",
      testAdmin
    );

    expect(response.status).toBe(201);
  });

  it("POST/Admin Officer/ -> Login a admin officer", async () => {
    const response = await axios.post(
      "https://csse-procumentry-api-test.herokuapp.com/api/admin/login",
      testAdminLogin
    );

    expect(response.status).toBe(200);
  });
});
