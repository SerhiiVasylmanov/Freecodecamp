//Проверьте, классифицируется ли значение как логический примитив.
//Возврат true или false.
//Булевы примитивы true и false.

function booWho(bool) {
    return typeof bool === 'boolean' ? true : false;
}

booWho(null);