//Learning tests

const functions = require('./functions')
//toBe
test('Adds 2 plus 2 to equal 4', () => {
    expect(functions.add(2, 2)).toBe(4);
});
//not.toBe
test('Adds 2 plus 2 to not equal 5', () => {
    expect(functions.add(2, 2)).not.toBe(5);
});
//toBeNull
test('Should be null', () => {
    expect(functions.isNull()).toBeNull();
});
//toBeFalsy
test('Should be falsy', () => {
    expect(functions.checkValue(0)).toBeFalsy();
});
//toEqual
test('User should be Chad Bowler object', () => {
    expect(functions.createUser()).toEqual({firstName: 'Chad', lastName: 'Bowler'});
});
//Less than and greater than
test('Should be under 1600', () => {
    const load1 = 800;
    const load2 = 800;
    expect(load1 + load2).toBeLessThanOrEqual(1600);
});
// Regex
test('There is no I in team', () => {
    expect('team').not.toMatch(/I/i);
});

//arrays
test('Admin should be in usernames', () => {
    usernames = ['john', 'karen', 'admin'];
    expect(usernames).toContain('admin');
});
//Working with async data
// test('User fetched name should be Leanne Graham', () => {
//     expect.assertions(1);
//     functions.fetchUser()
//         .then(data => {
//             expect(data.name).toEqual('Leanne Graham');
//         });
// });
//Promise
test('User fetched name should be Leanne Graham', async () => {
    expect.assertions(1);
    const data =  await functions.fetchUser();
    expect(data.name).toEqual('Leanne Graham');
     
});