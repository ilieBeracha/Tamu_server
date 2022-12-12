import fs from 'fs/promises';
import { userInterface } from '../models/userModel';
var xl = require('excel4node');

const workbook = new xl.Workbook();
const worksheet = workbook.addWorksheet('Sheet 1');
worksheet.cell(1, 1).string('Name');
worksheet.cell(1, 2).string('Email');
worksheet.cell(1, 3).string('Phone');
worksheet.cell(1, 4).string('id');

let row = 4;


var style = workbook.createStyle({
    font: {
        color: '#000000',
        size: 12,
    },
    numberFormat: '$#,##0.00; ($#,##0.00); -',
});

const EXCEL_USER_FILE = './1-data/users.xlsx'
const USER_FILE = './1-data/users.json';

export async function getAllUsers() {
    const users = await fs.readFile(USER_FILE)
    return JSON.parse(users.toString())
}

export async function saveUsers(users: userInterface[]) {
    await fs.writeFile(USER_FILE, JSON.stringify(users))
}

export async function saveUsersExcel(users: userInterface[]) {
    users.forEach((user) => {
        worksheet.cell(row, 1).string(user.fullname).style(style);
        worksheet.cell(row, 2).string(user.email).style(style);
        worksheet.cell(row, 3).string(user.phone).style(style);
        worksheet.cell(row, 4).string(user.id.toString()).style(style);
        row++;
    });
    workbook.write(EXCEL_USER_FILE);
}

