const getArgs = (argv) => {
    // todo: cover with tests
    let options = {};
    let commands = [];
    const [executer, file, ...rest] = argv;
    rest.forEach((value, index, array) => {
        if (value.startsWith("-")) {
            const eq = value.indexOf("=");
            if (eq != -1) {
                const argIndex = value.charAt(1) == "-" ? 2 : 1;
                options[value.slice(argIndex, eq)] = value.slice(eq + 1);
            } else if (value.charAt(1) == "-") {
                commands.push(value.slice(2));
            } else if (index === array.length - 1 || array[index + 1].startsWith("-")) {
                commands.push(value.slice(1));
            } else {
                options[value.charAt(1)] = array[index + 1];
            }
        }
    });
    return { commands: commands, options: options };
};

export { getArgs };
