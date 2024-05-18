const load = (key: any) => {
    let item = localStorage.getItem(key);
    return item ? JSON.parse(item) : item;
}

// keys that will be used:
// userId : current user id
// userName : current user first name
// userLastName : current user last name
// userEmail : current user email
// userRole : current user role
// userPassword: current user password
const save = (key: any, value: any) => {
    let valueAsString: string;
    try {
        valueAsString = JSON.stringify(value);
        localStorage.setItem(key, valueAsString);
    } catch (error) {
        console.error(error);
    }
}

const remove = (key: any) => {
    localStorage.removeItem(key);
}

export { load, save, remove }