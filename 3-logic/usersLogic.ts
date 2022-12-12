import { saveUsers, getAllUsers, saveUsersExcel } from '../2-dal/dal';
import { userInterface } from '../models/userModel';

export async function allUsers() {
    return await getAllUsers();
}

export async function postNewUser(fullname: string, email: string, phone: string) {
    const users: userInterface[] = await allUsers();
    if (!users.find(u => u.email.includes(email))) {
        const id = Math.max(...users.map(i => i.id)) + 1;
        const user: userInterface = {
            id,
            fullname,
            email,
            phone
        };
        users.push(user);
        await saveUsers(users);
        await saveUsersExcel(users);
    } else {
        console.log('user already registred');
        return;
    }
}