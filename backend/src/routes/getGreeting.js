const GREETINGS = [
    'Hello world!',
    'Bem-vindo!',
    'Random title for greetings',
    'Yup to-do list',
];

module.exports = async (req, res) => {
    res.send({
        greeting: GREETINGS[Math.floor(Math.random() * GREETINGS.length)],
    });
};
