'use strict';

/**
 * Сделано задание на звездочку
 * Реализован метод importFromCsv
 */
exports.isStar = true;
var PHONE_LENGTH = 10;

/**
 * Телефонная книга
 */
var phoneBook = {};

function parsePhone(phone) {
    if (phone.length == PHONE_LENGTH) {
        return parseInt(phone, 10);
    }
}

/**
 * Добавление записи в телефонную книгу
 * @param {String} phone
 * @param {String} name
 * @param {String} email
 */
exports.add = function (phone, name, email) {
    if (!name) {
        console.log('record was not added: name is required');
        return false;
    }
    var phoneNumber = parsePhone(phone);
    if (isNaN(phoneNumber) || phoneNumber in phoneBook) {
        return false;
    }
    phoneBook[phoneNumber] = {'name': name, 'email': email};
    return true;
};

/**
 * Обновление записи в телефонной книге
 * @param {String} phone
 * @param {String} name
 * @param {String} email
 */
exports.update = function (phone, name, email) {
    var phoneNumber = parsePhone(phone);
    if (!(phoneNumber in phoneBook)) {
        return false;
    }
    if (name) {
        phoneBook[phoneNumber].name = name;
    }
    if (isNaN(email)) {
        delete phoneBook[email].email;
    } else {
        phoneBook[email].email = email;
    }
    return true;
};

/**
 * Удаление записей по запросу из телефонной книги
 * @param {String} query
 */
exports.findAndRemove = function (query) {

};

/**
 * Поиск записей по запросу в телефонной книге
 * @param {String} query
 */
exports.find = function (query) {

};

/**
 * Импорт записей из csv-формата
 * @star
 * @param {String} csv
 * @returns {Number} – количество добавленных и обновленных записей
 */
exports.importFromCsv = function (csv) {
    // Парсим csv
    // Добавляем в телефонную книгу
    // Либо обновляем, если запись с таким телефоном уже существует

    return csv.split('\n').length;
};
