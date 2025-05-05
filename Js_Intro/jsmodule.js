const playGuitar = () =>{
    return "Playing Guitar";
};

const shredding = () =>{
    return "Shredding some licks";
};

const plucking = () =>{
    return "Plucking the strings";
};

export default playGuitar; //* only one default export
export {shredding, plucking}; //* export all the functions - multiple named exports